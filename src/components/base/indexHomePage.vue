<template>
	<main class="w-full flex flex-row flex-wrap justify-center items-center">
		<div class="w-1/6 m-2 opacity-80 hover:opacity-100 " v-for="(movie, key) in movies" :key="key">
			<Movie :item="movie" />
		</div>
	</main>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'
	import Movie from '@/components/movie'

	const { mapGetters, mapActions } = createNamespacedHelpers('movies')

	export default {
		name: 'IndexHomePage',
		components: { Movie },
		beforeMount() {
			this.getMovies()
		},
		computed: {
			...mapGetters(['movies']),
		},
		methods: {
			...mapActions(['getMovies']),
		},
	}
</script>
