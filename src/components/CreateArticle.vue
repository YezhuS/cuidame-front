<template>
<div>
	<form class="col-6">
		<div class="form-group row">
			<label for="" class="col-sm-3">Título</label>
			<div class="col-sm-9">
				<input type="text" name="" id="head" class="form-control" v-model='news.title'>
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Mensaje</label>
			<div class="col-sm-9">
				<textarea name="" id="description" cols="50" rows="5" v-model="news.description">
				</textarea>
			</div>
		</div>

		<div class="form-group row">
			<label for="" class="col-sm-3">Añadir fotos</label>
			<div class="col-sm-9">
				<input type="file" name="" id="photo" class="">
			</div>
		</div>

		<div class="form-group row">
			<label for="" class="col-sm-3">¿Dónde se encuentra?</label>
			<div class="col-sm-9">
				<input type="text" name="" id="place" class="form-control" v-model='news.place'>
			</div>
		</div>

		<div class="form-group row">
			<label for="" class="col-sm-3">Tipo animal</label>
			<div class="col-sm-9">
				<input type="text" name="" id="type" class="form-control" v-model='news.type'>
			</div>
		</div>

		<div class="form-group row">
			<button class="btn btn-dark btn-block" type="submit" @click.prevent='created'>Add New Article</button>
		</div>
	</form>
	
</div>

</template>

<script>
//import PostService from "../PostService"
import axios from 'axios'

let emptyNew = {
  title: "",
  type: "",
  time: "",
  user: "Admin",
	place: "",
	rol: "",
	description: ""
}

	export default {

		data(){
			return{
				news: JSON.parse(JSON.stringify(emptyNew)),
				posts:[],
				error:''
			}
		},
		methods:{
		 	created(){
			 axios.post('http://localhost:5000/api/posts/', {
				title: document.getElementById('head').value,
				type: document.getElementById('type').value,
				user: "pepe00",//document.getElementById('user'),
				description: document.getElementById('description').value,
				place: document.getElementById('place').value,
				enabled: true
			
			})
					.then(response => {
						console.log("Ole tus cojones pelirrojos!");
					})
					.catch(err => {
						this.error = err.message;
					})
			}
		}
		
		// 	async createPost(){
		// 		try{
		// 			this.posts = await PostService.insertPost();
		// 			this.news = JSON.parse(JSON.stringify(emptyNew))
		// 		}catch(err){
		// 			this.error = err.message
		// 		}
			
		// }

		// methods: {
		// 	addNewArticle() {
				// this.$emit('add', this.news)
				
			//},
			// addNews(article){
			// 	this.$store.commit("addNewArticle", {...article})
			// }
		}
	
</script>