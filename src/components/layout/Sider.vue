<template>
  <el-aside class="sider">
    <div class="sider-header" :style="{background,color:textColor}">
      <img src="../../assets/logo.png" class="logo">
      <div>VUE BLOG</div>
    </div>
    <el-menu
      :default-active="activeMenu"
      :background-color="background"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      router
    >
      <el-menu-item index="/personCenter/profile">个人资料</el-menu-item>
      <el-menu-item index="/personCenter/password">密码管理</el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'sider',
  props: {
    background: {
      type: String,
      default: '#545c64'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    activeTextColor: {
      type: String,
      default: '#ffd04b'
    }
  },
  data() {
    return {};
  },
  computed: {
    activeMenu() {
      const { pathname } = location;
      return pathname;
    }
  }
};
</script>


<style lang="less">
.sider {
  width: 220px !important;
  .sider-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 0 16px;
    font-size: 24px;
    .logo {
      width: 48px;
      height: 48px;
      margin-right: 16px;
      object-fit: cover;
    }
  }
  .el-menu {
    height: 100%;
    border: none;
  }
}
</style>

