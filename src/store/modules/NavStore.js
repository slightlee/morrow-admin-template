export default {
    state: {
        appName: "morrow",  // 应用名称 显示在左上角
        collapse:false,  // 导航栏收缩状态
        themeColor: "#14889A",  // 主题颜色
        oldThemeColor: "#14889A",   // 上一次主题颜色
        menuRouteLoaded:false  // 菜单和路由是否已经加载
    },
    getters: {
        collapse(state){// 对应着上面state
            return state.collapse;
        }
    },
    mutations: {
        onCollapse(state){  // 改变收缩状态
            state.collapse = !state.collapse;
        },
        themeColor(state, themeColor){  // 改变收缩状态
            state.themeColor = themeColor;
        },
        oldThemeColor(state, oldThemeColor){  // 改变收缩状态
            state.oldThemeColor = oldThemeColor;
        },
        menuRouteLoaded(state, menuRouteLoaded){  // 改变菜单和路由的加载状态
            state.menuRouteLoaded = menuRouteLoaded;
        }
    },
    actions: {
        // 改变主题颜色
        onThemeChange ({ commit, state }, data) {
            commit('themeColor', data.themeColor)
            commit('oldThemeColor', data.oldThemeColor)
        }
    }
}
