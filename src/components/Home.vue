<template>
	<div>
		<el-row>
		  <el-col :span="9" :offset="3">
		  		<div id="main1" class="myChart"></div>
		  </el-col>
		  <el-col :span="9">
		  		<div id="main2" class="myChart"></div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="9" :offset="3">
		  		<div id="main3" class="myChart"></div>
		  </el-col>
		  <el-col :span="9">
		  		<div id="main4" class="myChart"></div>
		  </el-col>
		</el-row>
		
	</div>
</template>
<script>
	export default{
		mounted(){
			this.getmyChart1();
			this.getmyChart2();
			this.getmyChart3();
			this.getmyChart4();
		},
		methods:{
			getmyChart4(){
					// 基于准备好的dom，初始化echarts实例
				var myChart = this.echarts.init(document.getElementById('main4'));
				// 绘制图表
				this.$nextTick(()=>{
					  myChart.setOption({    title: {
					        text: '折线图堆叠'
					    },
					    tooltip: {
					        trigger: 'axis'
					    },
					    legend: {
					        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    toolbox: {
					        feature: {
					            saveAsImage: {}
					        }
					    },
					    xAxis: {
					        type: 'category',
					        boundaryGap: false,
					        data: ['周一','周二','周三','周四','周五','周六','周日']
					    },
					    yAxis: {
					        type: 'value'
					    },
					    series: [
					        {
					            name:'邮件营销',
					            type:'line',
					            stack: '总量',
					            data:[120, 132, 101, 134, 90, 230, 210]
					        },
					        {
					            name:'联盟广告',
					            type:'line',
					            stack: '总量',
					            data:[220, 182, 191, 234, 290, 330, 310]
					        },
					        {
					            name:'视频广告',
					            type:'line',
					            stack: '总量',
					            data:[150, 232, 201, 154, 190, 330, 410]
					        },
					        {
					            name:'直接访问',
					            type:'line',
					            stack: '总量',
					            data:[320, 332, 301, 334, 390, 330, 320]
					        },
					        {
					            name:'搜索引擎',
					            type:'line',
					            stack: '总量',
					            data:[820, 932, 901, 934, 1290, 1330, 1320]
					        }
					    ]
				});
				})
			},
			getmyChart3(){
					// 基于准备好的dom，初始化echarts实例
				var myChart = this.echarts.init(document.getElementById('main3'));
				// 绘制图表
				this.$nextTick(()=>{
									myChart.setOption({title : {
				        text: '某站点用户访问来源',
				        subtext: '纯属虚构',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series : [
				        {
				            name: '访问来源',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ],
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				});
				})
			},
			getmyChart2(){
					// 基于准备好的dom，初始化echarts实例
				var myChart = this.echarts.init(document.getElementById('main2'));
				// 绘制图表
				this.$nextTick(()=>{
					myChart.setOption({
				    title: {
				        text: '对数轴示例',
				        left: 'center'
				    },
				    tooltip: {
				        trigger: 'item',
				        formatter: '{a} <br/>{b} : {c}'
				    },
				    legend: {
				        left: 'left',
				        data: ['2的指数', '3的指数']
				    },
				    xAxis: {
				        type: 'category',
				        name: 'x',
				        splitLine: {show: false},
				        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    yAxis: {
				        type: 'log',
				        name: 'y'
				    },
				    series: [
				        {
				            name: '3的指数',
				            type: 'line',
				            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
				        },
				        {
				            name: '2的指数',
				            type: 'line',
				            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
				        },
				        {
				            name: '1/2的指数',
				            type: 'line',
				            data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
				        }
				    ]
				});
				})
			},
			getmyChart1(){
				// 基于准备好的dom，初始化echarts实例
				var myChart = this.echarts.init(document.getElementById('main1'));
				// 绘制图表
				this.$nextTick(()=>{
					myChart.setOption({
				    title: { text: '案例1' },
				    tooltip: {},
				    xAxis: {
				        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
				    },
				    yAxis: {

				    },
				    series: [{
				        name: '销量',
				        type: 'bar',
				        data: [5, 20, 36, 10, 10, 20]
				    }]
				});
				})
			}
		}
	}
</script>
<style scoped>
	.myChart{
		width: 500px;
		height: 500px;
		padding-bottom: 30px;
	}
</style>