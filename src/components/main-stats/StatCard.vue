<template>
  <div class="stat-card bg-card border border-border">
    <h3 class="stat-title">{{ stat.title }}</h3>
    <div class="stat-body">
      <div class="stat-col">
        <span class="stat-value">{{ stat.personal }}</span>
        <span class="stat-label">Personal</span>
      </div>

      <div class="vertical-divider"></div>

      <div class="stat-col">
        <span class="stat-value">{{ stat.top }}</span>
        <span class="stat-label">TOP</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  stat: any
}>()
</script>

<style scoped lang="postcss">

</style>
