<template>
  <div class="float-button" v-show="showButton">
    <button class="button" @click="scrollToTop">
      <span class="icon">
        <i class="fas fa-arrow-up"></i>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'BackToTop',
  setup() {
    const showButton = ref(false)

    const checkScroll = () => {
      showButton.value = window.scrollY > 500
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', checkScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll)
    })

    return {
      showButton,
      scrollToTop
    }
  }
})
</script>

<style scoped>
.float-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}
</style> 