<template>
  <div class="stats-container">
    <swiper :slides-per-view="2" :initial-slide="1" :space-between="16" class="slider-full-bleed">
      <swiper-slide v-for="slide in rowOne" :key="slide.id" class="w-[85vw]">
        <StatCard :stat="slide" />
      </swiper-slide>
    </swiper>

    <div class="h-4"></div>

    <swiper :slides-per-view="2" :initial-slide="1" :space-between="16" class="slider-full-bleed">
      <swiper-slide v-for="slide in rowTwo" :key="slide.id" class="w-[85vw]">
        <StatCard :stat="slide" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import StatCard from "@/components/main-stats/StatCard.vue";


const rowOne = [
  { id: 1, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
  { id: 2, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
  { id: 3, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
  { id: 4, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
];

const rowTwo = [
  { id: 5, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
  { id: 6, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
  { id: 7, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
  { id: 8, title: 'Headshot Accuracy Percentage', personal: '56%', top: '6%' },
]
</script>

<style scoped>
/* Этот класс нужно повесить на оба ваших слайдера (или Swiper-обертки) */
.slider-full-bleed {
  /* Отрицательный margin растягивает контейнер до краев экрана */
  margin-left: -24px;
  margin-right: -24px;

  /* Паддинг возвращает контент внутрь, чтобы слайды не "прилипали" к краям */
  padding-left: 24px;
  padding-right: 24px;

  /* Разрешаем элементам выходить за границы */
  overflow: visible !important;
}
</style>
