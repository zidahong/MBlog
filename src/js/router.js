import Vue from 'vue';
import VueRouter from 'vue-router';
import backgroundbox from '@/vue/articleBox/ArticleBox';
import writeArticle from '@/vue/editBox/EditBox';
import showArticle from '@/vue/articleBox/ShowArticleBox'
import setup from '@/vue/headbox/SetUp'

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
    },
    {
        //设置
        path:'/setup',
        component:setup
    }
];

const router = new VueRouter({
    routes,
    // mode: 'history',
})

export default router;

