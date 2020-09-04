import axios from "../axios";

/**
 *  菜单模块
 */
export const getMenu = () => {
    return axios({
        url: '/menu/findTree',
        method: 'get'
    })
}
