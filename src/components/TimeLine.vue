<template>
	<div>
		<h2>	Aquí tendremos la main con las noticias </h2>
		
				<NewArticle/>
		</div>
</template>

<script>
import NewArticle from "./NewArticle"

export default {
	components: {
		NewArticle
	},
	// computed: {
	// 	selectedNews(){
	// 		return this.$store.state.news
	// 	}
	// }
}
</script>

<style>
#newArticle{
	margin: 20px
}
</style>
