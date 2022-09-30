import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import movies from './modules/movies'
import moviesSession from './modules/movieSessions'
import search from './modules/search'
import tickets from '@/store/modules/tickets'

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		movies,
		moviesSession,
		search,
		tickets,
	},
})
