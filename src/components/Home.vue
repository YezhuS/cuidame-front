<template>
	<div class="row">
		<div id="home" class="text-center">
			<div class="background">
				<h1>¡Bienvenidos a Cuídame!</h1>
				<h2>🐈 Una APP con muchas patas 🐒</h2>
			
			</div>
			<div>
				<!-- <button  class="btn btn-primary" @click.prevent="goToTutorial">Tutorial</button> -->
				<button  class="btn btn-primary" @click.prevent="goToTimeline">Novedades</button>
				<button  class="btn btn-primary" @click.prevent="goToRegister">Registro</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			goToRegister(){
				//replace: cambia la subcadena actual por la que ponemos entre parentesis
				//this.$router: coge la dirección actual 
			this.$router.replace("/SignUp")
			},
			goToTimeline(){
				this.$router.replace("/timeline")
			},
			// goToTutorial(){
			// 	this.$router.replace("/tutorial")
			// }
		}
	}
</script>

<style>
	
	#home {
		background: url("../../src/assets/fondo2.jpg");
		height: 100%;
		width: 100%;
		padding: 10%;
		margin: 0 auto
	}
	h1,h2{
		margin:6%;
	}
	.background{
		background: #eee;
		opacity: 0.8;
		max-width: 80%;
		margin: 0 auto;
		padding: 20px 0;

	}

</style>