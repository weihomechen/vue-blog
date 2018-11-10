<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .layout {
      height: 100%;
      background: #f6f6f6;
      .main-body {
        width: 98%;
        margin: 12px auto;
        margin-bottom: -12px;
        background: #fff;
      }
    }
  }
  a,
  a:link,
  a:active,
  a:visited {
    color: #409eff;
    text-decoration: none;
  }
}
</style>
