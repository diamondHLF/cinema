import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/movies',
		component: ()=>import('../views/index'),
	},
	{
		path: '/movies',
		name: 'index',
		component: ()=>import('../views/index'),
	},
	{
		path: '/search',
		name: 'search',
		component: ()=>import('../components/search'),
	},
	{
		path: '/movieShows?movie_id=:id',
		name: 'movieSession',
		component:()=>import('../components/moviesSession/movieSession'),
	},
	{
		path: '*',
		component: ()=>import('../views/error'),
	},
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes,
})

export default router
