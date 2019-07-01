import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from "./routes.js"
import { store } from "./store/store"
import App from './App.vue'
import VueFirestore from 'vue-firestore'



Vue.use(VueFirestore);
Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
})

router.beforeEach((to, from, next) => {
	const currentUser = store.getters.isAuthUser;
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if(requiresAuth && !currentUser){
			next('login');
	} else if(!requiresAuth && currentUser){
			next('timeline')
	}else{
			next();
	}
});


new Vue({
el: '#app',
router,
render: h => h(App)
});
