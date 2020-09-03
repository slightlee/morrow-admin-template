import Mock from 'mockjs' // ES6 语法 引入 mock 模块

// 用户接口
Mock.mock('http://localhost:8080/user',{
    'name': '@name',   // 随机生成名字
    'email': '@email',  // 随机生成邮箱
    'age|1-10': 5
});

// 菜单接口
Mock.mock('http://localhost:8080/menu',{
    'id': '@id',
    'name': 'menu',   // 随机生成名字
    'order|10-20': 12
});

// 登录接口
Mock.mock('http://localhost:8080/login',{
    data: {
        'token' : '14212414155'
    }
});




