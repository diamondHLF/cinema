<template>
	<div class="">
		<div v-for="(ticket, key) in ticketsTree" :key="key">
      <keep-alive>
        <component :is="rowComponent" :seats-items="ticket" @select-seats-and-row="selectSeatsAndRow"></component>
      </keep-alive>
		</div>
	</div>
</template>

<script>
	import { createNamespacedHelpers } from 'vuex'

	const { mapGetters,mapActions } = createNamespacedHelpers('tickets')

	export default {
		name: 'Tickets',
    beforeRouteLeave () {
      this.cleanState()
    },
    beforeDestroy() {
      this.cleanState()
    },
    beforeMount() {
      this.cleanState()
    },
		computed: {
			...mapGetters(['ticketsTree']),
      rowComponent(){
        return ()=>import('/src/components/bookTicket/row')
      }
		},
		methods: {
      ...mapActions(['cleanState']),
			selectSeatsAndRow({ row, seat }) {
				this.$emit('select-ticket', { row, seat })
			},
		},
	}
</script>
