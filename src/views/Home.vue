<template>
  <div class="home">
    <div class="container mt-6 px-2">
      <warning-message></warning-message>
      <danger-message></danger-message>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="columns box is-shadowless is-mobile is-multiline is-centered is-vcentered mt-3">
          <div class="column is-narrow">
            <div class="select">
              <select 
                v-model="currentFilter"
                id="toxicity-filter"
                name="toxicity-filter"
              >
                <option value="all">所有植物</option>
                <option value="non">无毒</option>
                <option value="cattox">对猫有毒</option>
                <option value="dogtox">对狗有毒</option>
                <option value="tox">有毒</option>
              </select>
            </div>
          </div>

          <div class="column is-narrow">
            <div class="control">
              <p class="control has-icons-left has-icons-right">
                <input 
                  v-model="searchQuery" 
                  class="input" 
                  type="text" 
                  id="plant-search"
                  name="plant-search"
                  placeholder="在当前分类中搜索植物..." 
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-search"></i>
                </span>
              </p>
            </div>
          </div>

          <div class="column is-narrow">
            <p class="title is-5">当前植物数量：<b><span class="has-text-success">{{ filteredPlantsCount }}</span></b></p>
          </div>
        </div>

        <div class="columns is-multiline px-6-desktop mt-6">
          <plant-card
            v-for="plant in filteredPlants"
            :key="plant.scientificName"
            :plant="plant"
          ></plant-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { Plant } from '@/types/plant'
import WarningMessage from '@/components/WarningMessage.vue'
import DangerMessage from '@/components/DangerMessage.vue'
import PlantCard from '@/components/PlantCard.vue'
import { plants } from '@/data/plants'

export default defineComponent({
  name: 'Home',
  components: {
    WarningMessage,
    DangerMessage,
    PlantCard
  },
  setup() {
    const currentFilter = ref('all')
    const searchQuery = ref('')
    const plantsData = ref<Plant[]>(plants)

    const filteredPlants = computed(() => {
      let result = plantsData.value
      
      if (currentFilter.value !== 'all') {
        switch (currentFilter.value) {
          case 'non':
            result = result.filter(plant => 
              plant.toxicityToCats === '无毒' && plant.toxicityToDogs === '无毒'
            )
            break
          case 'cattox':
            result = result.filter(plant => plant.toxicityToCats === '有毒')
            break
          case 'dogtox':
            result = result.filter(plant => plant.toxicityToDogs === '有毒')
            break
          case 'tox':
            result = result.filter(plant => 
              plant.toxicityToCats === '有毒' && plant.toxicityToDogs === '有毒'
            )
            break
        }
      }
      
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(plant => 
          plant.name.toLowerCase().includes(query) ||
          plant.scientificName.toLowerCase().includes(query)
        )
      }
      
      return result
    })

    const filteredPlantsCount = computed(() => filteredPlants.value.length)

    return {
      currentFilter,
      searchQuery,
      filteredPlants,
      filteredPlantsCount
    }
  }
})
</script> 