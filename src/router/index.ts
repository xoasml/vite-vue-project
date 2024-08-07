import {createRouter, createWebHistory} from 'vue-router';
import What from "../pages/Home.vue";
import HelloWorld from "../pages/HelloWorld.vue";

const routes = [
	{
		path: '/',
		component: What
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