<template>
  <div class="password-manage">
    <div class="section-header">密码管理</div>
    <el-form class="password-form" ref="form" :model="form" :rules="rules">
      <el-form-item prop="oldPassword">
        <el-input v-model="form.oldPassword" placeholder="请输入旧密码" type="password"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" placeholder="请输入新密码" type="password"></el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input v-model="form.confirmPassword" placeholder="请确认新密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="confirm-btn">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { errorHandler } from '../utils';

export default {
  name: 'password-manage',
  data() {
    const checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认新密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      form: {
        oldPassword: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        oldPassword: [{ required: true, message: '请输入旧密码' }],
        password: [{ required: true, message: '请输入密码' }],
        confirmPassword: [{ validator: checkPassword, trigger: 'blur' }]
      }
    };
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['updateUser']),
    async onSubmit() {
      const { oldPassword, password } = this.form;
      const { uid } = this.user;
      const res = await this.updateUser({ uid, oldPassword, password });
      if (res.success) {
        this.$message.success('密码修改成功，请重新登录');
        this.$router.push({ path: '/login' });
      }
    }
  }
};
</script>

<style lang="less">
.password-manage {
  .section-header {
    display: flex;
    padding: 0 16px;
    margin-bottom: 24px;
    border-left: 5px solid #00adb5;
    font-size: 22px;
  }
  .password-form {
    width: 400px;
  }
  .confirm-btn {
    width: 100%;
  }
}
</style>
