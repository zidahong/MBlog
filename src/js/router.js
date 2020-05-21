import Vue from 'vue';
import VueRouter from 'vue-router';

import menu from '@/vue/main/menu';
import content from '@/vue/main/content';
import edit from '@/vue/main/edit/edit'
import setPassword from '@/vue/navigation/setPassword'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        // 首页
        path:'/index',
        component:menu,
    },
    {
        path:'/blog/:id',
        component:content,
    },
    {
        //写文章
        path:'/edit',
        component:edit
      
    },
    {
        //修改密码
        path:'/setpassword',
        component:setPassword
    }
];

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router;

