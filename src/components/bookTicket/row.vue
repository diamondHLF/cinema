<template>
	<div class="">
		<div class="flex flex-row w-full">
			<span class="flex-initial w-20">№ {{ seatsItems[0].row }}</span>
      <keep-alive>
        <component :is="seatsComponent" :row-seats="seatsItems[1]"
                   :row-id="seatsItems[0].row"
                   @select-seats="selectSeatsAndRow" class="flex-initial w-11/12"></component>
      </keep-alive>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Row',
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
    computed:{
      seatsComponent(){
        return ()=>import('/src/components/bookTicket/seats')
      }
    },
		methods: {
			selectSeatsAndRow({ row, seat }) {
				this.$emit('select-seats-and-row', { row, seat })
			},
		},
	}
</script>
