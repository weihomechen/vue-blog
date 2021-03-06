/* eslint-disable no-param-reassign, no-return-assign */
import {
  login,
  register,
  getUserInfo,
  logout,
  update,
  getUsers,
  getActiveUsers,
} from '../../services/user';

const user = {
  state: {
    user: {},
    userList: [],
    activeUsers: [],
  },

  mutations: {
    STATE_CHANGE: (state, val = {}) => {
      // 这样写getter不触发更新。。。
      // state = {
      //   ...state,
      //   ...val,
      // };
      Object.keys(val).map(key => state[key] = val[key]);
    }
  },

  actions: {
    // 用户登录
    async login({ commit }, userInfo) {
      const res = await login(userInfo);
      const { success, data } = res;
      if (success) {
        const { user } = data;
        commit('STATE_CHANGE', { user });
      }
      return res;
    },

    // 用户注册
    async register(_, userInfo) {
      const res = await register(userInfo);
      return res;
    },

    // 获取用户信息
    async getCurrentUser({ commit }, params) {
      const res = await getUserInfo(params);
      const { success, data: user } = res;
      if (success) {
        commit('STATE_CHANGE', { user });
      }
      return res;
    },

    // 获取用户列表
    async getUsers({ commit }, params) {
      const res = await getUsers(params);
      const { success, data: userList } = res;
      if (success) {
        commit('STATE_CHANGE', { userList });
      }
      return res;
    },

    // 获取活跃用户列表
    async getActiveUsers({ commit }, params) {
      const res = await getActiveUsers(params);
      const { success, data: activeUsers } = res;
      if (success) {
        commit('STATE_CHANGE', { activeUsers });
      }
      return res;
    },

    async logout({ commit }, params) {
      const res = await logout(params);
      const { success } = res;
      if (success) {
        commit('STATE_CHANGE', { user: {} });
      }
      return res;
    },

    async updateUser({ commit }, params) {
      const res = await update(params);
      const { success } = res;
      if (success) {
        commit('STATE_CHANGE', { user: {} });
      }
      return res;
    }
  }
};

export default user;
