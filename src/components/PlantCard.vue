<template>
  <div :class="cardClasses">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img 
            :src="plant.image" 
            :alt="plant.name" 
            @error="handleImageError"
            class="plant-image"
          >
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content py-1">
            <p class="title is-4">{{ plant.name }}</p>
            <p class="subtitle is-4 is-italic">{{ plant.scientificName }}</p>
          </div>
        </div>
      </div>

      <footer class="card-footer">
        <p class="card-footer-item">
          对猫：<span :class="toxicityClass(plant.toxicityToCats)">
            {{ plant.toxicityToCats }}
          </span>
        </p>
        <p class="card-footer-item">
          对狗：<span :class="toxicityClass(plant.toxicityToDogs)">
            {{ plant.toxicityToDogs }}
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { Plant } from '@/types/plant'

export default defineComponent({
  name: 'PlantCard',
  props: {
    plant: {
      type: Object as () => Plant,
      required: true
    }
  },
  setup(props) {
    const cardClasses = computed(() => {
      return {
        'column is-4-desktop is-6-tablet px-5-desktop': true,
        'item': true,
        'cat': props.plant.toxicityToCats === '有毒' && props.plant.toxicityToDogs === '无毒',
        'dog': props.plant.toxicityToCats === '无毒' && props.plant.toxicityToDogs === '有毒',
        'both': props.plant.toxicityToCats === '有毒' && props.plant.toxicityToDogs === '有毒',
        'non': props.plant.toxicityToCats === '无毒' && props.plant.toxicityToDogs === '无毒'
      }
    })

    const toxicityClass = (toxicity: string) => {
      return toxicity === '有毒' ? 'has-text-danger' : 'has-text-success'
    }

    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement
      target.src = '@/assets/img/green.svg'
    }

    return {
      cardClasses,
      toxicityClass,
      handleImageError
    }
  }
})
</script>

<style scoped>
.plant-image {
  object-fit: cover;  /* 保持宽高比并填充容器 */
  width: 100%;
  height: 100%;
}

.plant-image {
  transition: opacity 0.3s ease;
}
.plant-image[loading] {
  opacity: 0;
}
</style> 