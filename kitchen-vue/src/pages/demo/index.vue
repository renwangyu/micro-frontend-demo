<template>
  <div class="page-demo">
    <h1>{{ title }}</h1>
    <h3>{{ desc }}</h3>
    <img src="../../assets/bomb.png" alt="bomb">
  </div>
</template>

<style lang="less" scoped>
.page-demo {
  text-align: center;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Demo extends Vue {
  title: string = 'This is demo page'
  desc: string = ''
  mounted () {
    this.desc = `mounted, let's begin "hello world"`
  }
}
</script>
