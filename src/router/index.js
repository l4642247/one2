import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import IndexAdmin from '@/pageadmin/index'
import Content from '@/page/content'
import Board from '@/page/board'
import Friend from '@/page/friend'
import About from '@/page/about'
import Login from '@/pageadmin/login'
import ArticleForm from '@/components/articleform'
import ArticleEdit from '@/components/articleedit'
import ContentCard from '@/components/contentcard'
import Test from '@/components/test'
import Admin from '@/page/admin'



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
    },
    {
      path: '/contentcard',
      name: 'ContentCard',
      component: ContentCard
    },
    {
      path: '/content/:id',
      name: 'Content',
      component: Content
    },
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/55148917',
      name: 'Admin',
      component: Admin,
      children:[
        {
          path: 'page1',
          name: 'ArticleForm',
          component: ArticleForm
        },
        {
          path: 'page2',
          name: 'ArticleEdit',
          component: ArticleEdit
        },
      ]
    }
  ]
})
