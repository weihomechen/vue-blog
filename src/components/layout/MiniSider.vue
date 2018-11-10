<template>
  <el-aside class="mini-sider">
    <div class="sider-header" :style="{background,color:textColor}">
      <img src="../../assets/logo.png" class="logo">
    </div>
    <el-menu
      :default-active="activeMenu"
      :background-color="background"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      router
    >
      <el-menu-item index="/personCenter/profile">
        <icon-font type="database" class="menu-icon" color="textColor"/>
      </el-menu-item>
      <el-menu-item index="/personCenter/password">
        <icon-font type="reset-password" class="menu-icon" color="textColor"/>
      </el-menu-item>
      <el-menu-item index="/personCenter/changeLog">
        <icon-font type="calendar1" class="menu-icon" color="textColor"/>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'mini-sider',
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
      default: '#00adb5'
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
.mini-sider {
  width: 60px !important;
  .sider-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 0 16px;
    font-size: 24px;
    .logo {
      width: 32px;
      height: 32px;
      object-fit: cover;
    }
  }
  .el-menu {
    height: 100%;
    border: none;
    .menu-icon {
      margin-right: 12px;
    }
  }
}
</style>

