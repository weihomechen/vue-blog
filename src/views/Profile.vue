<template>
  <div class="profile">
    <div class="section">
      <div class="section-header">我的头像</div>
      <el-upload
        class="uploader"
        drag
        name="file"
        :data="{uid:user.uid,type}"
        :before-upload="beforeUpload"
        :on-success="onSuccess"
        :on-error="onError"
        action="/blog/api/user/upload"
      >
        <img v-if="user.avatar" :src="user.avatar">
        <i v-else class="el-icon-upload"></i>
        <div class="tip" slot="tip">
          <i class="el-icon-upload"></i>
          将文件拖到此处，或
          <em>点击上传</em>，上传文件不能超过2M
        </div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { checkFileSize } from "../utils";

export default {
  name: "profile",
  data() {
    const beforeUpload = file => {
      return checkFileSize(file, 2);
    };
    const onSuccess = res => {
      if (res.success) {
        this.$message.success("上传成功");
        this.getCurrentUser();
      } else {
        onError();
      }
    };
    const onError = () => {
      this.$message.error("上传失败，请稍后再试");
    };

    return {
      type: 0, // 0 - avatar
      uid: "",
      beforeUpload,
      onSuccess,
      onError
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapActions(["getCurrentUser"])
  }
};
</script>

<style lang="less">
.profile {
  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 24px;
    .section-header {
      padding: 0 16px;
      margin-bottom: 24px;
      border-left: 5px solid #00adb5;
      font-size: 22px;
    }
    .uploader {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
