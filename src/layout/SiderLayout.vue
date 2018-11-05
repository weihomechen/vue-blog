<template>
  <el-container class="layout sider-layout">
    <MiniSider v-if="isSiderFold"/>
    <Sider v-else/>
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
import { mapGetters } from 'vuex';

import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import Sider from '../components/layout/Sider.vue';
import MiniSider from '../components/layout/MiniSider.vue';

export default {
  name: 'siderLayout',
  components: {
    Header,
    Footer,
    Sider,
    MiniSider
  },
  computed: {
    ...mapGetters(['isSiderFold'])
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

