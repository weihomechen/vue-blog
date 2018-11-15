<template>
  <div class="home">
    <div class="articles">
      <div class="article-list-header">最新文章</div>
      <div class="article-list-body">
        <div
          v-for="{ id, uid, title, author, avatar, updateTime, tags = '', cate, comments } in articles"
          :key="id"
          class="article-item"
        >
          <img
            v-if="getUserInfo(uid, 'avatar')"
            :src="getUserInfo(uid, 'avatar')"
            class="author-avatar"
            alt=""
          >
          <div v-else class="author-name">{{author}}</div>
          <div class="info">
            <div class="title">
              <router-link :to="id | articlePathFilter">{{title}}</router-link>
              <el-tag
                v-if="getCateInfo(cate)"
                :color="cate.color"
                :click="() => searchArticleByCate(cateId || '')"
              >{{cate.name}}</el-tag>
            </div>
            <div>
              <span class="info-item">
                <icon-font type="time" color="#F38181"/>
                {{updateTime | acticleTimeRender}}
              </span>
              <span v-if="comments" class="info-item">
                <icon-font type="comment" color="#F38181"/>
                {{comments}}
              </span>
            </div>
            <div v-if="tags" class="tags">
              <icon-font type="tag" color="#F38181" fontSize="20px"/>
              <span
                v-for="tag in (tags || '').split(',')"
                :key="tag.id"
                class="tag"
                :click="() => searchArticleByTag(tag)"
              >{{tag}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-list">
      <div class="user-list-header">活跃用户</div>
      <div class="user-list-body">
        <el-table :data="activeUsers" style="width: 100%">
          <el-table-column label="排名" align="center">
            <template slot-scope="scope">
              <icon-font
                v-if="getRank(scope.row.uid) < 4"
                :type="getTopIcon(scope.row.uid,'type')"
                :color="getTopIcon(scope.row.uid,'color')"
              />
              <span v-else>{{ this.getRank(scope.row.uid) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="uid" label="姓名" align="center">
            <template slot-scope="scope">{{getUserInfo(scope.row.uid,'name')}}</template>
          </el-table-column>
          <el-table-column prop="sum" label="文章数" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { errorHandler } from '../utils';

const topIconMap = [
  {},
  {
    type: 'first',
    color: '#ff6464'
  },
  {
    type: 'second',
    color: '#0092ca'
  },
  {
    type: 'third',
    color: '#ffaa64'
  }
];

export default {
  name: 'home',
  data() {
    return {};
  },
  mounted() {
    this.getArticles({ pageNo: 1, pageSize: 10 });
    this.getUsers();
    this.getActiveUsers();
  },
  computed: {
    ...mapGetters(['articles', 'userList', 'activeUsers', 'cateList'])
  },
  filters: {
    articlePathFilter(id) {
      return `/article/detail/${id}`;
    },
    acticleTimeRender(time) {
      return moment(time).format('YYYY-MM-DD HH:mm');
    }
  },
  methods: {
    ...mapActions(['getArticles', 'getUsers', 'getActiveUsers']),
    getUserInfo(uid, field) {
      const targetUser = this.userList.find(item => item.uid === uid) || {};
      return targetUser[field] || '';
    },
    getCateInfo(cateId) {
      return this.cateList.find(item => item.id === cateId);
    },
    searchArticleByCate(cateId) {},
    searchArticleByTag(tag) {},
    getRank(uid) {
      let index = this.activeUsers.findIndex(v => v.uid === uid);
      return ++index;
    },
    getTopIcon(uid, key) {
      const index = this.getRank(uid);
      return topIconMap[index][key];
    }
  }
};
</script>

<style lang="less">
.home {
  display: flex;
  .articles {
    width: 70%;
    .article-list-header {
      padding-left: 12px;
      font-size: 20px;
      line-height: 1.2;
      color: #00adb5;
      border-left: 3px solid #00adb5;
      border-radius: 1px;
    }
    .article-list-body {
      padding: 0 30px;
      .article-item {
        display: flex;
        align-items: center;
        margin: 24px 0;
        padding: 16px 24px;
        box-shadow: 1px 2px 6px #ddd;
        .author-avatar {
          width: 70px;
          height: 70px;
          margin-right: 16px;
          object-fit: cover;
          border-radius: 35px;
        }
        .author-name {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          margin-right: 16px;
          border-radius: 35px;
          font-size: 20px;
          color: #1fab89;
          box-shadow: 0 0 6px #eee;
          background: #dff4f3;
        }
        .info {
          flex: 1;
          margin-left: 12px;
          .title {
            display: flex;
            align-items: center;
            font-size: 24px;
            margin-bottom: 12px;
            a {
              margin-right: 12px;
              color: #00adb5;
            }
            a:hover {
              opacity: 0.8;
            }
          }
          .info-item {
            margin-right: 24px;
            color: #868686;
            svg {
              margin-right: 6px;
            }
          }
          .tags {
            margin-top: 8px;
            svg {
              margin-right: 6px;
            }
            .tag {
              margin-right: 8px;
              color: #868686;
              font-size: 14px;
              cursor: pointer;
            }
            .tag:hover {
              color: #00adb5;
            }
          }
        }
      }
    }
  }
  .user-list {
    width: 30%;
    .user-list-header {
      padding-left: 12px;
      font-size: 20px;
      line-height: 1.2;
      color: #00adb5;
      border-left: 3px solid #00adb5;
      border-radius: 1px;
    }
    .user-list-body {
      margin: 24px 0;
      box-shadow: 0 0 12px #dedede;
      .active-name:hover {
        color: #00adb5;
        cursor: pointer;
      }
    }
  }
}
</style>
