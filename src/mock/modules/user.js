// 获取用户信息
export function getUser() {
    return {
        // isOpen: false,
        url: 'http://localhost:8080/user',
        type: 'get',
        data: {
            'msg': 'success',
            'code': 0,
            'data': {
                'name': '@name',   // 随机生成名字
                'email': '@email',  // 随机生成邮箱
                'age|1-10': 5
                // 其他数据
            }
        }
    }
}
