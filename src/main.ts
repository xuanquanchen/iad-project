import { createApp } from "vue";
import App from "./App.vue";

// import "~/styles/element/index.scss";

// import ElementPlus from "element-plus";
// import all element css, uncommented next line
// import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.h tml`

import "~/styles/index.scss";
import 'uno.css'
import axios from "axios";
// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss"
import { BaiduMap } from "vue-baidu-map-3x";
import APlayer from 'APlayer'
import * as echarts from 'echarts'

const app = createApp(App);
app.use(BaiduMap, {
    ak: "7u8EaeqYHtKmZtrSPDkBc0hwD8pMf3Lh"
})
// app.use(ElementPlus);
app.config.globalProperties.$echarts = echarts;
app.mount("#app");
app.config.globalProperties.$axios = axios;
