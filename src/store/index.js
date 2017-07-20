import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import app from './modules/app';
import getters from './getters';


export default new Vuex.Store({
	modules:{
		app
	},
	getters
})