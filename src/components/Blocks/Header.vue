<template>
	<header class="row">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="col-12">
			<router-link to="/" id="title" class="navbar-nav">{{title}}</router-link>
				<ul class="navbar-nav left">
					<router-link 
					v-for="item in menuH_left"
					:key="item.id"
					:to="item.url"
					tag="li"  
					class="nav-item">
						<a class="nav-link" href="#">{{item.title}}</a>	
					</router-link>
				</ul>

					<ul v-if="!isLoggedIn" 	class="navbar-nav right">
					<router-link 
					v-for="item in menuH_right_nologged"
					:key="item.id"
					:to="item.url"
					tag="li"  
					class="nav-item">
						<a class="nav-link" href="#">{{item.title}}</a>	
					</router-link>
				</ul>

				<ul v-if="isLoggedIn" class="navbar-nav right">
					<router-link 
					v-for="item in menuH_right_logged"
					:key="item.id"
					:to="item.url"
					tag="li"  
					class="nav-item">
						<a href="#" class="email black-text">{{currentUser}}</a>
						<!-- <a href="#" class="nav-link" >{{item.title}}</a>	 -->
						<a href="#" @click="logout()" class="btn">Cerrar sesión</a>
					</router-link>
				</ul>

			
			</div>

		</nav>
	</header>
</template>

<script>
import { store } from '../../store/store'
import login from '../Login'
	export default {
	//	components:[login],
		props: [
			"title",
			"menuH_left",
			"menuH_right_logged",
			"menuH_right_nologged"],

		data(){
			return{
     		
			}
		},
			methods: {
			logout(){
				store.dispatch('logout').then(()=>{
					this.$router.replace('/')
				})
			} 
		},
		//nos sirve como los datos pero recarga directamente al hacer la acción
		computed:{
				isLoggedIn: function(){
					return store.getters.isAuth
				},
				currentUser: function(){
					return store.getters.dataProfile
				}
		},
		//se hace la acción al cambiar de componentes (como cambiar de pestañas)
		//mounted(){

		//},
		// created(){
		// 	$emit(this.isLoggedIn = true)
		// },
	
	}
		
  	
</script>

<style>
	
	.navbar{
		width: 100%
	}

	#title{
		clear: both;
		font-size: 50;
	}
/* HELPERS */
	.left{
		float: left
	}
	.right{
		float: right
	}
	

</style>