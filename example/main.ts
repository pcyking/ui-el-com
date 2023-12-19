import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './src/App.vue';
// import UiElCom from 'ui-el-com';

const app = createApp(App);
// app.use(UiElCom);
app.use(ElementPlus);
app.mount('#app');
