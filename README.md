# 基于 React, Express, Webpack 的前端工程化、自动化同构应用开发环境

## 说明
  前后端统一开发目录，支持 ES6+、Babel、ESlint

## 项目结构
    /build
    /dist           // 构建输出目录
    /node_modules
    /public
    /src
      /bin          // 服务端项目启动文件
      /components   // React 组件
      /containers   // React 页面容器
      /controller   // 服务端控制器
      /lib          // 前端端共用的文件
        config.js   // 前端可选配置文件
      /reducers     // Redux Reducers
      /routes       // React Router
      /store        // Redux Store
      app.js        // 服务端文件
      config.js     // 服务端配置文件（前端文件不可调用）
      main.js       // 前端打包入口文件
    .babelrc
    .editorconfig
    .eslintignore
    .eslintrc.js
    .gitignore
    .jsbeautifyrc
    package.json
    README.md
