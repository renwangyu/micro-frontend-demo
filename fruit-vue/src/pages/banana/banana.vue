<template>
  <div class="page-banana">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/fruit/apple">去看看苹果</router-link>
    </div>
    <img src="../../assets/banana.png" alt="banana">
  </div>
</template>

<style lang="less" scoped>
.page-banana {

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
export default class Banana extends Vue {
  title: string = '这个呢，是香蕉页🍌'
}
</script>