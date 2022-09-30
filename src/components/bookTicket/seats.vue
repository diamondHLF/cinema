<template>
	<div class="">
		<ul class="flex flex-row">
			<li
				v-for="(item, key) in rowSeats"
				:key="key"
				:class="[item.is_free ? 'bg-green-400' : 'bg-red-400', 'w-8 h-8 flex flex-col justify-center items-center m-1']"
				@click.self.stop="selectSeats(item)"
				>{{ item.seat }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Seats',
		props: {
			rowId: {
				type: Number,
			},
			rowSeats: {
				type: Array,
				defaults: function () {
					return [
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
					]
				},
			},
		},
		methods: {
			selectSeats(item) {
				let select = this.rowSeats.find(i => i.seat === item.seat)
				select.is_free = false
				this.$emit('select-seats', {
					row: Number(this.rowId),
					seat: Number(item.seat),
				})
			},
		},
	}
</script>
