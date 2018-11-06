<template>
  <div class="register">
    <el-form class="register-form" ref="form" :model="form" :rules="rules">
      <div class="form-header">
        <img src="../assets/logo.png" alt="">
        <div class="text">IFUN BLOG</div>
      </div>
      <div class="form-body">
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input v-model="form.confirmPassword" placeholder="确认密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="register-btn">注册</el-button>
        </el-form-item>
        <div class="tip">
          <router-link to="/login">已有账户? 点这里登录</router-link>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { responseHandler } from '../utils';

export default {
  name: 'register',
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称' },
          { min: 4, max: 16, message: '长度在 4 到 16 个字符' }
        ],
        email: [{ type: 'email', required: true, message: '请输入正确邮箱' }],
        password: [{ required: true, message: '请输入密码' }],
        confirmPassword: [{ validator: checkPassword, trigger: 'blur' }]
      }
    };
  },
  methods: {
    ...mapActions(['register']),
    async onSubmit() {
      const { name, email, password } = this.form;
      const res = await this.register({ name, email, password });
      responseHandler(this, { ...res, msg: '注册成功，请重新登录' }, () => {
        if (res.success) {
          this.$router.push({ path: '/login' });
        }
      });
    }
  }
};
</script>

<style lang="less">
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #fff;
  .register-form {
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
      .register-btn {
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
