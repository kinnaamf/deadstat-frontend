<template>
  <ProfileLayout>
    <div class="flex flex-col">
      <SectionTitle>Статистика героев</SectionTitle>
      <HeroStatFilters class="mt-2.5"/>
    </div>


    <StatsList class="mt-4"/>
  </ProfileLayout>
</template>

<script setup lang="ts">

import ProfileLayout from "@/layouts/ProfileLayout.vue";
import HeroStatFilters from "@/components/HeroStatFilters.vue";
import StatsList from "@/components/hero-stats/StatsList.vue";
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style scoped>

</style>
