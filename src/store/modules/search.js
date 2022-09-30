import { ROUTES, instance } from '../axiosProps'

const searchState = () => ({
	searchList: [],
})

const search = {
	namespaced: true,
	state: searchState(),
	getters: {
		searchMovies: state => state.searchList,
	},
	mutations: {
		searchMovies: (state, payload) => {
			state.searchList = payload
		},
	},
	actions: {
		cleanState:async ()=>{
			await searchState()
		},
		letsSearchMovies: async (context, payload) => {
			searchState()
			await instance
				.get(ROUTES.get.search(payload))
				.then(response => {
					context.commit('searchMovies', response.data.data)
				})
				.catch(err => console.error(err))
		},
	},
}

export default search
