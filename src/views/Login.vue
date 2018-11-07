<template>
  <div class="login">
    <el-form class="login-form" ref="form" :model="form" :rules="rules">
      <div class="form-header">
        <img src="../assets/logo.png" alt="">
        <div class="text">IFUN BLOG</div>
      </div>
      <div class="form-body">
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="用户名或邮箱（试用：guest）"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码（试用：guest）" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="login-btn">登陆</el-button>
        </el-form-item>
        <div class="tip">
          <router-link to="/register">还没有账户? 点这里注册</router-link>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { responseHandler } from "../utils";

export default {
  name: "login",
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名或邮箱" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit() {
      const { name, password } = this.form;
      const res = await this.login({ name, password });
      responseHandler(res, () => {
        if (res.success) {
          this.$router.push({ path: "/" });
        }
      });
    }
  }
};
</script>

<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
  .login-form {
    width: 320px;
    padding: 24px 36px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
    .form-header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 16px;
      img {
        height: 48px;
        margin-right: 24px;
      }
      .text {
        font-size: 30px;
      }
    }
    .form-body {
      margin-top: 12px;
      .login-btn {
        width: 100%;
      }
      .tip {
        display: flex;
        font-size: 14px;
      }
    }
  }
}
</style>
