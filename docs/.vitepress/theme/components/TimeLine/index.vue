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
    lastModify: 1715326552,
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
        <div class="w-6px h-6px bg-blue border-rd-50%"></div>
        <div
          v-if="idx !== points.length - 1"
          class="w-1px h-64px border-l-1px mt-8px"
          :class="[dashed ? 'border-l-dashed' : 'border-l-solid']"
        ></div>
      </div>
      <div flex flex-col>
        <div class="lh-24px">{{ point.content }}</div>
        <div text-10px color-gray>{{ formatTimestamp(point.timestamp) }}</div>
      </div>
    </div>
  </div>
</template>
