<template>
	<div class="box">
	<form class="form">
		<!-- Quiero que se pueda cambiar la foto principal que será vista en el perfil y los anuncios -->
		<!-- <div  v-for="(post, index) in posts" :item="post" :index="index" :key="post.id" > -->
			<!-- <div> 
			<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
					<input type="file">

		</div> -->
		<div class="form-group row" >
			<label for="" class="col-sm-3">Usuario</label>
			<div class="col-sm-4">
				<input type="text" name="" id="" class="form-control" v-model="users.user">
			</div>
		</div>
			<div class="form-group row">
			<label for="" class="col-sm-3">Contraseña</label>
			<div class="col-sm-4">
				<input type="password" name="" id="" class="form-control"  v-model="users.password">
			</div>
		</div>
		<div id="Personal">
			<h3>Datos personales</h3>
			<div class="form-group row">
				<label for="" class="col-sm-3">Nombre</label>
				<div class="col-sm-4">
					<input type="text" name="" id="" class="form-control"
					v-model="users.firstName">
				</div>
			</div>
				<!-- <div class="form-group row">
				<label for="" class="col-sm-3">Ciudad/municipio actual</label>
				<div class="col-sm-4">
					<input type="text" name="" id="" class="form-control" v-model="users.city">
				</div> 
			</div>-->
				<!-- <div class="form-group row">
				<label for="" class="col-sm-3">Fecha de nacimiento</label>
				<div class="col-sm-4">
					<input type="date" name="" id="" class="form-control" >
				</div>
			</div> -->
			<div id="Contact">
					<h5>Detalles de contacto</h5>
				<div class="form-group row">
					<label for="" class="col-sm-3">Email</label>
					<div class="col-sm-4">
						<input type="email" name="" id="" class="form-control"  v-model="users.email">
					</div>
				</div>
				<div class="form-group row">
					<label for="" class="col-sm-3">Móvil</label>
					<div class="col-sm-4">
						<input type="text" name="" id="" class="form-control" v-model="users.phone">
					</div>
				</div>
				<!-- <div class="form-group row">
					<label for="" class="col-sm-3">Redes sociales</label>
					<div class="col-sm-4">
						<input type="text" name="" id="" class="form-control">
					</div>
				</div>
				<div class="form-group row">
					<label for="" class="col-sm-3">Página Web</label>
				<div class="col-sm-4">
					<input type="url" name="" id="" class="form-control">
				</div>
			</div> -->
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">¿Qué soy? Tipo de Usuario</label>
		<select class="custom-select col-4" id="role" v-model="users.role">
			<option selected>Choose...</option>
			<option value="User">Particular</option>
			<option value="House">Casa de acogida</option>
			<option value="Default">Solo estoy de visita</option>
  	</select>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Dirección</label>
			<div class="col-sm-4">
				<input type="text" name="" id="" class="form-control" v-model="users.address">
			</div>
		</div>
			<!-- <div id="Animal">
				<h3>Mis pequeños</h3> -->
				<!-- Activado solo si da en adopción -->
					<!-- <div class="form-group row">
						<label for="" class="col-sm-3">Nombre</label>
						<div class="col-sm-4">
							<input type="text" name="" id="" class="form-control" >
						</div>
					</div>
					<div class="form-group row">
						<label for="" class="col-sm-3">Detalles</label>
						<div class="col-sm-4">
							<textarea name="" id="" cols="50" rows="5"></textarea>
						</div>
					</div> -->
				<!-- <div>
					<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
					<input type="file">
				</div> -->
		<!-- </div> -->
	<div class="form-group row justify-content-between">
		<div class="form-group col-3">
			<button class="btn btn-dark" type="button" @click.prevent="toCreateArticle">New Article</button>
		</div>
		<!-- <div class="form-group col-3">
			<button class="btn btn-danger" type="button" @click="counterReport()">Reportar</button>
			<p>{{ totalReportes }}</p>
		</div> -->
		<div class="form-group col-3">
			<button class="btn btn-warning" type="submit"  @click.prevent="putData(users._id)">Guardar cambios</button>

		</div>
	</div>
		<!-- <p>Aquí vendría algo como POPULARIDAD que viene a ser los votos recibidos</p> -->
		<!-- </div> -->
	</form>
</div>
</template>

<script>
import axios from 'axios'
import { store } from '../store/store'

let url = 'http://localhost:5000/api/users/'
let userId = store.getters.userId

	export default {
		data(){
			return {
				totalReportes: 0,
				users:{},
				data:{
					user: "",
					email: "",
					password: "",
					firstName: "",
					lastName: "",
					address: "",
					phone: ""
				},
				error:""
			}
		},
		// computed:{
		// 	userId: function(){
		// 		return store.getters.userId
		// 	}
		// },
		created(){
			axios.get(`${url}${userId}`)//
				.then(response => {
					console.log(response)
					this.users = response.data
				})
				.catch(err => {
					console.log(err.message)
				})
		},
		methods: {
			toCreateArticle(){
				this.$router.replace("/createarticle")
			},
			counterReport(){
				return this.totalReportes += 1
			},
			putData(id){
				axios.put(`${url}${id}`, this.users)
					.then(response => {
						console.log(response);
						this.data = response.data
						alert('Gracias por tus datos, ahora tu alma forma parte del diablo. ¡Enhorabuena!')
						
					})
					.catch(err => {
						this.error = err.message
					})
			}
		}
		
	}
</script>

<style scoped>
#Personal{
	border-style: solid;
	border-color: black;
  border-width: 2px 0;
}
#Contact{
	border-style: dashed double none;
	border-color: black;
  border-width: 2px 0;
}
/* #Animal{
	border: solid black 2px;
} */
.box{
	margin: 0 15px 0 15px 
}
.form{
	margin: 30px;
	border: solid black 2px;
}

</style>
