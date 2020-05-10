import Vue from 'vue'
import App from '../vue/App'
import '../css/base'
import router from './router';

const app = new Vue({
    el:"#app",
    template:"<App></App>",
    components:{
        App,
    },
    router,
    data:{
    }
})