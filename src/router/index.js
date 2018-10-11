import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import IndexAdmin from '@/pageadmin/index'
import Content from '@/page/content'
import Login from '@/pageadmin/login'
import ArticleForm from '@/components/articleform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/admin',
      name: 'IndexAdmin',
      component: IndexAdmin
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/articleform',
      name: 'ArticleForm',
      component: ArticleForm
    }
  ]
})
