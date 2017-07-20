import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Register from '../components/Register'
import Loginint from '@/components/Loginint'
import Youxiangint from '@/components/Youxiangint'
import err404 from '@/components/404'
import Home from '@/components/Home'
import listview from '@/components/listview'
import list1 from '@/components/list1'
import list2 from '@/components/list2'
import list3 from '@/components/list3'
import list4 from '@/components/list4'
import list5 from '@/components/list5'
import list6 from '@/components/list6'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
        children: [
        {
          path: '/youxiangint',
          name: '找回密码',
          component: Youxiangint,
          meta:{
             title:"找回密码"
          }
        },
        {
          path: '/register',
          name: '注册',
          component: Register,
          meta:{
             title:"注册"
          }
        },
        {
          path: '/login',
          name: '登录',
          component: Loginint,
          meta:{
             title:"登录"
          }
        }]
    },

    // {
    //     path:"/home",
    //     name:"首页",
    //     component:Main,
    //     children: [{ path: 'home', component: Home }],
    //     meta: {
    //       requireAuth: true,
    //       title:"首页"
    //     }
    //   },
      {
        path: '/',
        component: Main,
        redirect: '/home',
        children: [{ path: 'home',  name: '主页',component: Home,meta: {requireAuth: true,title:"首页"} }]
      },
      {
      path: '/components',
      redirect: 'noredirect',
      component:Main,
      name: '一级导航',
      children:[
            { path: 'list5', component: list5, name: '选项5', meta: {requireAuth: true,title:"list5"} },
            {
              path:"list1",name:"选项1",component:list1, meta: {requireAuth: true,title:"list1"}
            },
            {
              path: '/components/table',
              component: listview,
              redirect: '/components/table/list2',
              name: '二级导航',
              children:[
                    { path:"list2",name:"选项2",  component:list2, meta: {requireAuth: true,title:"list2"}},
                    { path:"list6",name:"选项6",  component:list6, meta: {requireAuth: true,title:"list6"}}
               ]
           }
       ]
      },
      {
        path:"/theme",name:"列表3头部",redirect: 'noredirect',component: Main,
        children: [{ path: 'list3', component: list3, name: '列表3',  meta: {requireAuth: true, title:"list3"
          } 
        }],
      },
        {path:"/style",name:"列表4头部",redirect: 'noredirect',component:Main,
        children:[{ path: 'list4', component: list4,  name: '列表4', meta: {requireAuth: true,title:"list4"
            } 
          }]
        },
   // {
   //  path: '*',
   //  component: Main,
   //  redirect: 'noredirect',
   //  name: '错误页面',
   //  children: [
   //      { path: '404', component: err404, name: '404' }
   //    ]
   //  }
    
  ]
  
});
