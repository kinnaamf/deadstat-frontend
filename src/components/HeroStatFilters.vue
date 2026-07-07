<template>
  <div class="filters__container">
    <div class="filters-title__container">
      <h3 class="filters__title">Фильтры:</h3>
    </div>
    <div class="filters__list">
      <button v-for="(filter, idx) in filters"
        :key="idx"
              class="filters__list-item"
              :class="idx === activeFilter ? 'filters__list-item-active' : ''"
              @click="activeFilter = idx"
      >
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeFilter = ref<number>(0);

const filters = [
  {
    name: 'DSR',
  },
  {
    name: 'MATCHES',
  },
  {
    name: 'KDA',
  }
]
</script>TECH

<style scoped>

</style>
