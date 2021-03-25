//为user建立table
const mongoose = require('mongoose');
//创建用户table的规则实例
const studentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 10
  },
  age: {
    type: Number,
    min: 10,
    max: 25
  },
  sex: {
    type: String
  },
  email: String,
  hobbies: [ String ],
  collage: String,
  enterDate: {
    type: Date,
    default: Date.now
  }
});
//用规则创建学生table的构造函数
const Student = mongoose.model('Students', studentsSchema);

module.exports = Student;