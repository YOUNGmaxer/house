<script setup lang="ts">
defineProps<{
  src: string;
}>()
</script>

<template>
  <img :src="src" width="120" class="border-5px border-white border-solid border-rd-5px"></img>
</template>
