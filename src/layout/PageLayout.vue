<template>
  <el-container>
    <el-header class="header">
      <slot name="header">
        <h1 class="title">
          {{ title }}
        </h1>
      </slot>
    </el-header>
    <el-container class="container">
      <el-aside v-if="!noSide" class="aside">
        <slot name="aside">
          <SideMenu></SideMenu>
        </slot>
      </el-aside>
      <el-main class="main">
        <slot>
          <router-view />
        </slot>
      </el-main>
    </el-container>
    <el-footer class="footer">
      <slot name="footer">
        <div class="copyright">
          <span>Fall Zhang All Right Reserve</span>
        </div>
      </slot>
    </el-footer>
  </el-container>
</template>
<script lang="ts" setup>
import SideMenu from '@/layout/SideMenu.vue'
defineProps<{
  title?: string,
  noSide?: boolean,
  nohead?: boolean,
}>()
</script>
<style lang="scss">
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 12px #bbb;

  .title {
    font-weight: 550;
    font-size: 32px;
    text-shadow: 1px 1px 12px #c2c2c26e;
  }
}

.container {
  height: calc(100vh - 60px - 30px);

  // background-color: aqua;
  .aside {
    background-color: #bbb;
  }

  // .main {
  //   background-color: rgb(235, 235, 235);
  // }
}

.footer {
  height: 24px;

  .copyright {
    line-height: 24px;
    font-size: 14px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
}
</style>
