#### 学生列表模块
  ##### 文件夹用途
  - module: 存放数据库相关代码
    -  connect.js引入mongodb模块，链接数据库
    - user.js创建table规则，然后建立table
  - public: 存放静态资源
  - route: 存放路由相关js文件
  - template: 存放模板文件
  ##### 实现步骤
  - 引入http模块，用http模块创建服务器，绑定request事件，监听端口
  - 引入mongoose，链接数据库，创建student表规则，用mongoose.Schema创建student表
  - 引入第三方模块router，创建router实例，在服务器request事件下调用router。router会根据客户端的请求方式和url决定采用哪一个路由响应
  - 引入art-template第三方模块，在views文件夹中创建模版文件(.art)，在app.js中设置template相关默认属性。
  - 引入serve-static第三方模块，在服务器request事件下调用serve，传入保存静态文件的文件夹的绝对路径(path.join(__dirname, 'public'))。对于模版中的静态文件，如css文件，琦引入路径应是public的子路径。