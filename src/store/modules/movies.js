import { ROUTES, instance } from '../axiosProps'

const moviesState = () => ({
	moviesList: [],
})

const movies = {
	namespaced: true,
	state: moviesState(),
	getters: {
		movies: state => state.moviesList,
	},
	mutations: {
		movies: (state, payload) => {
			state.moviesList = payload
		},
	},
	actions: {
		getMovies: async context => {
			await instance
				.get(ROUTES.get.movies)
				.then(response => {
					context.commit('movies', response.data.data)
				})
				.catch(err => console.error(err))
		},
	},
}

export default movies
