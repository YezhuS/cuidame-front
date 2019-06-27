<template>
<div>
	<div class="box"

	>
	<form>
		<!-- Quiero que se pueda cambiar la foto principal que será vista en el perfil y los anuncios -->
		<div>
	
			<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
					<input type="file">

		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Usuario</label>
			<div class="col-sm-4">
				<input type="text" name="" id="" class="form-control" v-model="data.user">
			</div>
		</div>
			<div class="form-group row">
			<label for="" class="col-sm-3">Contraseña</label>
			<div class="col-sm-4">
				<input type="password" name="" id="" class="form-control"  v-model="data.password">
			</div>
		</div>
		<div id="Personal">
			<h3>Datos personales</h3>
			<div class="form-group row">
				<label for="" class="col-sm-3">Nombre</label>
				<div class="col-sm-4">
					<input type="text" name="" id="" class="form-control">
				</div>
			</div>
				<div class="form-group row">
				<label for="" class="col-sm-3">Ciudad/municipio actual</label>
				<div class="col-sm-4">
					<input type="text" name="" id="" class="form-control" >
				</div>
			</div>
				<div class="form-group row">
				<label for="" class="col-sm-3">Fecha de nacimiento</label>
				<div class="col-sm-4">
					<input type="date" name="" id="" class="form-control" >
				</div>
			</div>
			<div id="Contact">
					<h5>Detalles de contacto</h5>
				<div class="form-group row">
					<label for="" class="col-sm-3">Email</label>
					<div class="col-sm-4">
						<input type="email" name="" id="" class="form-control"  v-model="data.email">
					</div>
				</div>
				<div class="form-group row">
					<label for="" class="col-sm-3">Móvil</label>
					<div class="col-sm-4">
						<input type="text" name="" id="" class="form-control">
					</div>
				</div>
				<div class="form-group row">
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
			</div>
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">¿Qué soy? Tipo de Usuario</label>
			<div class="">
				<input type="checkbox" name="" id="" class="" >
			Particular  </div>
			<div class="">
				<input type="checkbox" name="" id="" class="" >
			Casa Acogida  </div>
			<div class="">
				<input type="checkbox" name="" id="" class="" >
			  Solo un/a atractivx espectador/a  </div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Dirección</label>
			<div class="col-sm-4">
				<input type="text" name="" id="" class="form-control" >
			</div>
		</div>
			<div id="Animal">
				<h3>Mis pequeños</h3>
				<!-- Activado solo si da en adopción -->
					<div class="form-group row">
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
					</div>
				<div>
					<img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
					<input type="file">
				</div>
		</div>

		<div class="form-group row">
			<button class="btn btn-dark" type="button" @click.prevent="toCreateArticle">New Article</button>
		</div>
		<div class="form-group row">
			<button class="btn btn-danger" type="button" @click="counterReport()">Reportar</button>
			<p>{{ totalReportes }}</p>
		</div>
		<p>Aquí vendría algo como POPULARIDAD que viene a ser los votos recibidos</p>
	</form>
	</div>
</div>
</template>

<script>
import axios from 'axios'

let url = 'http://localhost:5000/api/users/'
let axiosGet = axios.get(url)

	export default {
		data(){
			return {
				totalReportes: 0,
				posts:[],
				data:{
					user: "",
					email: "",
					password: ""
				}
			}
		},
		async created(){
			await axios.get(url)
				.then(response => {
					console.log(response)
					this.data.user = JSON.stringify(response.data[0].user)
					this.data.password = JSON.stringify(response.data[0].password)
					this.data.email = JSON.stringify(response.data[0].email)
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
			}
		}
		
	}
</script>

<style>
#Personal{
	border: solid black 2px;
}
#Contact{
	border: solid black 2px;
	border-style: dashed double none;
}
#Animal{
	border: solid black 2px;
}

</style>
