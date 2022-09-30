import axios from 'axios'
import genres from '@/mixins/genres'

const SERVER_URL = `https://cinema-api-test.y-media.io/v1`

const isUndefined = str => str === undefined
const findeCode = str => {
	for (let key in genres) {
		if (genres[key] === str.toUpperCase()) return key
	}
}

export const ROUTES = {
	get: {
		movies: `/movies`,
		search: ({ id, name, genres }) => {
			switch (true) {
				case !isUndefined(id):
					return `/movies?movie_id=${id}`
				case !isUndefined(name):
					return `/movies?name=${name}`
				case !isUndefined(genres):
					return `/movies?genres=${findeCode(genres)}`
				case !isUndefined(id) && !isUndefined(name):
					return `/movies?movie_id=${id}&name=${name}`
				case !isUndefined(name) && !isUndefined(genres):
					return `/movies?name=${name}&genres=${findeCode(genres)}`
				case !isUndefined(id) && !isUndefined(genres):
					return `/movies?movie_id=${id}&genres=${findeCode(genres)}`
				case !isUndefined(id) &&
					!isUndefined(name) &&
					!isUndefined(genres):
					return `/movies?
					movie_id=${id}
					&name=${name}
					&genres=${findeCode(genres)}`
				default:
					return `/movies`
			}
		},
		movieShedule: id => `/movieShows?movie_id=${Number(id)}`,
		freeTickets: ({ id, daytime, showdate }) =>
			`/showPlaces
			?movie_id=${Number(id)}
			&daytime=${daytime}
			&showdate=${showdate}`,
	},
	post: {
		buyTicket: `/bookPlace`,
	},
}

export const instance = axios.create({
	baseURL: SERVER_URL,
	timeout: 5000,
	headers: { 'content-type': 'application/json; charset=utf-8' },
})
