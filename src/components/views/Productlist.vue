<template>
<div style="width:100%;">
  <el-row :gutter="20">
    <el-col :span="10" :offset="0"><el-input v-model="search" placeholder="输入编号或名称"></el-input></el-col>
    <el-col :span="4"><el-button type="primary">查询</el-button></el-col>
  </el-row>
  <el-table
    :max-height="230|getHeightBody"
    :data="list"
    @sort-change="sortChange"
    border
    tooltip-effect="dark"
    style="width: 100%">
      <el-table-column
      type="index"
      fixed="left"
      label="序号"
       align="center"
       width="70"
      >
    </el-table-column>
    
    <el-table-column
      prop ="title"
      label="编号"
       align="center"
      show-overflow-tooltip
      
      sortable="custom"
       :formatter="formatter"
     >
    </el-table-column>
    <el-table-column
      prop="ctime"
      label="产品名称"
     
       header-align="center"
       show-overflow-tooltip
      sortable="custom"
     >
    </el-table-column>
    <el-table-column
      prop="cat_name"
      label="年利率"
      sortable="custom"
      >
     
    </el-table-column>
    <el-table-column
      prop="read_num"
      label="加息"
      >
    </el-table-column>
    <el-table-column
      prop="vote_num"
      label="融资金额"
      show-overflow-tooltip
      >
    </el-table-column>
     <el-table-column
      prop="vote_num"
      label="发布时间"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      prop="vote_num"
      label="状态"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      prop="vote_num"
      label="类型"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300"
       align="center"
       >
      <template scope="scope">
        <router-link to="/productedit"><el-button type="success" size="small" >修改</el-button></router-link>
        <el-button type="warning" size="small" @click="copy(scope.row)">复制</el-button>
        <el-button type="primary" :disabled="true" size="small">已发布</el-button>
        <el-button type="primary" :disabled="true" size="small">已审核</el-button>
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
    <el-dialog
	  title="提示"
	  :visible.sync="dialogVisible"
	  size="tiny"
	  >
		<el-input v-model="password" auto-complete="off"></el-input>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">取 消</el-button>
	    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
	  </span>
	</el-dialog>
</div>
</template>

<script>
  export default {
    mounted(){
       this.getlist();
    },
    methods: {
      handleDownload() {
         if(this.listselect.length===0){
          alert("请选择导出列表")
          return
         }
          require.ensure([], () => {
            const { export_json_to_excel } = require('@/assets/vendor/Export2Excel');
            const tHeader = ['标题', '时间', '名称','浏览数', '点击数'];
            const filterVal = ['title', 'ctime', 'cat_name', 'read_num', 'vote_num'];
            const list = this.list;
            const data = this.formatJson(filterVal, this.listselect);
            export_json_to_excel(tHeader, data, '列表excel');
          })
        },
        formatJson(filterVal, jsonData) {
          return jsonData.map(v => filterVal.map(j => v[j]))
        },
      copy(item){
      	 this.password=item.aid
         this.dialogVisible = true;
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
      sortChange(obj){
        console.log(obj)
      },

      formatter(row, column) {
        return row.title
        // return this.Commoncode.parseTime(row[column.property],'{y}-{m}-{d} {h}:{i}');
      }
    },

    data() {
      return {
      	password:"",
      	dialogVisible: false,
      	search:"",
        listselect:[],
        currentPage: 1,//当前页
        total:300,//总页数
        pagesize:10,//每页个数
        list:[],
        tableData: [{
          id:1,
          date: '2134209422',
          name: '王小虎sfsfs',
          province: '上海',
          city: '普陀区',
          address: '普陀区金沙江路 1518 弄'
        },
        {
          id:2,
          date: '2423987322',
          name: '王sdsdsdf小虎',
          province: '上海',
          city: '普陀区',
          address: '海市普陀区金沙江路 1518 弄'
        },
        {
          id:3,
          date: '111112323222',
          name: '王小虎fsfs',
          province: '上海',
          city: '普陀区',
          address: '沙江路 1518 弄'
        }]
      }
    }
  }
</script>
