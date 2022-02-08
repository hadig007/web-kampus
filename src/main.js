import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router'
import store from './store/store'

import { VuesticPlugin } from 'vuestic-ui' 
import 'vuestic-ui/dist/vuestic-ui.css' 


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import {marked} from 'marked'

const markedMixin = {
    methods : {
         md : function(input){
             return marked(input)
         }
    }
}


const app = createApp(App)
app.use(router)
app.use(store)
app.use(VuesticPlugin) 
app.mixin(markedMixin)

app.mount('#app')
