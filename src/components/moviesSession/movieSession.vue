<template>
  <div>
    <Navigation/>
    <section class="flex flex-row my-6">
      <img class="w-1/5" :src="movieInfo.image"/>
      <div class="w-4/5">
        <h2 class="text-3xl my-2 p-5">{{ movieInfo.name }}</h2>
        <p class="text-xl my-2 text-left p-5">{{ findGenres(movieInfo.genre) }}</p>
        <p class="text-base my-4 text-justify p-5" v-text="stripTeg(movieInfo.additional)"></p>
        <p class="text-base my-4 text-justify p-5" v-text="stripTeg(movieInfo.description)"></p>
      </div>
    </section>
    <section class="flex flex-row justify-around items-center my-6 p-3">
      <div class="flex-initial flex-col w-1/12">
        <div class="py-3"
            v-for="(item, key) in moviesSession"
            :key="key"
        >
          <keep-alive>
            <session-item :id="movieInfo.id" :item="item" @select-session="selectSession"/>
          </keep-alive>
        </div>
      </div>
      <div class="flex-initial w-11/12">
        <keep-alive>
          <component :is="ticketComponent" @select-ticket="selectTicket"></component>
        </keep-alive>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from '@/components/base/navigation'
import {createNamespacedHelpers} from 'vuex'
import SessionItem from '@/components/moviesSession/sessionItem'
import StandartMethods from '@/mixins/standartMethods'

const {mapGetters} = createNamespacedHelpers('moviesSession')
const {mapActions} = createNamespacedHelpers('tickets')
export default {
  name: 'MovieSession',
  components: { SessionItem, Navigation},
  mixins: [StandartMethods],
  data() {
    return {
      ticket: {},
    }
  },
  computed: {
    ...mapGetters(['moviesSession', 'movieInfo']),
    ticketComponent(){
      return ()=>import('/src/components/bookTicket/tickets')
    }
  },
  methods: {
    ...mapActions(['buyTicket']),
    selectSession({id, showdate, daytime}) {
      Object.assign(this.ticket, {movie_id: id, showdate, daytime})
    },
    selectTicket({row, seat}) {
      this.buyTicket({...this.ticket, ...{row, seat}})
    },
  },
}
</script>
