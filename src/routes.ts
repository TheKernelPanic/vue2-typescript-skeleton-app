import {RouteConfig} from "vue-router";
import Home from "@/views/Home/Home.vue";

const routes: RouteConfig[] = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '*',
        redirect: {name: 'home'}
    }
];

export default routes;
