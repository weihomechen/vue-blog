# vue-blog

本项目是全栈博客应用前端部分的Vue实现


[线上地址](http://rulifun.cn/vue-blog)

[服务端地址](https://github.com/weihomechen/blog-node)


### React实现

[React实现](https://github.com/weihomechen/blog)

[React实现线上地址](http://rulifun.cn/blog)


## 关于全栈博客

该项目是一个web全栈应用，前后端分离，是笔者第一次进入服务端（node）领域的尝试。集成前端（React或Vue），后端Node，数据库Mysql，缓存Redis，消息推送，文件上传，密码加密，数据存储，性能监控等功能或模块，涵盖开发、mock、proxy、生产部署、线上监控等流程，适合有一定基础的前端er入门node，体验下web全栈开发，如果能帮助到你再好不过了，希望顺手点个star哈😄。

## 生产部署

先安装[deploy-tool](https://github.com/weihomechen/deploy-tool)到本地

```
npm i @ifun/deploy -g
```

[deploy-tool说明](https://github.com/weihomechen/deploy-tool/blob/master/README.md)

```sh
# 部署项目
deploy -n <name>

# 示例
deploy -n vue-blog
```