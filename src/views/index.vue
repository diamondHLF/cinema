<template>
	<div>
		<navigation />
		<indexHomePage />
	</div>
</template>
<script>
	import navigation from '@/components/base/navigation'
	import indexHomePage from '@/components/base/indexHomePage'

	export default {
		name: 'Index',
		components: {
			indexHomePage,
			navigation,
		},
	}
</script>
