<template>
  <h1>
    您还没有配置 home 页面
  </h1>
  <h2>
    您可以先跳转到
    <router-link to="/components" class="t-pink normal">
      Components页面
    </router-link>
  </h2>
  <router-link to="/edit-table" class="t-pink normal">
    表格编辑
  </router-link>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
h1 {
  font-size: 2rem;
}

.normal {
  text-underline-offset: 1px;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  text-decoration-color: blue;
  // text-decoration-color: #000;
  transition: all .3s;

  &:hover {
    text-decoration-color: blue;
    text-underline-offset: 10px;
    color: blue;
  }
}
</style>
<script lang="ts">
export default {
  name: 'HomePage',
  inheritAttrs: false
}
</script>