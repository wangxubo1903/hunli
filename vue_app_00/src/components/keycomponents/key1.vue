<template>
  <div class="box">
  
    <cebian :cesuo="cesuo" v-on:fun="change" :class="cesuo==1?'suojin':''"></cebian>
    <!--搜索框-->
   <div class="k_sou"><div  @click="suochu"><img width="20rem" src="../../assets/cebianlandanchu.png" alt=""></div><input placeholder="搜索" type="text"><span>搜索</span></div>
   <!--除了搜索框所以内容-->
   <div class="body_box">  
   <div> 
    <mt-swipe style="height:10rem;" class="zswipe" :auto="4000">
      <mt-swipe-item v-for="(item,i) of arr" :key="i" class="swipe1"><img width="100%" height="100%" :src="`http://zq666.applinzi.com/img/${item.p_img}`"></mt-swipe-item>
    </mt-swipe>
   </div>

  <div>
    <mt-navbar v-model="selected">
    <mt-tab-item  id="1">前端</mt-tab-item>
    <mt-tab-item @click.native="java" id="2">java</mt-tab-item>
    <mt-tab-item @click.native="C" id="3">C</mt-tab-item>
    <mt-tab-item @click.native="php" id="4">PhP</mt-tab-item>
  </mt-navbar>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
   <ul  class="tiezi">
     <li v-for="(elem,i) of list" :key="i" @click="qian(elem.fid)">
        <div>
         <h4 v-text="elem.f_title"></h4>
         <div v-text="elem.f_content"></div> 
       </div>
       <div>
          <img style="width:100%;height:100%" :src="elem.f_img==null?'http://zq666.applinzi.com/img/tan1.jpg':`http://zq666.applinzi.com/img/${elem.f_img}`">   
       </div>
     </li>
   </ul>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
 <ul class="tiezi">
     <li v-for="(elem,i) of list1" :key="i" @click="javaa(elem.jid)">
        <div>
         <h4 v-text="elem.j_title"></h4>
         <div v-text="elem.j_content"></div> 
       </div>
       <div>
          <img style="width:100%;height:100%" :src="elem.j_img==null? 'http://zq666.applinzi.com/img/java1.jpg': `http://zq666.applinzi.com/img/${elem.j_img}`">   
       </div>
     </li>
   </ul>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
 <ul class="tiezi">
     <li v-for="(elem,i) of list2" :key="i" @click="cc(elem.cid)">
        <div>
         <h4 v-text="elem.c_title"></h4>
         <div v-text="elem.c_content"></div> 
       </div>
       <div>
          <img style="width:100%;height:100%" :src="elem.c_img==null? 'http://zq666.applinzi.com/img/c1.jpg':`http://zq666.applinzi.com/img/${elem.c_img}`">   
       </div>
     </li>
   </ul>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
 <ul  class="tiezi">
     <li v-for="(elem,i) of list3" :key="i" @click="phpp(elem.pid)">
        <div>
         <h4 v-text="elem.p_title"></h4>
         <div v-text="elem.p_content"></div> 
       </div>
       <div>
          <img style="width:100%;height:100%" :src="elem.p_img==null? 'http://zq666.applinzi.com/img/php1.jpg':`http://zq666.applinzi.com/img/${elem.p_img}`">   
       </div>
     </li>
   </ul>
  </mt-tab-container-item>

</mt-tab-container>
<div class="load" v-show="zhuan==1"><span v-show="jiazai=='加载中...'"></span>&nbsp;&nbsp;{{jiazai}}...</div>
  </div>
  </div>
  </div>       
