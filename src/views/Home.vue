<template>
  <BaseLayout class="home">
    <div class="item">233</div>
    <div>233</div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '../layout/BaseLayout.vue';

export default {
  name: 'home',
  components: {
    BaseLayout
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
