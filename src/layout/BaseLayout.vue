<template>
  <el-container class="base-layout">
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
  background: #f6f6f6;
  .main-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 1000px;
    margin: 12px;
    margin-bottom: -12px;
    background: #fff;
  }
}

.el-header {
  padding: 0;
}
</style>

