<template>
	<div>
		<p @click.self.stop="showTimes=!showTimes" :class="[showTimes?'bg-amber-300':'','text-2xl']">{{ item.showdate }}</p>
		<div v-for="(session, key) in sessionTime" :key="key">
			<ul class="flex flex-col justify-center items-center" v-show="showTimes">
				<li
					:class="[activeIndex === key ? 'bg-amber-200' : '','py-2 hover:bg-amber-300']"
					@click.stop.self="
						selectSession(
							{
								id: id,
								showdate: item.showdate,
								daytime: session,
							},
							key
						)
					"
					>{{ session }}</li
				>
			</ul>
		</div>
	</div>
</template>

<script>
	import StandartMethods from '@/mixins/standartMethods'
	import { createNamespacedHelpers } from 'vuex'

	const { mapActions } = createNamespacedHelpers('tickets')

	export default {
		name: 'SessionItem',
		mixins: [StandartMethods],
		props: {
			id: {
				type: Number,
			},
			item: {
				type: Object,
				defaults: function () {
					return {
						showdate: '',
						daytime: '',
					}
				},
			},
		},
		data() {
			return {
				showTimes: false,
				activeIndex: '',
				sessionTime: [],
			}
		},
		beforeMount() {
			this.sessionTime = this.schedule(this.item.daytime)
		},
    computed:{
    },
		methods: {
			...mapActions(['checkFreeTickets']),
			selectSession({ id, showdate, daytime }, key) {
				this.activeIndex = key
				this.checkFreeTickets({ id, showdate, daytime })
				this.$emit('select-session', {
					id: Number(id),
					showdate: `${showdate}`,
					daytime: `${daytime}`,
				})
			},

    },
	}
</script>
