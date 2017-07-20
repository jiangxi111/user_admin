import Vue from 'vue'
import Router from 'vue-router'
import {
  Login,
  Main,
  Loginint,
  err404,
  Home} from '@/components'
import {
 listview,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  Stafflist,
  Staffadd,
  Permiconfig,
  Productlist,
  ProductaddEdit,
  Assetslist,
  Assetsadd} from '@/components/views'
Vue.use(Router)
export default new Router({
  routes: [
     {
      path: '/login',
      component: Login,
        children: [
        {
          path: '/login',
          name: 'Loginint',
          component: Loginint,
          meta:{
             title:"登录"
          }
        }]
     },
     {
      path: '/main',
      name: '首页',
      meta: {
        requireAuth: true,
        title:"首页"
      },
      component: Main,
      children:[
         { path: '/list1', component: list1, name: "选项1",  meta: {requireAuth: true,title:"list1"} },
         { path: '/list5/add', component: list5, name: '添加',  meta: {requireAuth: true,title:"添加"} },
         { path: '/list5/edit', component: list5, name: '修改',  meta: {requireAuth: true,title:"修改",isEdit:true} },
         { path: '/list3', component: list3, name: '列表3',  meta: {requireAuth: true, title:"list3"} },
         { path: '/list2', component: list2, name: '列表2',  meta: {requireAuth: true, title:"list2"} },
         { path: '/list6', component: list6, name: '列表6',  meta: {requireAuth: true, title:"list2"} },
         { path: '/list4', component: list4, name: '列表4',  meta: {requireAuth: true, title:"list4"} },
         { path: '/stafflist', component: Stafflist, name: '员工列表',  meta: {requireAuth: true, title:"员工列表"} },
         { path: '/staffadd', component: Staffadd, name: '员工添加',  meta: {requireAuth: true, title:"员工添加"} },
         { path: '/permiconfig', component: Permiconfig, name: '权限配置',  meta: {requireAuth: true, title:"权限配置"} },
         { path: '/productlist', component: Productlist, name: '产品列表',  meta: {requireAuth: true, title:"产品列表"} },
         { path: '/productadd', component: ProductaddEdit, name: '产品添加',  meta: {requireAuth: true, title:"产品添加"} },
         { path: '/productedit', component: ProductaddEdit, name: '产品编辑',  meta: {requireAuth: true, title:"产品编辑",isEdit:true} },
         { path: '/assetslist', component: Assetslist, name: '资产列表',  meta: {requireAuth: true, title:"资产列表"} },
         { path: '/assetsadd', component: Assetsadd, name: '资产添加',  meta: {requireAuth: true, title:"资产添加"} },
         { path: '/404', name: '404', meta: {requireAuth: true,title:"404"},component: err404},
         { path: '/main', name: '主頁', meta: {requireAuth: true,title:"home"},component: Home}
      ]
    },
    {
      path: '/',
      redirect:"/main"
    },
   
    {
      path: '*',
      redirect:"/404"
    }
  ]
  
});
