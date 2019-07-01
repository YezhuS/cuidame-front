<template>
<div id="box"> 
  <p class="error" v-if="error">{{ error }}</p>
  <div class="post-container">
  <div v-for="( post, index ) in posts" 
  :item="post"
  :index="index"
  :key="post.id" 
  id="post" class="card w-80 border-primary" >
    <div class="card-header col-sm-12 text-center">
      <span class="left"> {{post.type}}  </span>
      <span class="card-title"> <strong>{{post.title}}</strong></span>
      <span class="right">{{post.created_at}}</span> 
    </div>
    <div class="row">
      <div class="col-sm-10">
       <div class="card-body">
        <span class="card-title"><h6>👁‍🗨 {{post.place}}</h6></span><br>
        <p class="card-text">{{post.description}}</p>
        <span class="card-text"><small>{{post.user.user}}</small></span>
      </div>
    </div>
    <div class="col-sm-2">
      <img src="https://via.placeholder.com/150" class="card-img" alt="">
    </div>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-success">Contactar</button>
      <button type="button" class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button>
    </div>
  </div>
  </div>
</div>
</template>

<script>
//import PostService from '../PostService'
import axios from 'axios'

let url = 'http://localhost:5000/api/posts/'

export default {
  name: 'NewArticle',
  data(){
    return {
      posts:[],
      error: ''
    }
  },
  methods:{
    async deletePost(id){
      await axios.delete(`${url}${id}`)
      await axios.get(url)
        .then(response => {
          this.posts = response.data;
        })
        .catch(err => {
          console.log(err.message);
        })
    }
  },

  async created(){
    await axios.get(url)
      .then(response => {
        this.posts = response.data
      })
      .catch(err => {
        this.error = err.message;
      })
  }
  // async created(){
  //   try{
  //     this.posts = await PostService.getPosts();
  //   }catch(err){
  //     this.error = err.message;
  //   }
  // }
}
</script>
