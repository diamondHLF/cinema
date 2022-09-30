import { ROUTES, instance } from '../axiosProps'

const ticketsState = () => ({
	freeTicketList: [],
	preserveTicket: {},
	session: {},
	ticket: {},
})

const tickets = {
	namespaced: true,
	state: ticketsState(),
	getters: {
		ticketsTree: state => state.freeTicketList,
	},
	mutations: {
		ticketsTree: (state, payload) => {
			state.freeTicketList = payload
		},
		selectTicket: (state, paylaod) => {
			state.preserveTicket = paylaod
		},
	},
	actions: {
		cleanState:async ()=>await ticketsState(),
		checkFreeTickets: async (context, payload) => {
			ticketsState()
			await instance
				.get(ROUTES.get.freeTickets(payload))
				.then(response => {
					context.commit('ticketsTree', response.data.data)
				})
				.catch(err => console.error(err))
		},
		buyTicket: async (context, payload) => {
			await instance
				.post(ROUTES.post.buyTicket, JSON.stringify({ ...payload }))
				.then(responce => {
					console.log(responce.data.data)
					context.commit('selectTicket', responce)

					let req = {
						id: Number(responce.data.movie_id),
						showdate: responce.data.showdate,
						daytime: responce.data.daytime,
					}

					responce.error_code === 0
						? context.dispatch('checkFreeTickets', req)
						: ''
				})
				.catch(err => console.error(err))
		},
	},
}

export default tickets

/*
{
"movie_id": 61,
"row": 9,
"seat": 8,
"showdate": "2021-06-27",
"daytime": "10:50"
}


{
"movie_id": {id},
"row": {int},
"seat": {int},
"showdate": {string},
"daytime": {string}
}


Response:
{
"error_code": 0, "error_message": "no errors", "data": {
"movie_id": "61",
"row": "9",
"seat": "8",
"showdate": "2021-06-27",
"daytime": "10:50",
"ticketkey": "2a8cfbd5a4945f52e92c6b969f440192"
} }
*/
