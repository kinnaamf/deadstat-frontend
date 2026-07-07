<template>
  <ProfileLayout>
    <div class="space-y-6">
      <SectionTitle>Общая статистика</SectionTitle>
      <StatsInfo/>

      <div class="relative">
        <div class="chart-gradient"></div>
        <div class="chart-circle"></div>
        <StatsChart/>
      </div>

      <div class="space-y-6">
        <Transition name="slide-up"
                    @enter="onEnter"
                    @leave="onLeave"
        >
          <div v-if="statsVisible"
               class="grid grid-cols-2 grid-rows-2 gap-5"

          >
            <div v-for="data in playerMetrics" class="p-2 bg-card border border-border rounded-xl">
              <h4 class="text-primary font-normal leading-normal">{{ data.title }}</h4>
              <div v-for="metric in data.metrics" class="flex items-center justify-between">
                <span class="leading-normal text-[12px] text-secondary">{{ metric.name }}</span>
                <span class="leading-normal text-[12px] text-secondary">{{ metric.value }}</span>
              </div>
            </div>
          </div>
        </Transition>
        <div class="flex items-center">
          <div class="w-full h-px bg-primary"></div>
          <button class="text-card bg-primary rounded-2xl px-4 py-1 font-medium"
                  @click="statsVisible = !statsVisible; console.log(statsVisible);"
          >
            {{  !statsVisible ? 'Скрыть' : 'Ещё'}}
          </button>
          <div class="w-full h-px bg-primary"></div>
        </div>
      </div>
    </div>

    <StatsSlider class="mt-6"/>
  </ProfileLayout>
</template>

<script setup lang="ts">

import ProfileLayout from "@/layouts/ProfileLayout.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import StatsInfo from "@/components/main-stats/StatsInfo.vue";
import StatsChart from "@/components/main-stats/StatsChart.vue";
import StatsSlider from "@/components/main-stats/StatsSlider.vue";
import { ref } from "vue";

interface MetricsData {
  name: string;
  value: string;
}

interface Metrics {
  title: string;
  metrics: MetricsData[];
}

const statsVisible = ref<boolean>(false);

const playerMetrics: Metrics[] = [
  {
    title: 'Matches',
    metrics: [
      {
        name: 'Total Matches',
        value: '141'
      },
      {
        name: 'Average MVP Rank',
        value: '6.71'
      },
      {
        name: 'Most Common',
        value: 'MVP8'
      },
      {
        name: 'AVG Match',
        value: '34.32'
      }
    ]
  },
  {
    title: 'Combat',
    metrics: [
      {
        name: 'Kill Participation',
        value: '49.00%'
      },
      {
        name: 'DMG Per Life',
        value: '3.9K'
      },
      {
        name: 'DMG Per Minute',
        value: '763'
      },
      {
        name: 'DMG Taken/Min',
        value: '937'
      }
    ]
  },
  {
    title: 'Economy',
    metrics: [
      {
        name: 'Souls Per Minute',
        value: '982'
      },
      {
        name: 'Avg Net Worth',
        value: '33.2K'
      },
      {
        name: 'Avg Last Hits',
        value: '135.23'
      },
      {
        name: 'Avg Denies',
        value: '2.81'
      }
    ]
  },
  {
    title: 'Misc',
    metrics: [
      {
        name: 'Accuracy',
        value: '53.00%'
      },
      {
        name: 'HS Accuracy',
        value: '23.00%'
      },
      {
        name: 'Avg Tower Dmg',
        value: '4.9K'
      },
      {
        name: 'Tower DMG/Min',
        value: '124'
      }
    ]
  }
]
const onEnter = (el, done) => {
  el.style.height = '0'
  el.style.overflow = 'hidden'
  el.style.opacity = '0'

  el.style.height = 'auto'
  const height = el.scrollHeight
  el.style.height = '0'

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease'
      el.style.height = height + 'px'
      el.style.opacity = '1'
    })
  })

  el.addEventListener('transitionend', () => {
    el.style.height = 'auto'
    el.style.overflow = 'visible'
    done()
  }, { once: true })
}

const onLeave = (el, done) => {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.transition = 'height 0.3s ease, opacity 0.3s ease'
      el.style.height = '0'
      el.style.opacity = '0'
    })
  })

  el.addEventListener('transitionend', done, { once: true })
}
</script>

<style scoped>.slide-up-enter-active,
.slide-up-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.slide-up-enter-from,
.slide-up-leave-to {
  height: 0;
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
  height: auto;
  opacity: 1;
}</style>
