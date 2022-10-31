import Vue from 'vue';
import App from './App.vue';
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import routes from "@/routes";
import messages from "@/i18n/messages.js";
import VueI18n from "vue-i18n";
import parameters from "@/parameters";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueI18n);
Vue.use(VueRouter);

new Vue({
    router: new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    }),
    i18n: new VueI18n({
        locale: parameters.currentLanguage,
        messages
    }),
    render: h => h(App),
}).$mount('#app');
