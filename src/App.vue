<script setup lang="ts">
// import ToDoList from '@C/ToDoList.vue'
// import CollectionItem from '@/components/_collection/CollectionItem.vue'
import { PageLayout } from './layout'
import { useRoute } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const language = ref(zhCn)
const route = useRoute()
const title = ref('模板系统')
// console.log(route.meta.pageTitle === 'string')
watch(route, (newVal) => {
  if (route.meta.pageTitle && typeof newVal.meta.pageTitle === 'string') {
    title.value = newVal.meta.pageTitle
  }
}, {
  immediate: true
})

</script>

<template>
  <el-config-provider :locale="language">
    <PageLayout :title="title" no-side>
      <router-view></router-view>
    </PageLayout>
  </el-config-provider>
</template>

<style lang="scss"></style>
