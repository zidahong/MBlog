import Vue from 'vue';
import VueRouter from 'vue-router';
import backgroundbox from '@/vue/articleBox/ArticleBox';
import writeArticle from '@/vue/editBox/EditBox';
import showArticle from '@/vue/articleBox/ShowArticleBox'
import setup from '@/vue/headbox/SetUp'
import setPassword from '@/vue/headbox/setPassword'

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

