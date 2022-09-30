<template>
  <header class="h-24 bg-amber-100 flex flex-col justify-center">
    <nav class="flex-row flex justify-start gap-x-2">
      <router-link to="/movies" class="text-base font-medium text-gray-500 hover:text-gray-900 text-2xl"> Home </router-link>
      <router-link to="/search"  class="text-base font-medium text-gray-500 hover:text-gray-900 text-2xl"> Search </router-link>
    </nav>
  </header>
</template>

<script>
	export default {
		name: 'Navigation',
	}
</script>
