<template>
	<div>
		<table class="table table-border table-bordered table-bg table-hover el-table">
			<thead>
				<tr class="text-c">
					<th width="45"><el-checkbox>全选</el-checkbox><span class="caret-wrapper"></span></th>
					<th width="80" :class="{ascending:ascstate,descending:descstate}">ID
						<span class="caret-wrapper">
							<i class="sort-caret ascending" @click="sort('id','asc')"></i>
							<i class="sort-caret descending" @click="sort('id','desc')"></i>
						</span>
					</th>
					<th width="80" :class="{ascending:ascstate,descending:descstate}">标题
						<span class="caret-wrapper">
							<i class="sort-caret ascending" @click="sort('title','asc')"></i>
							<i class="sort-caret descending" @click="sort('title','desc')"></i>
						</span>
					</th>
					<th width="80">分类
						<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span>
					</th>
					<th width="80">来源
						<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span>
					</th>
					<th width="190">更新时间
						<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span>
					</th>
					<th width="75">浏览次数
						<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span>
					</th>
					<th width="100">发布状态
						<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span>
					</th>
					<th width="120">操作<span class="caret-wrapper"></span></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> <el-checkbox ></el-checkbox></td>
					<td>10002</td>
					<td class="text-l">资讯标题</td>
					<td>行业动态</td>
					<td>H-ui</td>
					<td>2014-6-11 11:11:42</td>
					<td>21212</td>
					<td><span class="label label-success radius">草稿</span></td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<div class="paginatestyle">
		  <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-sizes="[20, 40, 60, 80]"
		      :page-size="pagesize"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="total">
		    </el-pagination>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
		        currentPage: 1,//当前页
		        total:400,//总页数
		        pagesize:20,//每页个数
				ascstate:false,
				descstate:false
			}
		},
		methods:{
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		      },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		      },
			sort(name,style){
				if(style=="asc"){
					this.ascstate=true;
					this.descstate=false;
				}
				if(style=="desc"){
					this.ascstate=false;
					this.descstate=true;
				}
			}
		},
		mouted(){

		}
	}
</script>