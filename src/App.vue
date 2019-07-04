<template>
  <div id="app">
  		<Header :title="headerTitle" :menuH_left="headerNavLeft" :menuH_right_logged="headerNavRightLogged" :menuH_right_nologged="headerNavRightNoLogged"/>

  	<div id="body">
  		<router-view></router-view>
		</div>

  		<Footer :menuF="footerNav"/>
  	
  </div>
</template>

<script>
	
	import Header from "./components/Blocks/Header.vue"
	import Footer from "./components/Blocks/Footer.vue"

	export default {
		components:{
			Header,
			Footer
		},
		data(){
			return {
				headerTitle: "Cuídame",
				headerNavLeft: [
					{id: 1, url: "/timeline", title: "Novedades"},
				],
				headerNavRightLogged: [
					{id: 1, url: "/perfil", title: "Perfil"},
				],
				headerNavRightNoLogged: [
					{id: 1, url: "/login", title: "Iniciar Sesión"},
					{id: 2, url: "/signUp", title: "Registrarse"},
				],
				footerNav: [
					{id: 1, url: "/about", title: "Sobre mí"},
				]
			}
		}
	}

</script>

<style>




</style>
