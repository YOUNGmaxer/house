<script setup lang="ts">
import { TimePoint, formatTimestamp } from './timeline'

// defineProps<{ points: TimePoint[] }>()
defineProps<{
  /** 使用虚线 */
  dashed?: boolean
}>()

const points: TimePoint[] = [
  {
    timestamp: 1715326552,
    lastModify: 1715326952,
    content: 'test-1',
  },
  {
    timestamp: 1715386552,
    lastModify: 1715326552,
    content: 'test-2',
  },
]
</script>

<template>
  <div>
    <div v-for="(point, idx) in points" class="mb-8px flex flex-row items-start">
      <div class="flex flex-col items-center mr-8px relative top-9px">
        <div class="w-6px h-6px bg-blue border-rd-50%" color-></div>
        <div
          v-if="idx !== points.length - 1"
          class="w-1px h-64px border-l-1px mt-8px border-l-bluegray"
          :class="[dashed ? 'border-l-dashed' : 'border-l-solid']"
        ></div>
      </div>
      <div flex flex-col>
        <div class="lh-24px">{{ point.content }}</div>
        <div flex text-10px color-gray>
          <div>{{ formatTimestamp(point.timestamp) }}</div>
          <div v-if="point.lastModify > point.timestamp" ml-8px>(最近更新 {{ formatTimestamp(point.lastModify) }})</div>
        </div>
      </div>
    </div>
  </div>
</template>
