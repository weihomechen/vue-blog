<template>
  <el-container class="layout sider-layout">
    <Sider/>
    <el-container>
      <Header :hasLogo="false"/>
      <el-main class="main-body">
        <router-view></router-view>
      </el-main>
      <Footer/>
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
  .el-container {
    flex-direction: column;
  }
}
</style>

