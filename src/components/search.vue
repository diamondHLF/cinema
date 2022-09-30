<template>
  <div>
    <Navigation/>
    <form class="mt-3 mb-3 flex rounded-md shadow-sm w-10/12 mx-auto h-12">
      <input
          class="block w-full rounded-none rounded-l-md  border border-gray-300 bg-gray-50 pl-10 focus:border-amber-500 focus:outline-none focus:ring-1  focus:ring-amber-500 sm:text-sm"
          v-model="str"
          type="text"
          placeholder="id:64 name:Fast & Loud genres:western"
      />

      <button type="button" class="bg-amber-50 relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50
			px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              @click="findMovie">Search
      </button>
    </form>

    <main class="w-full flex flex-row flex-wrap justify-center items-center">
      <div class="w-1/6 m-2 opacity-80 hover:opacity-100 " v-for="(movie, key) in searchMovies" :key="key">
        <keep-alive >
          <Movie :item="movie"/>
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script>
import Movie from '@/components/movie'
import Navigation from '@/components/base/navigation'

import {createNamespacedHelpers} from 'vuex'

const {mapGetters, mapActions} = createNamespacedHelpers('search')
export default {
  name: 'Search',
  components: {Navigation, Movie},
  data() {
    return {
      str: ''
    }
  },
  beforeMount() {
    this.cleanState()
  },
  computed: {
    ...mapGetters(['searchMovies']),
  },
  methods: {
    ...mapActions(['letsSearchMovies', 'cleanState']),
    findMovie() {
      let param = `${this.str.replace(/(\w+)[+.;\s](\w+)[+.;\s](\w+)/, "id:$1 name:$2 genres:$3")}`.split(' ')

      const ghost = i => {
        let t = Number(`${i}`)
        return isNaN(t)
            ? `${i}`.trim().toLowerCase()
            : Number(`${i}`)
      }

      let searchObj = param.reduce((a, v) => ({
            ...a,
            [v.split(':')[0]]: ghost(v.split(':')[1]),
          }), {})
      this.letsSearchMovies(searchObj)
      this.str=''
    },
  },
}
</script>
