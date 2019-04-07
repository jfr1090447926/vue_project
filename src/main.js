import Vue from 'vue'

import App from './App.vue'

// 完整版引入mint ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需导入 更好 让代码体积更小
// import { Button } from 'mint-ui'
// Vue.component(Button.name, Button);

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入mui样式
import './lib/mui/css/mui.css'
import { Header } from 'mint-ui';
import './lib/mui/css/icons-extra.css'
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

Vue.component(Header.name, Header);

const vm = new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement(App)
    },
    router
})