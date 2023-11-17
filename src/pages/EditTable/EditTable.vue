<template>
  <div class="table-action">
    <el-button size="small" @click="onAddItem">
      添加
    </el-button>
    <el-button size="small" @click="onRemoveItem">删除</el-button>
  </div>
  <el-table :data="tableData">
    <template v-for="(column, index) in tableColumn" :key="column.prop">
      <el-table-column v-if="column.useSlot == 'datetime'" v-bind="column">
        <template #default="scope">
          <span v-if="readonly">{{ scope.row[column.prop] }}</span>
          <el-date-picker v-else v-model="tableData[scope.$index][column.prop]" style="width: 190px;" type="datetime"
            value-format="yyyy-MM-dd" :clearable="false"></el-date-picker>
        </template>
      </el-table-column>
      <el-table-column v-else-if="column.useSlot == 'number'" v-bind="column">
        <template #default="scope">
          <span v-if="readonly">{{ scope.row[column.prop] }}</span>
          <el-input-number v-else v-model="tableData[scope.$index][column.prop]" style="width: 96px;"
            controls-position="right"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column v-else-if="column.useSlot == 'input'" v-bind="column">
        <template #default="scope">
          <span>{{ scope.row[column.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column v-else-if="column.useSlot == 'text'" v-bind="column">
        <template #default="scope">
          <el-tooltip effect="dark" placement="bottom" :disabled="scope.row[column.prop]?.length < 20">
            <template #content>
              <div style="width: 120px;">
                {{ scope.row[column.prop] }}
              </div>
            </template>
            <span>{{ scope.row[column.prop].slice(0, 20) }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column v-else-if="column.useSlot === 'limited-text'" v-bind="column">
        <template #default="scope">
          <el-tooltip effect="dark" placement="bottom" :disabled="scope.row[column.prop]?.length < 20">
            <template #content>
              <div style="width: 120px;">
                {{ scope.row[column.prop] }}
              </div>
            </template>
            <span v-if="scope.row[column.prop]?.length > 20">
              {{ scope.row[column.prop]?.slice(0, 20) }}...
            </span>
            <span v-else>
              {{ scope.row[column.prop] }}
            </span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column v-else v-bind="column" />
    </template>
  </el-table>
</template>
<script  lang="ts" setup>
const tableColumn = [
  { type: 'selection', prop: 'selection', width: 44, align: 'center' },
  { prop: 'name', label: '名称', width: 180, align: 'center', useSlot: 'text' },
  { prop: 'code', label: '编码', align: 'center', width: 120 },
  { prop: 'company', label: '公司', width: 120, align: 'center' },
  { prop: 'content', label: '内容', minWidth: 200, align: 'center', useSlot: 'limited-text' },
  { prop: 'startTime', label: '开始时间', width: 220, align: 'center', useSlot: 'datetime' },
  { prop: 'endTime', label: '结束时间', width: 160, align: 'center', useSlot: 'datetime' },
  { prop: 'totalInvest', label: '总投资', width: 120, align: 'center', useSlot: 'number' },
  { prop: 'futurePlan', label: '计划', width: 120, align: 'center', useSlot: 'number' },
  { prop: 'adjust', label: '调整', width: 140, align: 'center', useSlot: 'number' },
  { prop: 'reason', label: '调整原因', width: 180, align: 'center', useSlot: 'input' },
  { prop: 'note', label: '备注', width: 180, align: 'center', useSlot: 'input' }
]
const prop = defineProps({
  title: {
    require: true,
    type: String,
    default: ''
  },
  data: {
    require: true,
    type: Array,
    default: () => ([])
  },
  originData: {
    type: Map,
    default: () => (new Map())
  }
})
const readonly = ref(false)
const tableData = ref<any[]>([
  { name: '54' },
  { name: '64' },

])
const tableSelected = ref({
  line: 12
})

function onAddItem() {

}
function onRemoveItem() {

}
</script>

<style scoped lang="scss">
.layout-gap {
  background-color: white;
  height: auto;
  // padding: 4px 6px;
  margin: 12px 0;
}

:deep(.el-table) {
  color: #333333;

  tr:hover {
    >td.el-table__cell {
      &.modified-class {
        transition: .4s;
        background-color: rgb(243, 194, 104);

        &:hover {
          background-color: rgb(243, 194, 104);
        }
      }
    }
  }

  .modified-class {
    transition: .4s;
    background-color: rgb(243, 194, 104);

    &:hover {
      background-color: rgb(243, 194, 104);
      ;
    }
  }
}
</style>
