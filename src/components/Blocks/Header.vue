<template>
	<header class="row">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="col-md-12">
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

				<ul v-if="isLoggedIn" class="navbar-nav right">
					<router-link 
					v-for="item in menuH_right_logged"
					:key="item.id"
					:to="item.url"
					tag="li"  
					class="nav-item">
						<span class="email black-text">{{currentUser}}</span>
						<a class="nav-link" href="#">{{item.title}}</a>	
						<a href="#" @click="logout()" class="btn black">Cerrar sesión</a>
					</router-link>
				</ul>

				<ul v-else class="navbar-nav right">
					<router-link 
					v-for="item in menuH_right_nologged"
					:key="item.id"
					:to="item.url"
					tag="li"  
					class="nav-item">
						<a class="nav-link" href="#">{{item.title}}</a>	
					</router-link>
				</ul>
			</div>

		</nav>
	</header>
</template>

<script>
import Firebase from '../../firebase'
import { store } from '../../store/store'
	export default {
		props: [
			"title",
			"menuH_left",
			"menuH_right_logged",
			"menuH_right_nologged"],

		data(){
			return{
				isLoggedIn: $store.getters.isAuthUser,
     		currentUser: false
			}
		},
		// created(){
		// 	if (Firebase.auth().currentUser) {
		// 		this.isLoggedIn = true;
		// 		this.currentUser = Firebase.auth().currentUser.email;
    // 	}
		methods: {
			logout: function() {
			// 		Firebase.auth().signOut()
			// 			.then(() => {
			// 				this.$router.replace('/');
			// 				});
			}
		}
	}
		
  	
</script>

<style>
	
	.navbar{
		width: 100%
	}

	#title{
		clear: both;
		font-size: 5;
	}
/* HELPERS */
	.left{
		float: left
	}
	.right{
		float: right
	}
	

</style>