<template>
	<div class="">
		<div v-for="(ticket, key) in ticketsTree" :key="key">
			<Row
				:seats-items="ticket"
				@select-seats-and-row="selectSeatsAndRow"
			/>
		</div>
	</div>
</template>

<script>
	import Row from '@/components/bookTicket/row'
	import { createNamespacedHelpers } from 'vuex'

	const { mapGetters, mapMutations } = createNamespacedHelpers('tickets')

	export default {
		name: 'Tickets',
		components: { Row },
		beforeMount() {
			this.cls([])
		},
		computed: {
			...mapGetters(['ticketsTree']),
		},
		methods: {
			...mapMutations({ cls: 'ticketsTree' }),
			selectSeatsAndRow({ row, seat }) {
				this.$emit('select-ticket', { row, seat })
			},
		},
	}
</script>
