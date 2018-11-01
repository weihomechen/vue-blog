<template>
  <el-container class="layout sider-layout">
    <el-aside class="sider">
      <Sider/>
    </el-aside>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main class="main-body">
        <slot></slot>
      </el-main>
      <el-footer>
        <Footer/>
      </el-footer>
      <el-container></el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import Sider from '../components/layout/Sider.vue';

export default {
  name: 'siderLayout',
  components: {
    Header,
    Footer,
    Sider
  }
};
</script>


<style lang="less" scoped>
.sider-layout {
  .sider {
    width: 240px !important;
  }
}
</style>

