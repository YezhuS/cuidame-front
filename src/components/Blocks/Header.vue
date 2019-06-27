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

				<ul v-if="$store.getters.isAuthUser" class="navbar-nav right">
					<router-link 
					v-for="item in menuH_right_logged"
					:key="item.id"
					:to="item.url"
					tag="li"  
					class="nav-item">
						<a class="nav-link" href="#">{{item.title}}</a>	
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
	export default {
		
		props: [
			"title",
			"menuH_left",
			"menuH_right_logged",
			"menuH_right_nologged"]
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