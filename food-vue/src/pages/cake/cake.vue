<template>
  <div class="page-cake">
    <h1>{{ title }}</h1>
    <div>
      <router-link to="/food/bread">去看看面包</router-link>
    </div>
    <img src="../../assets/cake.png" alt="cake">
  </div>
</template>

<style lang="less" scoped>
.page-cake {

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
export default class Cake extends Vue {
  title: string = '这个么，是蛋糕页🍰'
}
</script>