import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import './shared/global.scss'
import { register } from 'swiper/element/bundle'
register()

const app = createApp(App)

app.use(store).use(router).mount("#app"); 