</template>
<script>
import cebian from '../cicomponents/cebian'
export default {
 data(){
     return{
      zhuan:0,
   jiazai:"加载中...",
    selected:"1",
    cesuo:1,
    pno:1,
    pno1:1,
    pno2:1,
    pno3:1,
    ps:6,
    arr:[],
    list:[],
    list1:[],
    list2:[],
    list3:[], 
    dao:0,
    open:true
     }
  },
  methods:{
    suochu(){
      this.cesuo=0 
    },
    change(data){
      this.cesuo=data
    },
    qian(oo){     
      this.$router.push({name:'tiezi',params:{fid:oo}})    
      var fid=this.$route.params.fid
      console.log(fid)
      this.axios.get("tie",{params:{fid:fid}}).then(result=>{
             
           sessionStorage.setItem("all",JSON.stringify(result.data[0]))
      })     
    },
    javaa(uu){   
      this.$router.push({name:'tiezi',params:{jid:uu}})
      var jid=this.$route.params.jid
      this.axios.get("tiej",{params:{jid:jid}}).then(result=>{       
      sessionStorage.setItem("all",JSON.stringify(result.data[0]) )        
      })
    },
    cc(ll){
      this.$router.push({name:'tiezi',params:{cid:ll}})
      var cid=this.$route.params.cid
      this.axios.get("tiec",{params:{cid:cid}}).then(result=>{           
      sessionStorage.setItem("all",JSON.stringify(result.data[0]) )     
      })
    },
    phpp(pp){   
      this.$router.push({name:'tiezi',params:{pid:pp}})
      var pid=this.$route.params.pid
      this.axios.get("tiep",{params:{pid:pid}}).then(result=>{        
      sessionStorage.setItem("all",JSON.stringify(result.data[0]) )      
      })
    },

    java(){
      //java接口
      this.axios.get("java",{params:{
        pno:this.pno1,
        ps:this.ps
      }
      }).then(result=>{
        console.log(result.data.data)
        if(result.data.data.length>0){
        var rows=this.list1.concat(result.data.data)
        this.list1=rows
        this.zhuan=0
        }else{
          this.jiazai="到底了"
        }
      })
     },
    web(){
     //前端接口
      this.axios.get("index",{params:{
        pno:this.pno,
        ps:this.ps
        }
      }).then(result=>{
        if(result.data.data.length>0){
        console.log(result.data.data)
        var rows=this.list.concat(result.data.data)
        this.list=rows
        this.zhuan=0
        }else{
          this.jiazai="到底了"
        }
      })
      },
     C(){
       //C语言接口
       this.axios.get("C",{params:{
         pno:this.pno2,
         ps:this.ps
         }
       }).then(result=>{
         if(result.data.data.length>0){
         var rows=this.list2.concat(result.data.data)
        this.list2=rows
        this.zhuan=0
         }else{
           this.jiazai="到底了"
         }
       })
      },
     php(){
        //php接口
         this.axios.get("php",{params:{
         pno:this.pno3,
         ps:this.ps
         }
       }).then(result=>{
           if(result.data.data.length>0){
         var rows=this.list3.concat(result.data.data)
        this.list3=rows
        this.zhuan=0
           }else{
             this.jiazai="到底了"
           }
       })
     },
     scrolldi(){
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      /*判断到底部后执行*/
      var selece=document.getElementsByClassName("h_active")[0]
      if(selece!=undefined){
      if(selece.lastChild.innerHTML=="首页"){
        if(scrollTop + windowHeight == scrollHeight) {       
        /*判断拉到底部加载那个模块的数据*/
          var selected=document.getElementsByClassName("is-selected")[0]        
          if(selected.lastChild.innerHTML=="前端"){
            this.zhuan=1
            this.pno+=1             
            this.web()                      
          }else if(selected.lastChild.innerHTML=="java"){
             this.zhuan=1
             this.pno1+=1            
             this.java()
            
          }else if(selected.lastChild.innerHTML=="C"){
             this.zhuan=1
             this.pno2+=1
             this.C()
          }else if(selected.lastChild.innerHTML=="PhP"){
             this.zhuan=1
             this.pno3+=1         
             this.php()          
          }		
        }else{
           this.jiazai="加载中..."
        }
      }
      }
     },
     scrollon(){
       window.addEventListener("scroll",this.scrolldi)
     },    
     },
  created() {   
      //轮播图接口
      this.axios.get("picture").then(result=>{
        this.arr=result.data
      }),
      //调用web接口
      this.web(),      /*监听滑动*/
      this.scrollon()

  },
  components:{
      cebian,
        } 
}
</script>
<style>
.load{
  text-align: center;
  display: flex;
  justify-content: center;
}
.load>span{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-top:2px solid #808080;
  border-right:2px solid #808080;
  border-radius: 50%;
  animation: zhuan .8s linear infinite;
}
@keyframes zhuan{
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
/*控制侧边栏*/
.suojin>div{
    width: 0% !important;
}
.suojin .cebian>ul>li:not(:nth-child(2)){
  transform: translate(4rem);
  opacity:0;
}
/*tiezi的样式*/
.tiezi>li{
  display: flex;
  justify-content:space-between;
  width: 95%;
  margin:0.3rem auto;
  background: #fff;
  border-radius: 5px;
  box-sizing:border-box;
  padding:.4rem 1rem;
}
.tiezi h4{
  margin-bottom:.5rem;
  height:1.2rem;
  overflow:hidden;
}
.tiezi>li>div:first-child{
   width: 70%;
}
/*文字的*/
.tiezi>li>div:first-child>div{
 
  color:#808080;
  font-size:.9rem;
    overflow: hidden;
   display:-webkit-box;
   -webkit-box-orient:vertical;
   -webkit-line-clamp:3;
}
.tiezi>li>div:last-child{
 width:25%;
 margin-left:6%;
 border: 1px solid #000;
}
/*轮播*/
 .zswipe{
     margin: 0 auto;
     width: 90%;
     height: 10rem;
 }
 .swipe1{
     width: 100%;    
 }
 /*除搜索框所以主体*/
 .body_box{
   margin-top:2.6rem;
 }
 /**/
 .box{
   background: #eee;
 }
 /*搜索框样式*/
 .k_sou{
   display: flex;
   width: 100%;
   max-width:660px;
   margin:0 auto;
   padding: 7px 0;
   border-bottom-left-radius: 6px;
   border-bottom-right-radius: 6px;
   background:#fff;
   position: fixed;
   top:0;
   z-index: 100;
 }
 .k_sou>div>img{
   margin:.15rem .5rem 0;
 }
  .k_sou>input:focus{
   border: 0;
   box-shadow: 0px 0px 5px 0px lightblue;
   box-sizing: border-box;
 }
.k_sou>input{
      display:inline-block;
      width: 70%;
      border-radius:5px;
      outline: none;
      border:1px solid #808080;
      padding-left:2.5rem;
      margin-left:5%;
      box-sizing:border-box;
      background-image: url(../../assets/ico-seach.png);
      background-repeat: no-repeat;
      background-position: 15px 5px;
 }
 .k_sou>span{
  width: 2.2rem;
   display: inline-block;
   background:#64b0ea;
   font-size: .9rem;
   border-radius:6px;
   text-align: center;
   box-sizing:border-box;
   padding-top:.1rem;
   margin-left: 3% 
 }
</style>


