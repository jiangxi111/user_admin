const app = {
	 state:{
	    loading:false,
	    sidebar: {
	      opened: !+$.cookie('sidebarStatus')
	    },
	    visitedViews: []
	},
    mutations:{
		SHOWLOADING:(state)=>{
			state.loading= true;
		},
		HIDELOADING:(state)=>{
			state.loading= false;
		},
	    TOGGLE_SIDEBAR: state => {
	      if (state.sidebar.opened) {
	        $.cookie('sidebarStatus', 1);
	      } else {
	        $.cookie('sidebarStatus', 0);
	      }
	      state.sidebar.opened = !state.sidebar.opened;
	    },
	    ADD_VISITED_VIEWS: (state, view) => {
	      if (state.visitedViews.includes(view)) return
	      state.visitedViews.push(view)
	    },
	    DEL_VISITED_VIEWS: (state, view) => {
	      const index = state.visitedViews.indexOf(view)
	      state.visitedViews.splice(index, 1)
	    }
		
	},
	actions:{
		showLoading:({
		commit
		})=>{
			commit("SHOWLOADING")
		},
		hideLoading:({
			commit
		})=>{
			commit("HIDELOADING")
		},
		ToggleSideBar: ({ commit }) => {
	      commit('TOGGLE_SIDEBAR')
	    },
	    addVisitedViews: ({ commit }, view) => {
	      commit('ADD_VISITED_VIEWS', view)
	    },
	    delVisitedViews: ({ commit }, view) => {
	      commit('DEL_VISITED_VIEWS', view)
	    }
	}
}

export default app;