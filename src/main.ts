import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/components/router";
import "./style/reset.scss";
import "./style/global.scss";

const app = createApp(App);
app.use(router);
app.mount('#app')
