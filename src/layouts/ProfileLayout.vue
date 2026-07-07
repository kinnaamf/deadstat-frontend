<template>
  <div class="gradient-layout"></div>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <ProfileHeader/>
      <div
        class="w-12 h-12 flex items-center justify-center bg-muted/50 border border-border rounded-full">
        <IconSearch/>
      </div>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">

import ProfileHeader from "@/components/ProfileHeader.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
</script>

<style scoped>

</style>
