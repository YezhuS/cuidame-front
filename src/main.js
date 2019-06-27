import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store/store'
import { routes } from "./routes.js"
import App from './App.vue'
import VueFirestore from 'vue-firestore'
import Firebase from './firebase'
import { auth } from './firebase'


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
			next('/login');
	}else{
			next();
	}
});

auth.onAuthStateChanged((user) => {
	if (user) {
		 store.commit("startUserSession",user)
	}else{
			store.commit("removeUserSession", null)
	}
});


new Vue({
el: '#app',
router,
store,
render: h => h(App)
});
