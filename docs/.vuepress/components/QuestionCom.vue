<template>
  <div>
    <h6>{{ title }}</h6>
    <hr />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '标题'
  }
)
</script>

<style scoped>
hr {
  border-style: dashed;
}
</style>
