<template>
  <div>
    <var-button block @click="toggleTheme">切换主题</var-button>
  </div>
</template>

<script setup>
import { useSSRContext } from "vue"
import { StyleProvider, Themes } from '@varlet/ui'

let currentTheme = null

function toggleTheme() {
  currentTheme = currentTheme ? null : Themes.dark
  StyleProvider(currentTheme)
}

const context = useSSRContext()
console.log(context)
// export default class homeIndex extends Vue{}
</script>

<style>
body {
  transition: background-color .25s, color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
</style>