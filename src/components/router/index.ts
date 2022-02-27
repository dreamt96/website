import {createRouter, createWebHashHistory} from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import Blog from "@/components/blog/Blog.vue";
import BlogDetail from "@/components/blog/BlogDetail.vue";
import Twitter from "@/components/twitter/Twitter.vue";

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
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    },
    {
        path: "/blogDetail",
        name: "blogDetail",
        component: BlogDetail
    },
    {
        path:"/twitter",
        name:"twitter",
        component: Twitter
    }

]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
