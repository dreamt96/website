import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
