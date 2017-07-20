// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {$,cookie,store,axios,router,querystring,NProgress,Vue,Commoncode
} from './lib/index.js'
import App from './App'
router.beforeEach((to,from,next)=>{
  NProgress.start();
  document.title=to.meta.title;
  if (to.matched.some(record => record.meta.requireAuth)) {
      if (!$.cookie("token")||$.cookie("token")==null||$.cookie("token")=="null") {//token不存在
         next({path:"/login"})
         NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
      } 
      else {//token存在
        next()
      }
  }else{
   // next();
    if (!$.cookie("token")||$.cookie("token")==null||$.cookie("token")=="null"){
        next();
    }
    else{
        if(to.path=="/login"){
          next({path:"/main"});
        }
    }
  }
});
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

//=======axios配置=========
axios.defaults.timeout = 5000;//响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  
// axios.defaults.baseURL = 'https://yq.aliyun.com/api';   //配置接口地址
Vue.prototype.$http = axios;//把axios对象挂在Vue原型上
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  config.data = querystring.stringify(config.data);
  //在发送请求之前做某件事
     if ($.cookie("token")) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            // config.headers.Authorization = $.cookie("token");
       }
     store.dispatch('showLoading');
    return config;
},(error) =>{
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  store.dispatch('hideLoading');
    return res;
}, (error) => {

  store.dispatch('hideLoading');
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 返回 401 清除token信息并跳转到登录页面
                $.cookie("token",null);
                router.replace({
                    path: '/login'
                })
        }
    }
    return Promise.reject(error);
});

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
});