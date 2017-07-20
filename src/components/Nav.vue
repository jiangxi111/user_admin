<template>
  <div id="meonnav">
  <el-row>
  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger> 
        <levelbar></levelbar>
         <tabs-view></tabs-view>
        <div class="rightmar">
             <Screenfull1 class='Screenfull1'></Screenfull1>
             <div class="down">
              <el-dropdown class="san">
                <span class="el-dropdown-link">
                  <img src="../../static/images/user.gif" height="500" width="500" class="user">
                  <i class="el-icon-caret-bottom el-icon--right useri"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item ><router-link to="/" class="backhome">首页</router-link></el-dropdown-item>
                  <el-dropdown-item @click.native="logins">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
        </div>
    </div>
    </el-col>
</el-row>


  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Screenfull1 from './Screenfull1.vue';
import Hamburger from './Hamburger';
import Levelbar from './Levelbar';
import TabsView from './TabsView';
export default {
  name: 'nav',
  components:{
    Screenfull1,
    Hamburger,
    Levelbar,
    TabsView
  },
  computed: {
        ...mapGetters([
          'sidebar',
        ])
      },
  methods:{
    toggleSideBar() {
          this.$store.dispatch('ToggleSideBar')
        },
    clearCookie(){
        $.cookie("token",null);
        $.cookie("sidebarStatus",null);
    },
  	logins(){
  		this.clearCookie();
  		this.$router.push({path:'/login'});
      location.reload();// 为了重新实例化vue-router对象 避免bug
  	}
  }
}
</script>

<style scoped>
.san{
  top: -5px;
}
.backhome{
  display: block;
  width: 100%;
}
.hideSidebar #meonnav{
   left: 40px;
   
}
#meonnav{
  width: 100%;
  position: fixed;
  top: 0px;
  left: 180px;
  transition: all .28s ease-out;
  z-index: 1000;
}
.mrg{
  margin-left: 10px;
}
.bg-purple-dark {
    background: #e5e9f2;
    height: 50px;
}
.rightmar{
  position: absolute;
     right: 200px;
     top: 13px;
}
.Screenfull1{
     float: left;
     margin-right: 15px;
     margin-top: 3px;
  }
.down{
    float: left;
}
.user{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: block;
  float: left;
}
.useri{
  display: block;
  float: left;
  margin-top: 10px;
}
 .aclick{
 	cursor: pointer;
 	font-size: 20px;
 	color: #f00;
 }
</style>
