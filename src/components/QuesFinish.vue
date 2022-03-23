<template>
    <div>
      <el-container>
    <!-- <el-aside width="400px"> -->  
        <div id="helloWorld">
    <div class="content">
        <navigation/>
    </div>
</div>
        
    <!-- </el-aside> -->
      <!-- <el-header height="200px">第四章单元测试</el-header> -->
      
         

           <!-- <div class="background">
    <img alt="Vue logo" src="../assets/logo.png" width="100%" height="100%">
            </div> -->

            <!-- <el-row> -->
    <!-- <el-col :span="8"><div></div></el-col>
    <el-col :span="8"> -->
        
        <div class="element">
        <div class="question" v-for="(item,index) in problems" :key="index">

        <el-card class="box-card" >
            <span><font size="5" face="微软雅黑" color="409EFF">第{{index+1}}题：单选</font></span>
          <img :src="item.address" width="600">
      <div class="options">
        <el-radio-group v-model="radios[index]">
          <el-radio :label="5" @click="SaveAnswer(item,0)">A</el-radio>
          <el-radio :label="2" @click="SaveAnswer(item,1)">B</el-radio>
          <el-radio :label="3" @click="SaveAnswer(item,2)">C</el-radio>
          <el-radio :label="4" @click="SaveAnswer(item,3)">D</el-radio>
        </el-radio-group>
      </div>
        </el-card>    
    </div>    
  </div>
    
      <!-- <el-footer>Footer</el-footer> -->

  </el-container>
</div>

  
</template>
<script >
import navigation from "../components/navigation.vue"
export default {
  name: 'App',
  components: {
      navigation
  },
  data(){
    return{
      size:400,
      radios:["1","1","1","1"],
      currentIndex: 0,
      problems:[
        {title:'title1',address:require('@/assets/problem1.png'),rightAnswer:1,option:["A.选项一","B.选项二","C.选项三","D.选项四"]},
        {title:'title2',address:require('@/assets/problem2.png'),rightAnswer:2,option:["A.选项一","B.选项二","C.选项三","D.选项四"]},
      ],
    }
  },
methods: {
    SaveAnswer(item,index,a) {
      this.currentIndex= index;
      console.log(item.title)
      //console.log(a)
      if(item.rightAnswer==index)
        console.log('答案正确')
      else console.log('答案错误')
    },
  }
}
</script>

<style>
    .mid{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    }
    .element {
    width: 600px; height: 400px;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;    /* 有了这个就自动居中了 */
    }
     .element1 {
    width: 600px; height: 400px;
    position: absolute; left: 0; top: 0; right: 0; bottom: 0;
    margin: auto;    /* 有了这个就自动居中了 */
    }

  .background {
    left: 0;
    top: 0;
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
  }
  #helloWorld{
  background-image:url('../assets/sea.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
/*  z-index:1; */
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
 
}
.content{
  width: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  /* z-index:2; */
}

			.box{
				width: 300px;
			    height: 300px;
			    background: #ddd;
			    display: flex;
			    flex-direction: column;
			    justify-content: center;
			}

</style>
