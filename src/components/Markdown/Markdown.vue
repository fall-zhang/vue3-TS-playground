<template>
  <textarea v-model="textValue" cols="30" rows="10"></textarea>
  <div v-html="mdxValue"></div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
const textValue = ref('# 这里是标题')
const mdxValue = computed(() => marked(textValue.value))
</script>

<style scoped lang="scss">

</style>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>
