const http = require('http');
require('./module/connect');
const path = require('path');
const template = require('art-template');
const serveStatic = require('serve-static');
const dateformat = require('dateformat');
const router = require('./route/index')

//实现静态资源访问服务
//art文件中的路径直接写public后的文件路径
const serve = serveStatic(path.join(__dirname, 'public'));
//配置模版目录
template.defaults.root = path.join(__dirname, 'views');
//为模版引入变量或方法
template.defaults.imports.dateformat = dateformat;


const app = http.createServer();
app.on('request', (req, res) => {
  //router根据req的请求方式和请求地址来调用绑定的事件
  router(req, res, () => {
    console.log('router success');
  });
  serve(req, res, () => {
    console.log('serve-static success');
  });
});
app.listen(80);
console.log('serve starts');