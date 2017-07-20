
import {SHOWLOADING,HIDELOADING} from "./types"
import getters from "./getters.js"

const state ={
	loading:false,
};
const mutations={
	[SHOWLOADING](state){
		state.loading= true;
	},
	[HIDELOADING](state){
		state.loading= false;
	}
	
}

export default{
	state,
	mutations,
	getters
}