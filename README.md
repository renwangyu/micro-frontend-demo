# micro-frontend-demo
基于single-spa的微前端demo（子模块框架基于react和vue）


### demo结构
- coexist: 微前端注册启动器模块
- kitchen-vue: 微前端整合框架模块（vue）
- food-vue: food业务模块（vue）
- fruit-vue: fruit业务模块（vue）
- drink-react: drink业务模块（react）

### 安装
```bash
cd xxx
npm install
```

### 运行
- kitchen-vue, food-vue, fruit-vue
```bash
// 项目单独运行
npm run dev
// 微服务打包
npm run build:umd
// 项目运行 && 打包输出作为微服务资源（推荐）
npm run combo
```

- drink-react
  由于是用create-react-app生成，反编译的webpack配置，所以与vue项目稍有不同
```bash
// 项目单独运行
npm start
// 微服务打包
npm run build:umd
// 微服务打包 && 运行（推荐）
npm run combo
```

- coexist
  简单的作为静态资源服务
```bash
npm start
```

### 备注

微服务整合：
- http://localhost:8000

业务框架：
- http://localhost:8080

food业务：
- http://localhost:8081/food

fruit业务：
- http://localhost:8082/fruit

drink业务：
- http://localhost:3000 （单独项目运行）
- http://localhost:8083/drink (微服务运行)


### for fun :)
