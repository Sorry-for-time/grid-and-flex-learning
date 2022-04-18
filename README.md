# 👋Hi

> 这个项目为我复习/练习 html 布局的一个小小结果
> 页面采用了 grid 和 flex 布局, 此外还使用了一些比较新的 css3 属性, 像是 backdrop: filter 等, 这可能会在一些较老的浏览器(包括基 webkit 系列: chromium \<= 76 )上渲染不正常(IE 别尝试了, 对 grid 不支持). 以及界面尝试模仿了 jetbrains fleet 官网的部分效果(其实颜色代码我直接 copy 的 🤣).

# References

### 这个项目参考了一些博主的教程/项目, 在这里表示感谢

- [峰华前端工程师: Bilibili](https://space.bilibili.com/302954484)
  - [峰华的 github](https://github.com/zxuqian/html-css-examples)

## 样式参考&&参考查阅

- [jetbrains fleet 官网](https://www.jetbrains.com/zh-cn/fleet/)
- [文档查阅: MDN](https://developer.mozilla.org)

## 可能需要注意的地方:

1. 这个项目采用 vite 脚手架搭建, 所以你需要已经有安装 Node 环境(Node Version >= 12)和脚手架, 如果都 OK, 便可以 1 开始

   - 简要步骤(open in terminal: `zsh, bash, powershell...`)

     ```sh
     # 进入项目内并且安装需要的依赖
     cd grid-and-flex-learning && npm run install
     # 打开本地服务器便于测试观察
     npm run dev
     # 如果就觉得可以了, 可以进行打包, 方便部署到 nginx 等环境下
     npm run build

     ```

2. 这个项目使用了 sass 来进行 css 的简化编写(偷懒 ✌️)
3. 项目使用了 typescript(因为我在学习它 🤣)
4. 这只是我的一个练习/学习的项目, 如果写的很辣眼, 请不要生气 🤣

## 持续更新中...
