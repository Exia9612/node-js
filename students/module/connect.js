//引入数据库模块并链接数据库
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground', {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('success');
}).catch((err) => {
  console.log(err, 'fail');
});