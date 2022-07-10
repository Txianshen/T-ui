// 为组件提供install方法,供组件对外按需引入
import TButton from './src/button'
TButton.install = Vue =>{
    Vue.component(TButton.name,TButton)
}
export default TButton