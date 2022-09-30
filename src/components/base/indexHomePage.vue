<template>
	<main class="w-full flex flex-row flex-wrap justify-center items-center">
		<div class="w-1/6 m-2 opacity-80 hover:opacity-100 " v-for="(movie, key) in movies" :key="key">
      <keep-alive>
        <component :is="movieComponent" :item="movie"></component>
      </keep-alive>
		</div>
	</main>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'

	const { mapGetters, mapActions } = createNamespacedHelpers('movies')

	export default {
		name: 'IndexHomePage',
		beforeMount() {
			this.getMovies()
		},
		computed: {
			...mapGetters(['movies']),
      movieComponent(){
        return ()=>import('/src/components/movie')
      }
		},
		methods: {
			...mapActions(['getMovies']),
		},
	}
</script>
