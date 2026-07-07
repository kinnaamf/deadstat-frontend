<template>
  <ProfileLayout>
    <div class="space-y-6">
      <SectionTitle>Общая статистика</SectionTitle>
      <StatsInfo/>

      <StatsChart/>

      <div class="flex items-center">
        <div class="w-full h-px bg-primary"></div>
        <button class="text-card bg-primary rounded-2xl px-4 py-1 font-medium">Ещё</button>
        <div class="w-full h-px bg-primary"></div>
      </div>
    </div>
  </ProfileLayout>
</template>

<script setup lang="ts">

import ProfileLayout from "@/layouts/ProfileLayout.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import StatsInfo from "@/components/main-stats/StatsInfo.vue";
import StatsChart from "@/components/main-stats/StatsChart.vue";
</script>

<style scoped>

</style>
