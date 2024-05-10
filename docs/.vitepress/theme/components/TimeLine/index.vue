<script setup lang="ts">
import { TimePoint } from './timeline'
// defineProps<{ points: TimePoint[] }>()

const points: TimePoint[] = [
  {
    timestamp: 1715326552,
    lastModify: 1715326552,
    content: 'test-1',
  },
  {
    timestamp: 1715326552,
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
        <div v-if="idx !== points.length - 1" class="w-1px h-64px border-l-1px border-l-solid mt-8px"></div>
      </div>
      <div class="lh-24px">{{ point.content }}</div>
    </div>
  </div>
</template>
