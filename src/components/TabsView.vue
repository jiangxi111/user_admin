<template>
  <div class='tabs-view-container'>
    <!-- <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path"> -->
    <router-link class="tabs-view" v-for="tag in list" :to="tag.path" :key="tag.path">
      <el-tag :closable="true" @close='closeViewTabs(tag,$event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          listTab:[],
          list:[],
          obj: new Object()
        }
      },
      // computed: {
      //   visitedViews() {
      //     // this.list=this.Commoncode.sessionGet("navlist");
      //     return this.$store.state.app.visitedViews.slice(-10)
      //   }
      // },
      mounted(){
        this.visitedViews()
      },
      methods: {
        visitedViews() {
          var navlist=this.Commoncode.sessionGet("navlist");
          if(navlist){
            this.list=navlist;
          }
        },
        closeViewTabs(view, $event) {
          // this.$store.dispatch('delVisitedViews', view)
         this.eachlist(1,view);
         this.Commoncode.sessionSet("navlist",this.list);
          $event.preventDefault()
        },
        addViewTabs() {

          // this.$store.dispatch('addVisitedViews', this.$route.matched[this.$route.matched.length - 1])
          // console.log(this.$route.matched[this.$route.matched.length - 1])
          // this.Commoncode.sessionSet ,sessionGet
         // this.list.push(this.$route.matched[this.$route.matched.length - 1])
          this.obj.name=this.$route.matched[this.$route.matched.length - 1].name
          this.obj.path=this.$route.matched[this.$route.matched.length - 1].path
          // console.log(this.list.length);
          var k={
            name:this.obj.name,
            path:this.obj.path
          };
          if(!this.eachlist(2,k)){
            this.list.push(k);
          }
          this.Commoncode.sessionSet("navlist",this.list);
          // console.log(JSON.stringify(this.list).indexOf(JSON.stringify(this.obj)))
          //if(this.list.includes(this.obj)) return;
          
          //console.log(this.list)
         // this.Commoncode.sessionSet("addVisitedViews",this.list)
         // this.listTab = this.Commoncode.sessionGet("addVisitedViews")
         // console.log(this.listTab)
          // if (state.visitedViews.includes(view)) return
          //  state.visitedViews.push(view)
        },
        eachlist(key,k){
              if(key==2){if(this.list.length==0){ return false;}}
             for(let i=0;i<this.list.length;i++){
              if(this.list[i].name==k.name&&this.list[i].path==k.path){
                if(key==1){
                  this.list.splice(i, 1);
                }else if(key==2){
                  return true;
                }
              }
            }
            return false;
        }
      },
      watch: {
        $route() {
          this.addViewTabs()
        }
      }
    }
</script>

<style  scoped>
  .tabs-view-container{
    display: inline-block;
    margin-left: 10px;
    float: left;
    margin-top: 13px;
  }
    .tabs-view{
      margin-left: 10px;
    }
  

</style>
