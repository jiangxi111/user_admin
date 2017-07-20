<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="/list1">
            <template slot="title"><i class="el-icon-message"></i>一级导航</template>
            <router-link to="/list1"><el-menu-item index="/list1" class='menu-indent'>选项1</el-menu-item></router-link>
            <router-link to="/list5/add"><el-menu-item index="/list5/add" class='menu-indent'>选项5</el-menu-item></router-link>
          <el-submenu index="/list2">
              <template slot="title">二级导航</template>
              <router-link to="/list2"><el-menu-item index="/list2" class='menu-indent'>选项2</el-menu-item></router-link>
              <router-link to="/list6"><el-menu-item index="/list6" class='menu-indent'>选项6</el-menu-item></router-link>
          </el-submenu>
      </el-submenu>
       <router-link to="/list3"><el-menu-item index="/list3"><i class="el-icon-menu"></i>导航二</el-menu-item></router-link>
       <router-link to="/list4"><el-menu-item index="/list4"><i class="el-icon-setting"></i>导航三</el-menu-item></router-link>

        <el-submenu index="/stafflist11">
          <template slot="title"><i class="el-icon-message"></i>系统管理</template>
          <el-submenu index="/stafflist">
              <template slot="title" >员工管理</template>
              <router-link to="/stafflist"><el-menu-item index="/stafflist" class='menu-indent'>员工权限</el-menu-item></router-link>
              <router-link to="/staffadd"><el-menu-item index="/staffadd" class='menu-indent'>添加员工</el-menu-item></router-link>
          </el-submenu>
       </el-submenu>
      <el-submenu index="/productlist">
          <template slot="title" ><i class="el-icon-time"></i>产品管理</template>
          <router-link to="/productlist"><el-menu-item index="/productlist" class='menu-indent'>产品列表</el-menu-item></router-link>
          <router-link to="/productadd"><el-menu-item index="/productadd" class='menu-indent'>产品添加</el-menu-item></router-link>
          <router-link to="/assetslist"><el-menu-item index="/assetslist" class='menu-indent'>资产列表</el-menu-item></router-link>
           <router-link to="/assetsadd"><el-menu-item index="/assetsadd" class='menu-indent'>资产添加</el-menu-item></router-link>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
   methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
   .el-menu-item a{
    color: #fff;
   }
   .el-menu li i{
   
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
 

</style>
