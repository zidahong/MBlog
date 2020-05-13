import Vue from 'vue'
import App from '../vue/App'
import '../css/base'
import router from './router';
<<<<<<< HEAD
import store from './store'
=======
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d

const app = new Vue({
    el:"#app",
    template:"<App></App>",
    components:{
        App,
    },
    router,
<<<<<<< HEAD
    store,
=======
    data:{
    }
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
})