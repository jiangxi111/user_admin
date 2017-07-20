<template>
<div style="width:100%;">
  <el-table
    :max-height="230|getHeightBody"
    :data="list"
    border
    tooltip-effect="dark"
    style="width: 100%">
     <el-table-column
      type="index"
      align="center"
      fixed="left"
      label="序号"
      width="">
    </el-table-column>
    
    <el-table-column
      prop ="title"
      label="员工号"
       align="center"
      show-overflow-tooltip
      width=""
      :formatter="formatter"
     >
    </el-table-column>
    <el-table-column
      prop="ctime"
       align="center"
      label="用户名"
      width=""
       header-align="center"
       show-overflow-tooltip
     >
    </el-table-column>
    <el-table-column
     align="center"
      prop="cat_name"
      label="手机号"
      width=""
      >
    </el-table-column>
    <el-table-column
     align="center"
      fixed="right"
      label="操作"
      width="400">
      <template scope="scope">
      	<el-button  type="info" size="small">离职</el-button>
        <router-link to="/permiconfig"><el-button type="success" size="small" >权限配置</el-button></router-link>
        <el-button type="warning" size="small">重置密码</el-button>
        <el-button type="danger" size="small"  @click="del(scope.row.aid)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="paginatestyle">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
    </div>
</div>
</template>

<script>
  export default {
    mounted(){
       this.getlist();
    },
    methods: {
      del(id){
      	   this.$confirm('您确定删除此员工吗, 是否继续?', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
	          alert(id)
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	          this.getlist();
	        }).catch(() => {
	          this.$message({
	            type: 'info',
	            message: '已取消删除'
	          });          
	        });
	       
      },
      handleSizeChange(val) {
            this.pagesize=val
            this.getlist()
            console.log(`每页 ${val} 条`);
        },
      handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
      getlist(){
          this.$http.post('https://yq.aliyun.com/api/getArticles',
            {
                teamid:61,
                size:this.pagesize
            })
            .then((res)  => {
              this.list=res.data.data
            })
            .catch((error) => {
            alert('网络延迟。。。');
            });
      },

      formatter(row, column) {
        return row.title
        // return this.Commoncode.parseTime(row[column.property],'{y}-{m}-{d} {h}:{i}');
      }
    },

    data() {
      return {
        listselect:[],
        currentPage: 1,//当前页
        total:300,//总页数
        pagesize:10,//每页个数
        list:[]
      }
    }
  }
</script>
