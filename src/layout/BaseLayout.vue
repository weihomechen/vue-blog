<template>
  <el-container class="layout base-layout">
    <el-header>
      <Header/>
    </el-header>
    <el-main class="main-body">
      <slot></slot>
    </el-main>
    <el-footer>
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';

export default {
  name: 'baseLayout',
  components: {
    Header,
    Footer
  }
};
</script>


<style lang="less" scoped>
.base-layout {
  .el-header {
    padding: 0;
  }
}
</style>

