<template>
	<div>
		<navigation />
		<error404 />
	</div>
</template>

<script>
	import navigation from '@/components/base/navigation'
	import error404 from '@/components/base/error404'
	export default {
		name: 'Error',
		components: {
			navigation,
			error404,
		},
	}
</script>
