<template>
<div class="flex flex-col gap-2">
  <StatsCard v-for="(stat, idx) in stats" :key="idx" :stat="stat"/>
</div>

</template>

<script setup lang="ts">

import StatsCard from "@/components/hero-stats/StatsCard.vue";
import type { Stats } from "@/types/stats.ts"


const stats: Stats[] = [
  {
    hero: 'Dynamo',
    matches: 124,
    kda: 2.5,
    dsr: 99,
    image: '/images/hero-demo.png'
  },
  {
    hero: 'Dynamo',
    matches: 124,
    kda: 2.5,
    dsr: 99,
    image: '/images/hero-demo.png'
  },
  {
    hero: 'Dynamo',
    matches: 124,
    kda: 2.5,
    dsr: 99,
    image: '/images/hero-demo.png'
  },
  {
    hero: 'Dynamo',
    matches: 124,
    kda: 2.5,
    dsr: 99,
    image: '/images/hero-demo.png'
  },
]
</script>

<style scoped>

</style>
