<template>
  <div class="gradient-layout"></div>
  <div class="profile-layout">
    <div class="flex items-center justify-between">
      <ProfileHeader/>
      <div class="w-12 h-12 flex items-center justify-center bg-muted/50 border border-border rounded-full">
        <IconSearch/>
      </div>
    </div>
    <div class="mt-6">
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

import ProfileHeader from "@/components/ProfileHeader.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
</script>
