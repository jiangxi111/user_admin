const getters = {
  getLoading:(state) =>{
  	return state.app.loading;
  },
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
};

export default getters
