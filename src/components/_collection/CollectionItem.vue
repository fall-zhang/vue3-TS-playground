<template>
  <el-card class="collection-item">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <el-button link @click="emit('onDetail')">
          详情
        </el-button>
      </div>
    </template>
    <div class="card-body">
      <div class="card-content">
        <slot></slot>
      </div>
      <ul class="card-foot">
        <li class="foot-mertial" v-for="(key, value) in arguments" :key="key">
          {{ value }}：<span v-if="key" class="red">必填</span>
          <span v-else class="gray">选填</span>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script setup lang="ts">
defineProps<{
  title?: string,
  arguments?: Record<string, any>
}>()
const emit = defineEmits<{
  (event: 'onDetail'): void
}>()
</script>

<style scoped lang="scss">
:deep(.el-card__body) {
  height: 40%;
  box-sizing: border-box;
  display: flex;
  // align-content: space-between;
  justify-content: space-between;
  flex-flow: column nowrap;
}

.card-header {
  display: flex;
  justify-content: space-between;

  span {
    font-size: 24px;
  }
}

.card-content {
  overflow: auto;
  height: 220px;
}

.card-foot {
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  margin-bottom: 0;

  .foot-mertial {
    margin: 4px 8px;
  }

  .red {
    color: rgb(168, 5, 5);
  }

  .gray {
    color: rgb(156, 156, 156);
  }
}

.el-card {
  margin: 8px;
}
</style>
