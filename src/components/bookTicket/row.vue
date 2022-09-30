<template>
	<div class="">
		<div class="flex flex-row w-full">
			<span class="flex-initial w-20">№ {{ seatsItems[0].row }}</span>
      <keep-alive>
        <Seats class="flex-initial w-11/12"
               :row-seats="seatsItems[1]"
               :row-id="seatsItems[0].row"
               @select-seats="selectSeatsAndRow"
        />
      </keep-alive>
		</div>
	</div>
</template>

<script>
	import Seats from '@/components/bookTicket/seats'

	export default {
		name: 'Row',
		components: { Seats },
		props: {
			seatsItems: {
				type: Array,
				defaults: function () {
					return [
						{
							row: 1,
						},
						[
							{
								seat: 1,
								is_free: true,
							},
							{
								seat: 2,
								is_free: true,
							},
							{
								seat: 3,
								is_free: true,
							},
						],
					]
				},
			},
		},
		methods: {
			selectSeatsAndRow({ row, seat }) {
				this.$emit('select-seats-and-row', { row, seat })
			},
		},
	}
</script>
