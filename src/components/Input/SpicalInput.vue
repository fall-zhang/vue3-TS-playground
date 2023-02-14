<template>
  <div>
    {{ title }}
    猜大小：{{ pCount }} 很 {{ exporse }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
const pCount = ref(22)
const exporse = ref('小')
if (pCount.value > 10) {
  exporse.value = '大'
}
defineExpose({
  exporse
})
</script>

<style scoped lang="scss">

</style>
