<script setup lang="ts">
import { ref } from 'vue'
import { cells, evalCell } from './store'

const props = defineProps({
  c: {
    type: Number,
    require: true,
    default: 2
  },
  r: {
    type: Number,
    require: true,
    default: 2
  }
})

const editing = ref(false)

function update(e: any) {
  editing.value = false
  cells[props.c][props.r] = e.target.value.trim()
}
function onFocus(el: any) {
  el.focus()
}
</script>

<template>
  <div class="cell" :title="cells[c][r]" @click="editing = true">
    <input v-if="editing" :value="cells[c][r]" @change="update" @blur="update" @vnode-mounted="onFocus">
    <span v-else>{{ evalCell(cells[c][r]) }}</span>
  </div>
</template>

<style>
.cell,
.cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
}
</style>