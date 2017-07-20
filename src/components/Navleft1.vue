<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>一级导航</template>
        
          <router-link to="/components/list1"><el-menu-item :index="$route.path" class='menu-indent'>选项1</el-menu-item></router-link>
           <router-link to="/components/list5"><el-menu-item index="1-2" class='menu-indent'>选项5</el-menu-item></router-link>
        <el-submenu index="1-4">
          <template slot="title">二级导航</template>
          <router-link to="/components/table/list2"><el-menu-item index="1-3" class='menu-indent'>选项2</el-menu-item></router-link>
          <router-link to="/components/table/list6"><el-menu-item index="1-4" class='menu-indent'>选项6</el-menu-item></router-link>
        </el-submenu>
      </el-submenu>
       <router-link to="/theme/list3"><el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item></router-link>
       <router-link to="/style/list4"><el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item></router-link>
    </el-menu>


  
  </div>
</template>

<script>
export default {
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
   .el-menu-item a{
    color: #fff;
   }
   .el-menu li i{
    padding-right: 10px;
   }
   .el-menu-item a:hover{
    text-decoration: none;
   }
   .hideSidebar .menu-indent{
        display: block;
        text-indent: 10px;
    }
    .menu-indent{
     
    }
    .el-submenu__title{
      text-indent: 100px;
    }
</style>
