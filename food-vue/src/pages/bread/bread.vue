<template>
  <div class="page-bread">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/food/cake">去看看蛋糕</router-link>
    </div>
    <img src="../../assets/bread.png" alt="bread">
  </div>
</template>

<style lang="less" scoped>
.page-bread {

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
} from 'vue-property-decorator'

@Component({
  components: {

  }
})
export default class Bread extends Vue {
  title: string = '这个呢，是面包页🍞'
}
</script>