<template>
<div style="width:100%;">
  <el-row :gutter="20">
    <el-col :span="1" :offset="21"><el-button type="danger" @click="handleDownload()">导出</el-button></el-col>
    <el-col :span="1" ><router-link to="/list5/add"><el-button type="success" >添加</el-button></router-link></el-col>
  </el-row>
  <el-table
    :max-height="230|getHeightBody"
    @select-all="selectAll"
    @select = "select"
    :data="list"
    @sort-change="sortChange"
    border
    tooltip-effect="dark"
    style="width: 100%">
     <el-table-column
      type="selection"
      :fixed="true"
      width="55">
    </el-table-column>
      <el-table-column
      type="index"
      fixed="left"
      label="序号"
      width="100">
    </el-table-column>
    
    <el-table-column
      prop ="title"
      label="标题"
       align="center"
      show-overflow-tooltip
      width="300"
      sortable="custom"
       :formatter="formatter"
     >
    </el-table-column>
    <el-table-column
      prop="ctime"
      label="时间"
      width="200"
       header-align="center"
       show-overflow-tooltip
      sortable="custom"
     >
    </el-table-column>
    <el-table-column
      prop="cat_name"
      label="名称"
      sortable="custom"
      >
     
    </el-table-column>
    <el-table-column
      prop="read_num"
      label="浏览数"
      >
    </el-table-column>
    <el-table-column
      prop="vote_num"
      label="点击数"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template scope="scope">
        <router-link to="/list5/edit"><el-button type="success" size="mini" >修改</el-button></router-link>
        <el-button type="warning" size="mini" @click="del(scope.row)">删除</el-button>
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
      del(item){
        this.list.splice(item,1)
        //this.getlist();
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
      select(selection,row){
          this.listselect=selection;
          console.log(this.listselect)
      },
      selectAll(selection){
        this.listselect=selection;
        console.log(this.listselect)
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
