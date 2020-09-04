/*
 * 请求接口汇总模块
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */
import * as login from './modules/login'
import * as user from './modules/user'
import * as menu from './modules/menu'



// 默认全部导出
export default {
    login,
    user,
    menu
}
