import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoginPage : false,
        isCreaeteAcountPage :false,
        isLogining:false,
        user:"",
        
    },
    mutations:{

        // 打开与关闭登陆页面
        closeLoginPage(state){
            state.isLoginPage = false;
        },
        openLoginPage(state){
            state.isLoginPage = true;
        },

        // 打开与关闭注册页面
        closeCreateAcountPage(state){
            state.isCreaeteAcountPage = false;
        },
        openCreateAcountPage(state){
            state.isCreaeteAcountPage = true;
        },

        // 登陆
        login(state,value){
            state.isLogining = true;
            state.user = value;
        },
    }
})


