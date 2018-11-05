<template>
  <el-header class="header">
    <div class="left-container">
      <img v-if="hasLogo" alt="Vue logo" src="../../assets/logo.png">
      <!-- <icon-font v-if="!hasLogo" type="home" fontSize="22px" color="#00adb5"/> -->
    </div>
    <el-menu
      :default-active="activeRoute"
      mode="horizontal"
      class="right-container"
      @select="onSelect"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <img :src="user && user.avatar" alt="" class="avatar">
      <el-submenu index="3">
        <template slot="title">{{user.name}}</template>
        <el-menu-item index @click="submitLogout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { errorHandler, responseHandler } from '../../utils/index';

export default {
  name: 'layout-header',
  props: {
    hasLogo: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeRoute: '/'
    };
  },
  mounted() {
    this.getCurrentUser()
      .then(({ data }) => {
        if (!data) {
          this.$router.push({ path: '/login' });
        }
      })
      .catch(e => errorHandler(this, e));
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['getCurrentUser', 'logout']),
    onSelect(key) {
      this.activeRoute = key;
    },
    async submitLogout() {
      const res = await this.logout();
      responseHandler(this, res);
      this.$router.push({ path: '/login' });
    }
  }
};
</script>


<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  background: #fff;
  .left-container {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
    }
  }
  .right-container {
    display: flex;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
      margin-left: 16px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
