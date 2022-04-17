- Copyright (c) 2022/04/17 Shalling
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  The Software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.

---

# Hi, here is Shalling

> 这个项目为我复习/练习 html 布局的一个小小结果
> 页面大量采用了 grid 和 flex 布局, 此外还使用了一些比较新的 css3 属性, 像是 backdrop: filter 等, 这可能会在一些较老的浏览器(包括基 webkit 系列: chromium \<= 76 )上渲染不正常(IE 别尝试了, 对 grid 不支持).

# References

### 这个项目参考了一些博主的教程/项目, 在这里表示感谢

- [峰华前端工程师: Bilibili](https://space.bilibili.com/302954484)
  - [github](https://github.com/zxuqian/html-css-examples)
- [CodingStartup 起码课: Bilibili](https://space.bilibili.com/451368848?spm_id_from=333.788.b_765f7570696e666f.1)
- [文档查阅: MDN](https://developer.mozilla.org)

## 注意的地方:

1. 这个项目采用 vite 脚手架搭建, 所以你需要已经有安装 Node 环境(Node Version >= 12), 并且已将安装好了 vite, 如果都 OK, 您可以顺利启动这个项目

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

## Last, Enjoy
