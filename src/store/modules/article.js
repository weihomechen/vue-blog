/* eslint-disable no-param-reassign */
import {
  query,
} from '../../services/article';

const article = {
  state: {
    list: [],
    totalCount: [],
    article: {
      title: '',
      abstract: '',
      author: '',
      content: null,
    },
    isEditing: true,
    comments: [], // 评论列表
  },

  mutations: {
    ARTICLE_LIST_CHANGE: (state, { list, totalCount }) => {
      state.list = list;
      state.totalCount = totalCount;
    }
  },

  actions: {
    // 获取文章列表
    async getArticles({ commit }, params) {
      const res = await query(params);
      const { success, data } = res;
      const { record: list, totalCount } = data;
      if (success) {
        commit('ARTICLE_LIST_CHANGE', { list, totalCount });
      }
      return res;
    },
  }
};

export default article;
