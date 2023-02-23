<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import { getHomeList } from './api/home'
onMounted(() => {
  getHomeList().then(res => {
    console.log({ res })
  })
  console.log('加载来')
})
</script>

<template>
  <nav-bar />
  <router-view />
</template>

<style scoped lang="scss"></style>
