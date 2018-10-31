/* eslint-disable no-param-reassign */

const app = {
  state: {
  },

  mutations: {
    STATE_CHANGE: (state, val = {}) => {
      state = {
        ...state,
        ...val
      };
    }
  },

  actions: {
  }
};

export default app;
