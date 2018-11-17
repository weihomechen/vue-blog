<template>
  <div class="article-detail">
    TODO: show the article:
    {{$route.params.id}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { errorHandler } from '../utils';

export default {
  name: 'article-detail',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['user', 'userList', 'article'])
  },
  methods: {
    ...mapActions([])
  }
};
</script>

<style lang="less">
.article-detail {
}
</style>
