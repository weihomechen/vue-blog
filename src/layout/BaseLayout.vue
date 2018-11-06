<template>
  <el-container class="layout base-layout">
    <Header/>
    <el-main class="main-body">
      <router-view></router-view>
    </el-main>
    <Footer/>
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
.el-container {
  flex-direction: column;
}
</style>
