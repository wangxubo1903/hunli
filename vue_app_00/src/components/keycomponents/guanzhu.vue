<template>
 <div>
     <!--没登陆-->
       <div class="nologin" v-show="dengmei==1">
          <div @click="login">
              未登陆请去登陆
          </div>
       </div>
       <!--登陆成功-->
      <div class="content" v-show="dengmei==0">    
      <mt-header  flexd title="关注">
        <router-link to="/me" slot="left">《</router-link>
        <router-link to="/me" slot="right">推荐</router-link>
      </mt-header>    
      <div class="input bg">
        <input type="text" placeholder="搜全部关注">
      </div>
      <div class="list">
          <div>关注列表</div>
          <div v-for="(elem,i) of list" :key="i" class="lists">
              <div><img width="100%" height="100%" :src="`http://zq666.applinzi.com/img/${elem.uimg}`"></div> 
              <div>
                  <p v-text="elem.uname"></p>
                  <p>任务的介绍</p>
              </div>
              <div>
                  <a class="a1" @click="button($event)" href="javascript:;">取消关注</a>
              </div>
          </div>                  
      </div>
    </div>
</div>
</template>
<script>
  export default{
      data(){
          return{
           dengmei:1,
           uid:"",
           list:[],
          }
      },
      methods:{
          login(){
            this.$router.push("/login")
        },
          button(e){
              if(e.target.innerHTML=="取消关注"){
                e.target.innerHTML="关注"
               }else{
                  e.target.innerHTML="取消关注" 
               }
          },
          zhuang(){
                var uid=sessionStorage.getItem("uid")               
                if(uid!=null && uid!=""){
                 this.dengmei=0
                 this.uid=uid
                 }else{
                  this.dengmei=1
                  this.uid="";                 
           }
        },
        loadMore(){
            if(this.dengmei==0){
            this.axios.get("guanzhu",{params:{
                uid:this.uid
            }}).then(res=>{
                console.log(res.data)
                this.list=res.data
                console.log(this.list)
            })
            }
        }
        
      },
      created() {
          this.zhuang()
          this.loadMore()
      },
  }
  
</script>
<style scoped>
.nologin{
      width: 100%;
      height: 667px;
      background:rgba(0,0,0,.2);
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .nologin>div{
      width: 13.5rem;
      text-align: center;
      color: aliceblue;
      background: #000;
      padding: 50px 0;
      border-radius:8px;
  }
/**/
  .bg{
      background-color: #fff;
  }
  .input {
      padding:11px 15px;
  }
 .input input{
      display:inline-block;
      width: 100%;
      height: 1.8rem;
      border-radius:5px;
      outline: none;
      border:1px solid #fff;
      padding-left:2.5rem;
      box-sizing:border-box;
      background-image: url(../../assets/ico-seach.png);
      background-repeat: no-repeat;
      background-position: 15px 5px;
  }

  .list{
      width: 90%;
      margin:10px auto 0; 
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background-color: #fff;
  }
  .list>div:first-child{
      height: 50px;
      line-height: 50px;
      text-align:center; 
      border-bottom:1px solid #ccc;  
  }
  .lists{
      display: flex;
      justify-content: space-between;
      padding:5px 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;

  }
  .lists>div:nth-child(1){
      width:50px;
      height:50px;
      border:1px solid red;
      border-radius:50%;
  }
  .lists>div:nth-child(2){
     margin-left:-70px;
  }
  .lists>div:nth-child(2)>p:first-child{
     margin-bottom: 6px;
  }
  .lists>div:nth-child(3){
      display: flex;
      align-items: center;
  }
  .lists>div:nth-child(3)>a{
      display:block;
      width: 80px;
      height: 30px;
      border:1px solid red;
      margin-right:15px;
      text-align: center;
      line-height: 30px;
      border-radius:10px;
      box-sizing: border-box;
      font-size: 12px;
  }
</style>