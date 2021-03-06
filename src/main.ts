/*
 * @Title: $1
 * @Package: $2
 * @Description: $3
 * @Date: 2021-09-28 17:33:06
 * @Author: zhangqiao
 * @Version: v1.0
 * @License: Copyright Since 2015 Hive Box Technology. All rights reserved.
 * @Notice: This content is limited to the internal circulation of Hive Box, and it is prohibited to leak or used for other commercial purposes
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Vant from 'vant'
import 'vant/lib/index.css';


createApp(App).use(Vant).use(store).use(router).mount('#app')
