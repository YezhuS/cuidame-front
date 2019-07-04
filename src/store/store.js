import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import jwt_decode from 'jwt-decode'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    posts: [],
    userUid: '',
    dataProfile: localStorage.getItem('dataProfile') || ''
  },
  mutations: {
    setPost(state, payload){
      state.posts = payload
    },
    addNewArticle(state, payload){
      state.posts.push(payload)
    },
    starUserSession(state, payload){
      state.token = payload
      state.status = 'success'
    },
    removeUserSession(state){
      state.token = ''
      state.dataProfile = ''
    },
    starUserSessionError(state){
      state.token = ''
      state.status = 'error'
    },
    showInProfile(state, payload){
      state.dataProfile = payload
    }
  },
  //para acciones como axios
  actions: {
    signup(context, payload) {

      return new Promise((resolve,reject)=>{

        axios.post('http://localhost:5000/api/users', payload)
          .then(res => {
          console.log(res)
          
          resolve(res);


           err => {
            localStorage.removeItem('token');
            context.commit('starUserSessionError')
            console.log(err);
            alert(err)
            reject(err);
          }
        })

      })
       
    },


     login(context, payload){

      return new Promise((resolve,reject)=>{

      axios.post('http://localhost:5000/api/auth/login', payload)
      .then(res => {
      //if successfull
      if (res.status === 200) {
        console.log(res)
        let accessToken = res.data.token
        let showInProf = payload.email
        context.commit('showInProfile', showInProf) 
        localStorage.setItem('dataProfile', showInProf)
        context.commit('starUserSession', accessToken)
        localStorage.setItem('token', accessToken);
        axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;

        axios.get('http://localhost:5000/api/users/'+ this.getters.userId, payload).then(res=>{
          console.log(res.data)
        })

        resolve(res)

      } err => {
        localStorage.removeItem('token')
        context.commit('starUserSessionError')
        alert(err)
        reject(err)
        }
      })
      })
    },

    logout(context){
      return new Promise((resolve)=>{
        localStorage.removeItem('dataProfile')
        localStorage.removeItem('token');
        context.commit('removeUserSession')
                
        delete axios.defaults.headers.common['Authorization'];

      resolve();

      })
    }
  },
  //computed properties (para los data de los components)
  getters: {
    isAuth: state => !!state.token,
    authStatus: state => state.status,
    dataProfile: state => state.dataProfile,
    // userId: state => {
    //   let objToken = jwt_decode(state.token)
    //   return objToken.id
    // } 
   }
  })