import Vue from 'vue'

import App from './App.vue'

// 完整版引入mint ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入 更好 让代码体积更小
// import { Button } from 'mint-ui'
// Vue.component(Button.name, Button);

// 导入mui样式
import './lib/mui/css/mui.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)
    }
})