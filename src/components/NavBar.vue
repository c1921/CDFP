<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img class="logo" src="/CDFP.svg" alt="Logo">
        <p class="title is-3 pr-6 is-flex-shrink-0">CDFP</p>
      </a>

      <a 
        role="button" 
        class="navbar-burger" 
        :class="{ 'is-active': isActive }"
        aria-label="menu" 
        aria-expanded="false" 
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>主页</span>
        </router-link>

        <router-link to="/about" class="navbar-item">
          <span class="icon">
            <i class="fas fa-info-circle"></i>
          </span>
          <span>关于</span>
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">更多</a>
          <div class="navbar-dropdown">
            <a href="https://c1921.space/" class="navbar-item">
              <span class="icon">
                <i class="fas fa-globe-asia"></i>
              </span>
              <span>C1921</span>
            </a>
            <a href="https://github.com/c1921/CDFP/issues" class="navbar-item is-selected">
              <span class="icon">
                <i class="fas fa-bug"></i>
              </span>
              <span>报告问题</span>
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="https://github.com/c1921/CDFP" class="button">
              <i class="fab fa-github pr-2"></i>
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const isActive = ref(false)

    const toggleMenu = () => {
      isActive.value = !isActive.value
    }

    return {
      isActive,
      toggleMenu
    }
  }
})
</script> 