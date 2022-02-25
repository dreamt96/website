import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/components/router";
import "./style/global.scss";
import "./style/reset.scss";

const app = createApp(App);
app.use(router);
app.mount('#app')
