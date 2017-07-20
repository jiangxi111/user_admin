<template>
  <div id="main" :class="{hideSidebar:!sidebar.opened}"> 
          <Load v-show="getLoading"></Load>
          <div id="navbox"><Navleft id="navleft"></Navleft></div>
        	<Maincontent></Maincontent> 
  </div>
</template>

<script>
import Navleft from  "./Navleft.vue";
import Load from './Loading.vue';
import Maincontent from  "./Maincontent.vue";
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'main',
  components:{
    Load,
    Navleft,
    Maincontent
  },
  computed:{
    ...mapGetters([
      'getLoading'
    ]),
    sidebar() {
          return this.$store.state.app.sidebar;
        }
  }
}

</script>

<style>
  #main{
      position: relative;
    height: 100%;
    width: 100%;
  }
.hideSidebar #navbox{
      transform: translate(-140px, 0);
  }
.hideSidebar #navleft {
          transform: translate(132px, 0);
}
.hideSidebar #maincontent{
  margin-left: 40px;
}


.hideSidebar #navbox:hover,.hideSidebar #navleft:hover {
        transform: translate(0, 0);
       
    }


  #navleft ul{
    height: 100%;
  }
  #navbox {
            width: 180px;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 1001;
            overflow: hidden;
            transition: all .28s ease-out;
        }
          #navleft {
            transition: all .28s ease-out;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: -17px;
            overflow-y: scroll;
        }
  #maincontent {
            min-height: 100%;
            transition: all .28s ease-out;
            margin-left: 180px;
            position: relative;
            height: 100%;
            
        }
</style>
