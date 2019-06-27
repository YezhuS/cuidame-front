<template>
  <div id="app">
  		<Header :title="headerTitle" :menuH_left="headerNavLeft" :menuH_right_logged="headerNavRightLogged" :menuH_right_nologged="headerNavRightNoLogged"/>

  	<div>
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
				headerTitle: "Nombre de la APP",
				headerNavLeft: [
					{id: 1, url: "/timeline", title: "Novedades"},
					{id: 2, url: "/", title: "Adopción"},
					{id: 3, url: "/perfil", title: "Perfil"},
					{id: 4, url: "/createarticle", title: "Nueva noticia"},
				],
				headerNavRightLogged: [
					{id: 1, url: "/perfil", title: "Perfil"},
					{id: 2, url: "/", title: "Cerrar Sesión"},
				],
				headerNavRightNoLogged: [
					{id: 1, url: "/login", title: "Iniciar Sesión"},
					{id: 2, url: "/signUp", title: "Registrarse"},
				],
				footerNav: [
					{id: 1, url: "/about", title: "Sobre mí"},
					{id: 2, url: "/", title: "Página dos"},
				]
			}
		}
	}

</script>

<style>

</style>
