<template>
  <div class="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <back-to-top></back-to-top>
    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue'
import BackToTop from './components/BackToTop.vue'
import AppFooter from './components/AppFooter.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    BackToTop,
    AppFooter
  }
})
</script>
