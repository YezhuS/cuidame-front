import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
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
  actions: {
    async getPosts(context){
      let postURL = "http://localhost:5000/api/posts/"
      let response = await axios.get(postURL);
      let data = response.data

      context.commit("setPost", data)
    },
    async postPosts(context){
      let postURL = "http://localhost:5000/api/posts/"
      let response = await axios.post(postURL);
      let data = response.data

      context.commit("setPost", data)
    }
  },
  getters: {
    isAuthUser(state, getters){
      return (state.user !== null)
   }
  }
})