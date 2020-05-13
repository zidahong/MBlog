import Vue from 'vue';
import VueRouter from 'vue-router';
import backgroundbox from '@/vue/articleBox/A_BackgroundBox';
import writeArticle from '@/vue/editBox/EditBox';
import showArticle from '@/vue/articleBox/ShowArticleBox'
import comment from '@/vue/comment/Comment'

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        // 首页
        path:'/index',
        component:backgroundbox,
    },
    {
        path:'/blog/:id',
        component:showArticle,
    },
<<<<<<< HEAD
=======
    // {
    //     // 笔记
    //     path:'/note',
    //     component:backgroundbox
    // },
    {
        // 留言
        path:'/comment',
        component:comment
    },
    // {
    //     // 下载
    //     path:'/download',
    //     component:backgroundbox
    // },
>>>>>>> 0a20a82d68ce3a8e89f67e62f2c299df8f6bab3d
    {
        //写文章
        path:'/writearticle',
        component:writeArticle
    }
];

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router;

