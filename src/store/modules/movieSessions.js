import { ROUTES, instance } from '../axiosProps'
import router from '@/router'

const moviesSessionsStore = () => ({
	sesslionList: [],
	movieInfo: {},
})

const moviesSession = {
	namespaced: true,
	state: moviesSessionsStore(),
	getters: {
		moviesSession: state => state.sesslionList,
		movieInfo: state => state.movieInfo,
	},
	mutations: {
		moviesSession: (state, payload) => {
			state.sesslionList = payload
		},
		movieInfo: (state, payload) => {
			state.movieInfo = payload
		},
	},
	actions: {
		cleanState: async () => await moviesSessionsStore(),
		getMoviesSession: async (context, payload) => {
			moviesSessionsStore()
			await instance
				.get(ROUTES.get.movieShedule(payload.id))
				.then(response => {
					context.commit(
						'moviesSession',
						response.data.data[payload.id]
					)
					router.push({
						name: 'movieSession',
						params: { id: payload.id },
					})
				})
				.catch(err => console.error(err))
		},
		getMovieInfo: async (context, payload) => {
			await context.commit('movieInfo', payload)
		},
	},
}

export default moviesSession
