<template>
  <div class="changeLogPage">
    <div class="changeLogHeader">
      <icon-font type="rec" fontSize="30px"/>
      <div class="title">更新日志</div>
    </div>
    <div class="changeLogList">
      <div v-for="item in changeLogList" :key="item.version" class="logItem">
        <div class="itemHeader">
          <icon-font type="version" fontSize="32px" color="#00ADB5"/>
          {{item.version}}
          <span class="versionDate">{{item.date}}</span>
        </div>
        <ul class="itemBody">
          <li v-for="(log,i) in item.logs" :key="i">{{log}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    const changeLogList = [
      {
        version: '0.0.1',
        date: '2018-10-30',
        logs: ['这个博客诞生啦～🎉🎉🎉']
      }
    ];
    return {
      changeLogList
    };
  }
};
</script>

<style lang="less" scoped>
.changeLogPage {
  padding: 24px;
  font-family: 'PingFangSC-light';
  .changeLogHeader {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    .title {
      margin-left: 12px;
      font-size: 30px;
    }
  }
  .changeLogList {
    .logItem {
      margin-bottom: 36px;
      .itemHeader {
        font-size: 28px;
        svg {
          margin-right: 12px;
        }
        .versionDate {
          margin-left: 12px;
          font-size: 18px;
          color: #aaa;
        }
      }
      .itemBody {
        color: #535353;
        font-size: 15px;
        li {
          margin: 6px 0;
        }
      }
    }
  }
}
</style>
