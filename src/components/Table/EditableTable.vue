<!--
https://eugenkiss.gituge.io/7guis/tasks/#cells
-->

<script setup lang="ts">
import Cell from './_Cell.vue'
import { cells } from './store'

const cols = cells.map((_, i) => String.fromCharCode(65 + i))
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="(c, index) in cols" :key="index">
{{ c }}
</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in cells[0].length" :key="index">
        <th>{{ index - 1 }}</th>
        <td v-for="(c, j) in cols" :key="j">
          <Cell :r="index - 1" :c="j"></Cell>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
body {
  margin: 0;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th {
  background-color: #eee;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #ccc;
  height: 1.5em;
  overflow: hidden;
}
</style>