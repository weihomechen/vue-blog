<template>
  <el-header class="header">
    <div class="left-container">
      <img v-if="hasLogo" alt="" :src="LOGO_PATH">
      <div v-else @click="iconTypeChange">
        <icon-font :type="iconType" fontSize="22px" color="#00adb5"/>
      </div>
    </div>
    <el-menu
      :default-active="activeRoute"
      mode="horizontal"
      class="right-container"
      @select="onSelect"
      :text-color="textColor"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="/personCenter/profile">
        <template slot="title">{{user.name}}</template>
        <el-menu-item index="/personCenter/profile">个人中心</el-menu-item>
        <el-menu-item index @click="submitLogout">退出</el-menu-item>
      </el-submenu>
      <img :src="user && user.avatar" alt="" class="avatar">
    </el-menu>
  </el-header>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { LOGO_PATH, errorHandler, responseHandler } from '../../utils';

export default {
  name: 'layout-header',
  props: {
    hasLogo: {
      type: Boolean,
      default: true
    },
    textColor: {
      type: String,
      default: '#333'
    }
  },
  data() {
    return {
      activeRoute: '/',
      iconType: 'menu-unfold',
      LOGO_PATH
    };
  },
  mounted() {
    this.getCurrentUser()
      .then(({ data }) => {
        if (!data) {
          this.$router.push({ path: '/login' });
        }
      })
      .catch(errorHandler);
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapMutations(['MENU_FOLD_CHANGE']),
    ...mapActions(['getCurrentUser', 'logout']),
    onSelect(key) {
      this.activeRoute = key;
    },
    iconTypeChange() {
      if (this.iconType === 'menu-fold') {
        this.iconType = 'menu-unfold';
      } else {
        this.iconType = 'menu-fold';
      }
      this.MENU_FOLD_CHANGE(this.iconType);
    },
    async submitLogout() {
      const res = await this.logout();
      responseHandler(res);
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
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
