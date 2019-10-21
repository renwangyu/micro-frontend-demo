<template>
  <div class="page-apple">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/fruit/banana">去看看香蕉</router-link>
    </div>
    <img src="../../assets/apple.png" alt="apple">
  </div>
</template>

<style lang="less" scoped>
.page-apple {
  >img {
    max-width: 500px;
    max-height: 500px;
    object-fit: contain;
  }
}
</style>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Emit,
  Inject,
  Model,
  Provide,
  Watch
} from 'vue-property-decorator';

@Component({
  components: {

  }
})
export default class Apple extends Vue {
  title: string = '这个呢，是苹果页🍎'
}
</script>