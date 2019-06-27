<template>
	<footer class="row">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<ul class="navbar-nav">
					<router-link 
					v-for="item in menuF"
					:key="item.id"
					:to="item.url" 
					tag="li" 
					class="nav-item">
						<a class="nav-link" href="#">
						{{item.title}}
						</a>
				</router-link>
					
			</ul>
		</nav>
		
	</footer>
</template>

<script>
	export default {
		props: [
			"menuF"]
	}
</script>

<style>
	a{
		margin-left: 10px;
	}
	.navbar-brand{
		font-size: 1.5;
	}
	
	.navbar{
		width: 100%
	}
</style>