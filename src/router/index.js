import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index'
import search from '@/components/search'
import movieSession from '@/components/moviesSession/movieSession'

import error from '@/views/error'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/movies',
		component: index,
	},
	{
		path: '/movies',
		name: 'index',
		component: index,
	},
	{
		path: '/search',
		name: 'search',
		component: search,
	},
	{
		path: '/movieShows?movie_id=:id',
		name: 'movieSession',
		component: movieSession,
	},
	{
		path: '*',
		component: error,
	},
]

const router = new VueRouter({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes,
})

export default router
