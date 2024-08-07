import {createRouter, createWebHistory} from 'vue-router';
import Home from "../layouts/Home.vue";
import HelloWorld from "../layouts/HelloWorld.vue";
import NotFound from "../layouts/NotFound.vue";

const routes = [
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
	{
		path: '/',
		component: Home
	},
	{
		path: '/hello',
		component: HelloWorld
	}

];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL,),
	routes,
});

export default router;