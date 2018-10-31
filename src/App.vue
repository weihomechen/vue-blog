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
  #app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
