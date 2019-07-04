<template>
	<div id="body">
		<article id="new">
				<NewArticle/>
		</article>
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

<style scoped>

#body{
	margin: 30px
}
#new{
	margin: 100px
}
</style>
