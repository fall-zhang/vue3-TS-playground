<template>
  <div>
    <textarea v-model="textValue" id="" cols="30" rows="10"></textarea>
    <div v-html="value"></div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
const textValue = ref('# 这里是标题')
const value = computed(() => marked(textValue.value))
</script>

<style scoped lang="scss">

</style>
