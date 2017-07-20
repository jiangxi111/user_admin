<template>
  <div id="maincontent" >
  <Meonnav></Meonnav>
  <div id="viewbox">
	   <router-view ></router-view>
  </div>
  </div>
</template>

<script>
import Meonnav from  "./Nav.vue";
export default {
  name: 'maincontent',
  components:{
    Meonnav
  },

  data(){
    return {
      list:[]
    }
  },
  methods:{
    axiosList(){
      this.$http('https://yq.aliyun.com/api/getArticles',{
              teamid:61,
              size:2
          })
       .then((res)  => {
        this.list=res.data;
      })
// .then(res=>this.list=res;console.log(1);console.log(list);console.log(2);).catch(err=>console.log(3);)
    }
  },
  mounted(){
     this.axiosList();
  }
}



</script>

<style scoped>

  #viewbox{
    width: 98%;
    height: 90%;
    overflow-y:auto;
    overflow-x:hidden;
    margin: 70px auto 0px;
  }
</style>
