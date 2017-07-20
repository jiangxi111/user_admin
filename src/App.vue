<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
  	getHide(){
  	
    }
  },
  mounted(){
    this.getHide();
  }
}
</script>

<style>
  @import "./assets/css/style.css";
 #app{
  height: 100%;
 }
</style>
