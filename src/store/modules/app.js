/* eslint-disable no-param-reassign */

const app = {
  state: {
    isSiderFold: false,
  },

  mutations: {
    MENU_FOLD_CHANGE: (state, type) => {
      state.isSiderFold = type === 'menu-fold';
    }
  },

  actions: {

  }
};

export default app;
