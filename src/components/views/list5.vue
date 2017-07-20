
<template>
	<div>

		<el-form ref="form" :model="form" label-width="80px" >
  <el-form-item label="标题" prop="title">
    <el-input v-model="form.title"></el-input>
  </el-form-item>

  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="datetime" placeholder="时间" v-model="form.ctime" style="width: 100%;"></el-date-picker>
    </el-col>
 <!--    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col> -->
  </el-form-item>
  <el-form-item label="名称">
    <el-input v-model="form.cat_name"></el-input>
  </el-form-item>
   <el-form-item label="浏览数">
    <el-input v-model="form.read_num"></el-input>
  </el-form-item>
   <el-form-item label="点击数">
    <el-input v-model="form.vote_num"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="quxiao">取消</el-button>
  </el-form-item>
</el-form>
<div class="dianji">ssss</div>
	</div>
</template>

<script>
  $(function(){
    $(".dianji").on('click', function(event) {
      event.preventDefault();
      alert($(this).html())
    });
  })
  export default {
    data() {
      return {
        form: {
          title: '',
          ctime: '',
          cat_name: '',
          read_num: '',
          vote_num: ''
        }
      }
    },
    mounted(){
      if(this.isEdit){
         this.getdata();
      }
    },
    computed:{
      isEdit(){
        return this.$route.meta.isEdit
      }
    },
    methods: {
      getdata(){
        this.$http.post('https://yq.aliyun.com/api/getArticles',
            {
                teamid:61,
                size:1
            })
            .then((res)  => {
              this.form=res.data.data[0]
            })
            .catch((error) => {
            alert('网络延迟。。。');
            });
      },
      onSubmit() {
        console.log('submit!');
      },
      quxiao(){
        this.form={}
      }
    }
  }
</script>