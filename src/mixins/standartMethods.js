import genres from '@/mixins/genres'

export default {
	methods: {
		findGenres(num = 0) {
			return `${genres[num][0].toUpperCase()}${genres[num]
				.slice(1)
				.toLowerCase()}`
		},
		schedule(str) {
			return `${str}`.split(';')
		},
		stripTeg(str) {
			return `${str}`.replace(/(<([^>]+)>)/gi, '').trim()
		},
	},
}
