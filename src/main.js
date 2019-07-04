import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from "./routes.js"
import { store } from "./store/store"
import App from './App.vue'



Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	const currentUser = store.getters.isAuth;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const isLogin = to.matched.some(record => record.name === "login");



if(currentUser && isLogin) {
	next("/perfil")
}

	if(requiresAuth && !currentUser){
			next('login');
	// } else if(!requiresAuth && currentUser){
	// 		next('timeline')
	}else{
			next();
	}
});


new Vue({
el: '#app',
router,
render: h => h(App)
});
