<script setup lang="ts">
import CollectionItem from './CollectionItem.vue'
import { ComponentOptions, computed } from 'vue'

const globPath = import.meta.glob('@C/**/*.vue')
// console.log(globPath)
// 除去所有带有 _ 的路径
const resolvePath = Object.keys(globPath).filter(path => !/\/_/.test(path))
const allComponents = resolvePath.map(item => globPath[item])

const buil = ref<Array<{ default: ComponentOptions & { __name: string } }>>([])
onMounted(async () => {
  const requestList = allComponents.map(item => item())
  buil.value = await Promise.all(requestList) as Array<{ default: ComponentOptions & { __name: string } }>
})
const gridRowCount = computed(() => {
  return Math.ceil(buil.value.length / 4)
})
</script>

<template>
  <div class="collection">
    <CollectionItem v-for="(part, index) in buil" :title="part.default.__name" :key="index"
      :arguments="part.default.props">
      <component :is="part.default"></component>
    </CollectionItem>
  </div>
</template>

<style lang="scss">
.collection {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 40vh;
  grid-template-rows: repeat(v-bind(gridRowCount), 400px);
}
</style>

<script lang="ts">
export default { name: 'CollectionIndex' }
</script>
