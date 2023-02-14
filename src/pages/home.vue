<template>
  <h1>
    您还没有配置 home 页面
  </h1>
  <h2>
    您可以先跳转到
    <router-link to="/components" class="t-pink">
      Components页面
    </router-link>
  </h2>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
h1 {
  font-size: 2rem;
}
</style>
<script lang="ts">
export default {
  name: 'HomePage',
  inheritAttrs: false
}
</script>