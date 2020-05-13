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

