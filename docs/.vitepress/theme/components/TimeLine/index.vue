<script setup lang="ts">
import { TimePoint, formatTimestamp } from './timeline'
import Photo from '../Photo/index.vue'

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
    photos: [
      'https://github.com/YOUNGmaxer/record-photo/blob/main/record/photo/Chatglm%20Image%200.png?raw=true',
      'https://raw.githubusercontent.com/YOUNGmaxer/record-photo/main/record/photo/Chatglm%20webp.webp',
    ],
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
      <!-- 时间线 -->
      <div class="flex flex-col flex-self-stretch items-center mr-8px relative top-9px">
        <div class="w-6px h-6px bg-blue border-rd-50%"></div>
        <div
          v-if="idx !== points.length - 1"
          class="w-1px border-l-1px mt-8px border-l-bluegray flex-1"
          :class="[dashed ? 'border-l-dashed' : 'border-l-solid']"
        ></div>
      </div>
      <!-- 内容 -->
      <div flex flex-col flex-1>
        <div class="lh-24px">{{ point.content }}</div>
        <div v-if="point.photos" flex my-8px>
          <Photo v-for="photo in point.photos" :src="photo" width="120" not-first:ml-8px />
        </div>
        <div flex text-10px color-gray>
          <div>{{ formatTimestamp(point.timestamp) }}</div>
          <div v-if="point.lastModify > point.timestamp" ml-8px>(最近更新 {{ formatTimestamp(point.lastModify) }})</div>
        </div>
      </div>
    </div>
  </div>
</template>
