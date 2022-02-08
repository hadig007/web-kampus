import { createRouter, createWebHistory } from 'vue-router'

import HomeApp from '../components/HomeApp.vue';

import AboutPage from '../components/header/AboutPage.vue';
import ContactPage from '../components/header/ContactPage.vue';

import HtmlContent from '../components/content/html/HtmlContent.vue'
import CssContent from '../components/content/css/CssContent.vue'
import JavascriptContent from '../components/content/javascript/JavascriptContent.vue'



const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/home',
            component : HomeApp,
            name : 'home',
            children : [
                {
                    path : 'html',
                    component : HtmlContent,
                    name : 'html'
                },
                {
                    path : 'css',
                    component : CssContent,
                    name : 'css'
                },
                {
                    path : 'javascript',
                    component : JavascriptContent,
                    name : 'javascript'
                },
            ]
        },
        {
            path : '/about',
            component : AboutPage,
            name : 'about'
        },
        {
            path : '/contact',
            component : ContactPage,
            name : 'contact'
        },
    ]
})

export default router;