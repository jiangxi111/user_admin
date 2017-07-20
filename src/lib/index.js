import Vue from 'vue'
import $ from 'jquery'
// import 'static/js/bootstrap-3.3.7/css/bootstrap.min.css'最好不用和elementui样式冲突
// import 'static/js/bootstrap-3.3.7/js/bootstrap.min.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import  filters from 'assets//js/custom/customFiler.js'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))//过滤器循环
import 'assets/js/custom/customDirective.js'
import cookie from 'static/js/jquery.cookie.js' //cookie插件
import jplay from 'jplayer'
import store from '@/store/index.js'
import axios from 'axios'
import router from '@/router'
import querystring  from 'querystring';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import * as Commoncode from "assets/js/custom/customCode.js"  //公共方法
var echarts = require('echarts');
Vue.prototype.echarts = echarts;
Vue.prototype.Commoncode=Commoncode//js原型继承 子组件才能使用
Vue.use(jplay);
Vue.use(Element);
export{
	$,
	cookie,
	store,
	axios,
	router,
	Vue,
	querystring,
	NProgress,
	Commoncode
}