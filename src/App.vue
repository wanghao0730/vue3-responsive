<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import NavBar from '/@/components/NavBar/NavBar.vue'
import Footer from '/@/components/Footer/Footer.vue'
import { getHomeList } from './api/home'
import { RouterView } from 'vue-router'

//创建router
const router = useRouter()
const route = useRoute()
onMounted(() => {
  getHomeList().then(res => {
    console.log({ res })
  })
  console.log('加载来')
})
const handleChange = navRoute => {
  // console.log({ route, navRoute, router })
  // console.log(router.currentRoute.value.fullPath)
  const currentPath = router.currentRoute.value.fullPath
  console.log(currentPath.replace('/', ''))
  // if (currentPath.replace('/', '') === navRoute.name) {
  //   return
  // }
  console.log(currentPath)
}
</script>

<template>
  <NavBar @routeChange="handleChange" />
  <RouterView />
  <Footer />
</template>

<style scoped lang="scss"></style>
