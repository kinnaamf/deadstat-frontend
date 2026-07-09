<template>
<div>
  <div class="flex justify-center items-center gap-4">
    <button
      class="chart-btn"
      @click="active = 0"
    :class="active === 0 ? 'bg-primary !text-card' : ''">All ranks</button>
    <button
      class="chart-btn"
      @click="active = 1"
    :class="active === 1 ? 'bg-primary !text-card' : ''">Oracle+</button>
  </div>
  <div class="relative">
    <div class="chart-gradient"></div>
    <div class="chart-circle"></div>
    <RadarChart/>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RadarChart from "@/components/main-stats/RadarChart.vue";

const active = ref<number>(0)
</script>

<style scoped>

</style>
