<template>
  <el-menu :default-openeds="['/linktop2']" router>
    <el-submenu v-for="route in currentRoutes" :key="route.path" :index="route.path">
      <template #title>
        {{ route?.meta?.menuName }}
      </template>
      <el-menu-item v-for="children in route.children" :key="children.path" :index="children.path">
        {{ children?.meta?.menuName }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts" setup>
import pageRoutes from '@/router/asyncRouter'

const currentRoutes = ref(pageRoutes)

</script>

<style scoped lang="sass">

</style>
