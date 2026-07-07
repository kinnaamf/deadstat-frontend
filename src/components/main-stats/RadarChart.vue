<template>
  <div class="radar-chart">
    <Radar :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script setup lang="ts">
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'

const alternatingBandsPlugin = {
  id: 'alternatingBands',
  beforeDraw(chart: any) {
    const { ctx, scales: { r } } = chart
    const ticks = r.ticks
    const centerX = r.xCenter
    const centerY = r.yCenter
    const angleCount = chartData.labels.length
    const step = (2 * Math.PI) / angleCount
    const startAngle = -Math.PI / 2

    for (let i = ticks.length - 1; i >= 0; i--) {
      const outerRadius = r.getDistanceFromCenterForValue(ticks[i].value)
      const innerRadius = i > 0 ? r.getDistanceFromCenterForValue(ticks[i - 1].value) : 0

      ctx.beginPath()
      for (let j = 0; j < angleCount; j++) {
        const angle = startAngle + j * step
        const x = centerX + outerRadius * Math.cos(angle)
        const y = centerY + outerRadius * Math.sin(angle)
        j === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.closePath()


      for (let j = angleCount - 1; j >= 0; j--) {
        const angle = startAngle + j * step
        const x = centerX + innerRadius * Math.cos(angle)
        const y = centerY + innerRadius * Math.sin(angle)
        j === angleCount - 1 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.closePath()

      ctx.fillStyle = i % 2 !== 0
        ? 'rgba(46, 204, 154, 1)'
        : 'transparent'
      ctx.fill('evenodd')
    }
  }
}

ChartJS.register(alternatingBandsPlugin)

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip)

const chartData = {
  labels: ['EARLY IMPACT', 'FARM', 'DAMAGE', 'SUPPORT', 'TANK', 'PUSHER'],
  datasets: [
    {
      data: [40, 50, 70, 30, 60, 20],
      backgroundColor: 'rgba(180, 140, 60, 0.5)',
      borderColor: 'rgba(212, 168, 67, 0.8)',
      borderWidth: 2,
      pointBackgroundColor: '#8979FF',
      pointBorderColor: '#ffffff',
      pointRadius: 4
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      ticks: {
        display: false,
        count: 6
      },
      grid: {
        color: 'rgba(0, 0, 26, 0.15)',
        lineWidth: 2,
      },
      angleLines: {
        color: 'rgba(0, 0, 26, 0.15)',
        lineWidth: 2,
      },
      pointLabels: {
        color: '#EAD8C1',
        font: {
          family: 'Roboto Serif',
          size: 14,
          weight: 500,
        },
      },
    }
  }
}
</script>

<style scoped>

</style>
