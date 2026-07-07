<template>
  <div class="personal-hero-stats-card">
    <div class="flex gap-1">
      <img :src="stat.image" alt="" class="w-12 h-12 rounded-full">
      <div>
        <h3 class="font-bold text-secondary text-xl">Dynamo</h3>
        <div class="flex items-center gap-1">
          <span class="font-sans font-light text-xs text-secondary">Матчи: {{ stat.matches }}</span>
          <span class="font-sans font-light text-xs text-secondary">KDA: {{ stat.kda }}</span>
        </div>
      </div>

      <div class="flex flex-col gap-px">
        <h3 class="font-bold text-secondary text-xs">DSR: <span class="text-primary text-base">{{ stat.dsr }}PP</span></h3>
        <div class="relative dsr-bar">
          <div class="dsr-bar-value"></div>
        </div>
      </div>
    </div>

    <div class="bg-black/30 w-12 h-12 flex items-center justify-center rounded-full">
      <IconPlus/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Stats } from "@/types/stats.ts"
import IconPlus from "@/components/icons/IconPlus.vue";
defineProps<{
  stat: Stats;
}>();
</script>

<style scoped>

</style>
