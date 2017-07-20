<template>
<div style="width:100%">
  <el-table
    :data="tableData"
    @sort-change="sortChange"
    border
    max-height="300"
    tooltip-effect="dark"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      show-overflow-tooltip
      fixed
      width="100"
      sortable="custom"
       :formatter="formatter"
     >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="100"
       show-overflow-tooltip
      sortable="custom"
     >
     <template scope="scope">{{scope.row.name | tianjia}}</template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      >
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip
      >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      show-overflow-tooltip
     >
    </el-table-column>
    <el-table-column
      prop="a"
      label="a"
     >
    </el-table-column>
    <el-table-column
      prop="b"
      label="b"
     > </el-table-column>
    </el-table-column>
    <el-table-column
      prop="c"
      label="c"
     > </el-table-column>
    </el-table-column>
    <el-table-column
      prop="d"
      label="d"
     > </el-table-column>
     <el-table-column
      prop="e"
      label="e"
     > </el-table-column>
     <el-table-column
      prop="f"
      label="f"
     >
     </el-table-column>
   
   
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template scope="scope">
        <el-button type="success" size="mini">添加</el-button>
        <el-button type="warning" size="mini">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  {{111 | parseTime('{y}-{m}-{d} {h}:{i}')}}
</div>
</template>

<script>
  export default {
    methods: {
      sortChange(obj){
        console.log(obj)
      },
      handleClick() {
        console.log(1);
      },

      formatter(row, column) {
        return this.Commoncode.parseTime(row[column.property],'{y}-{m}-{d} {h}:{i}');
      }
    },

    data() {
      return {
        tableData: [{
          date: '2134209422',
          name: '王小虎sfsfs',
          province: '上海',
          city: '普陀区',
          address: '普陀区金沙江路 1518 弄',
          zip: 11111222222222213333333333333,
          a:11,
          b:22,
          c:33,
          d:44,
          e:33333333333333333333,
          f:3211111111111
        },
        {
          date: '2423987322',
          name: '王sdsdsdf小虎',
          province: '上海',
          city: '普陀区',
          address: '海市普陀区金沙江路 1518 弄',
          zip: 11111222222222213333333333333,
          a:11,
          b:22,
          c:33,
          d:44,
          e:33333333333333333333,
          f:3211111111111
        },
        {
          date: '111112323222',
          name: '王小虎fsfs',
          province: '上海',
          city: '普陀区',
          address: '沙江路 1518 弄',
          zip: 11111222222222213333333333333,
          a:11,
          b:22,
          c:33,
          d:44,
          e:33333333333333333333,
          f:3211111111111
        }]
      }
    }
  }
</script>
