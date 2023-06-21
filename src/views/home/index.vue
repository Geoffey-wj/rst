<template>
  <div>
    <var-button block @click="toggleTheme">切换主题</var-button>
    <div class="btn">123</div>
  </div>
</template>


<script setup>
import {gsap} from "gsap"
import {getData} from "@/api/test.js"
import { useSSRContext } from "vue"
import { StyleProvider, Themes } from '@varlet/ui'


let currentTheme = null
getData().then(res => {
    console.log(res)
})
let s = 0
function toggleTheme() {
    console.log()
    s = s ? 0 : 300
    gsap.to(".btn", {
        y: s,
        x: s,
        duration:2
    })
    gsap.from(".btn", {
        duration: 3,
        scale: .5,
        opacity: 0,
        // delay: 0.5,
        stagger: 0.2,
        ease: 'elastic',
        force3D: true
      })
  currentTheme = currentTheme ? null : Themes.dark
  StyleProvider(currentTheme)
}

const context = useSSRContext()
console.log(context)
</script>

<style>
body {
    overflow: hidden;
    transition: background-color .25s, color .25s;
    color: var(--color-text);
    background-color: var(--color-body);
}
.btn{
    /* margin: 50px 0 0 200px; */
    width: 30px;
    height: 30px;
    border-radius: 6px;
    background-color: rgb(26, 206, 80);
    text-align: center;
    line-height: 30px;
}
</style>