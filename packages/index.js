import TButton from "./button";

// 所有组件列表
const components = [
    TButton
]

const install= function (Vue) {
    // 判断是否安装，安装过就不继续往下执行
    if (install.installed) return 
    install.installed = true
    // 遍历注册所有组件
    components.map(component=>Vue.component(component.name,component))
}

// 检测到Vue才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    //所有组件，必须要有install方法，才能用Vue.use()
    ...components
}