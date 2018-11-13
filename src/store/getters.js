const getters = {
  isSiderFold: state => state.app.isSiderFold,
  user: state => state.user.user,
  userList: state => state.user.userList,
  activeUsers: state => state.user.activeUsers,
  articles: state => state.article.list,
  articlesTotal: state => state.article.totalCount,
  cateList: state => state.cate.list,
};

export default getters;
