<template>
	<div class="">
		<div v-for="(ticket, key) in ticketsTree" :key="key">
      <keep-alive>
        <Row
            :seats-items="ticket"
            @select-seats-and-row="selectSeatsAndRow"
        />
      </keep-alive>
		</div>
	</div>
</template>

<script>
	import Row from '@/components/bookTicket/row'
	import { createNamespacedHelpers } from 'vuex'

	const { mapGetters,mapActions } = createNamespacedHelpers('tickets')

	export default {
		name: 'Tickets',
		components: { Row },
    beforeRouteLeave (to, from,next) {
      console.log('removed')
      this.cleanState()
      next()
    },
    beforeDestroy() {
      this.cleanState()
    },
    beforeMount() {
      this.cleanState()
    },
		computed: {
			...mapGetters(['ticketsTree']),
		},
		methods: {
      ...mapActions(['cleanState']),
			selectSeatsAndRow({ row, seat }) {
				this.$emit('select-ticket', { row, seat })
			},
		},
	}
</script>
