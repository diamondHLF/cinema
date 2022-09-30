<template>
  <div>
    <keep-alive>
      <component :is="navigationComponent"></component>
    </keep-alive>
    <keep-alive>
      <component :is="indexHomePageComponent"></component>
    </keep-alive>
  </div>
</template>
<script>


export default {
  name: 'Index',
  computed: {
    navigationComponent() {
      return () => import('/src/components/base/navigation')
    },
    indexHomePageComponent() {
      return () => import('/src/components/base/indexHomePage')


    }
  }
}
</script>
