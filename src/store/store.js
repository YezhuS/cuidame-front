import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    token: localStorage.getItem('token') || '',
    posts: []
  },
  mutations: {
    setPost(state, payload){
      state.posts = payload
    },
    addNewArticle(state, payload){
      state.posts.push(payload)
    },
    starUserSession(state, payload){
      state.user = payload
    },
    removeUserSession(state){
      state.user = null
    }
  },
  //para acciones como axios
  actions: {
    
  },
  //computed properties
  getters: {
    isAuthUser: state => !!state.token,
    authStatus: state => state.user

    // isAuthUser(state, getters){
    //   return (state.user !== null)
   }
  })