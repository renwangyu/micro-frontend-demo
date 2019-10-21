<template>
  <div class="page-home">
    <div class="head-nav-bar">
      <div class="name">My Kitchen</div>
      <div class="menu">
        <router-link to="/food">food</router-link>
        <router-link to="/fruit">fruit</router-link>
        <router-link to="/drink">drink</router-link>
      </div>
      <div class="login-info">
        <img src="../../assets/bomb.png" alt="">
        <span>爆爆</span>
      </div>
    </div>
    <div>
    <!-- <router-view /> -->
    </div>
  </div>
</template>

<style lang="less">
.page-home {
  .head-nav-bar {
    background-color: lightskyblue;
    color: white;
    display: flex;
    height: 60px;
    align-items: center;

    .name {
      width: 100px;
      border-right: 1px solid white;
    }

    .menu {
      flex: 1;
      padding: 0 50px;
      text-align: left;
      >* {
        margin-right: 50px;
      }
    }

    .login-info {
      width: 150px;
      display: flex;
      align-items: center;

      >img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {

}
</script>
