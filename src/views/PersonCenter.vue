<template>
  <SiderLayout class="home">
    <div class="item">233</div>
    <div>233</div>
  </SiderLayout>
</template>

<script>
import SiderLayout from '../layout/SiderLayout.vue';

export default {
  name: 'home',
  components: {
    SiderLayout
  }
};
</script>

<style lang="less">
.home {
  .item {
    height: 1000px;
  }
}
</style>
