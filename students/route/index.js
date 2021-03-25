const getRouter = require('router');
const Student = require('../module/user');
const template = require('art-template');
//querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具
const querytring = require('querystring');

//获取路由对象
const router = getRouter();
//为路由对象绑定事件
router.get('/add', (req, res) => {
  let html = template('index.art', {});
  res.end(html);
})

router.get('/list', async (req, res) => {
  //查询学生信息
  let students = await Student.find();
  console.log(students);
  let html = template('list.art', {
    students: students
  });
  res.end(html);
})

router.post('/add', (req, res) => {
  //接收post请求参数
  let postData = '';
  req.on('data', (param) => {
    //请求参数理论上可以无限大，因此需要用data事件逐步接收
    //param是每回接受的部分请求参数
    postData += param;
  })
  req.on('end', async () => {
    await Student.create(querytring.parse(postData));
    //跳转页面
    res.writeHead(301, {
      Location: '/list'
    })
    res.end();
  })
})

module.exports = router;