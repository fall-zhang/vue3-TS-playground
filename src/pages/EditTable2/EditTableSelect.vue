<!-- 报废资产总体情况 -->
<template>
  <div style="width:100%;;overflow-y: auto;display: flex;">
    <table class="province-table" @mousedown="onMouseDown" @mouseup="onMouseUp">
      <!-- stick-head style="position: sticky;top: 0;" -->
      <thead>
        <tr class="select-column-group">
          <th style="height: 18px;width: 18px;background-color: transparent;"></th>
          <th v-for="column in tableColumn" :key="column.prop" class="select-column">
            <div class="icon-container">
              <div class="icon"> > </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-rows">
          <th class="select-row" @click="onSelectRow">></th>
          <th>资产</th>
          <td>资产</td>
          <td>资产</td>
          <td>资产</td>
          <td>省外代领</td>
        </tr>
        <tr class="table-rows">
          <th class="select-row" @click="onSelectRow">></th>
          <th>资产类型</th>
          <td>总体资产</td>
          <td>在运资产</td>
          <td>资产</td>
          <td>省外代领</td>
        </tr>
        <tr class="table-rows">
          <th class="select-row" @click="onSelectRow">></th>
          <th>资产类型</th>
          <td>总体资产</td>
          <td>在运资产</td>
          <td>资产</td>
          <td row-key="21">省外代领</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Events } from 'vue'

const tableColumn = [
  { label: '分类', prop: 'zclx' },
  { label: '资产', prop: 'sbyy' },
  { label: '资产净值占比', prop: 'zryy2' },
  { label: '成新率', prop: 'qtyy' },
  { label: '平均使用年限', prop: 'qtyy' },
]

const selection = ref({})
function onSelectRow() {

}

function onMouseDown(ev: Event) {
  console.log(ev.target)
}
function onMouseUp(ev: any) {
  console.log(ev.target)
  const sty = getComputedStyle(ev.target)
  console.log('🚀 ~ file: EditTableSelect.vue:68 ~ onMouseUp ~ sty:', sty)
  console.log(ev.target.getBoundingClientRect())

  console.log(ev.target?.getAttribute('row-key'))
  console.log(ev.target?.getAttribute('column-key'))
}

</script>

<style scoped lang="scss">
.province-table {
  flex: 1;
  border-collapse: collapse;
  font-size: 14px;
  border-spacing: 0;
  empty-cells: show;
  border-spacing: 0;
  // cursor: move;
  user-select: none;

  .select-column-group {
    height: 18px;
  }

  .select-column {
    height: 18px;
    cursor: pointer;
    transition: .6s;

    .icon-container {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;

      .icon {
        width: 16px;
        transform: rotate(90deg);
      }
    }

    &:hover {
      background-color: #ccc;
    }
  }

  .select-row {
    width: 18px;
    cursor: pointer;
    transition: .6s;

    &:hover {
      background-color: #ccc;
    }
  }

  th,
  td {
    font-size: inherit;
    // background-color: #e5e5e5;
    text-align: center;
    height: 32px;

    >.head-cell {
      font-weight: 400;
      padding: .5em 0em;
      margin: 0 3px;
    }
  }

  .table-rows {

    &:hover {
      background-color: #f5f7fa;
    }
  }

  td,
  thead {
    // 
    color: #090909cc;
    text-align: center;
  }
}
</style>
