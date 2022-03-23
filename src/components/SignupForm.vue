<template>
  <form @submit.prevent="handleSubmit">
      
      <a class="xiegang"> / </a>
      <div class="emailInput" style="top: 15%;width:80%; position: absolute;">
          <label style="font-size: 20px;">电子邮箱:</label>
          <input type="email" required v-model="email">
      </div>
      <div class="pwdInput" style="top: 55%;width:80%; position: absolute;">
          <label style="font-size: 20px;">密码:</label>
          <input type="password" required v-model="password">
      </div>
      <div v-if="passwordError" class="error">{{passwordError}}</div>
      <router-link target="_blank" :to="{path:'/Register',query:{email: email,password: password}}"><el-link type="info" class="regiPosition">注册</el-link></router-link>
      <el-link type="info" class="wordPosition" @click="dialogFormVisible = true">忘记密码</el-link>
      
      <el-dialog :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="邮箱账号" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="Acode" label="验证码" :label-width="formLabelWidth">
            <el-input v-model="form.identify" autocomplete="off"></el-input>
          <el-button type="primary" plain @click="getCaptcha" :disabled="flag" style="position: absolute;top: 68%;left: 120%;">{{content}}</el-button>
          </el-form-item>
          <el-form-item label="新密码" :label-width="formLabelWidth">
            <el-input v-model="form.pwd" autocomplete="off"></el-input>
          </el-form-item>
          </el-form>
           <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogForm">确 定</el-button>
            </div>
          </el-dialog>
      
      
      <el-button type="primary" class="loginButton" round @click="login()">登  录</el-button>
       <router-view></router-view>   
  </form>
</template>

<script>
// import axios from 'axios'
import Register from './register.vue'
export default {
    components:{
        Register
    },
    data()
    {
        return{
            email: '',
            password: '',
            role:'designer',
            term: false,
            temSkill:'',
            skills:[],
            passwordError:"",
            dialogFormVisible: false,
            form: {
                      email: '',
                      identify: "",
                      pwd: ''
                    },
            active: 0,
            flag: false,//按钮是否可取
            content: "发送验证码",//按钮内文本
            totalTime: 60,//倒计时时间
            icode:"",
            id:"1"
        }
    },
    methods:
    {
        login:function(){
            var data=new Object;
            data.name=this.email;
            data.pwd=this.password;
            if(data.name==""||data.pwd==""){
                alert("信息错误");
            }
            else{
                var url="http://121.5.175.203:8080/api/Students/"+data.name+"/"+data.pwd;
                // this.$http({
                //       method:'get',
                //       url:url,//没指定BaseUrl路径重写就不需要写了,直接写接口地址就行了。
                //       data:data
                //     }).then(res=>{
                //       if(res.data==false){
                //           alert("密码错误");
                //       }
                //       else{
                //            this.$router.push({path:"/Register"})
                //       }
                //       console.log(res.data)
                //     }).catch(err=>{
                //       console.log(err)
                //     });
                this.$axios.get(url,data)
                .then(res => {
                   if(res.data==false){
                       alert("密码错误");
                   }
                   else{
                        this.$router.push({path:"/Register"})
                   }
                   console.log(res.data)
                });
            }
        },
        dialogForm(){
            if(this.form.email==""||this.form.pwd==""||this.form.identify==""){
                alert("信息错误");
            }
            else{
            console.log(this.icode,"  ",this.form.identify);
            var code=parseInt(this.form.identify);
            console.log(this.icode,"  ",code);
            if(this.icode===code){
                console.log("yes");
                    var url="http://121.5.175.203:8080/api/students/"+this.form.email+"/"+this.form.pwd;
                    var data=new Object;
                    data.email=this.form.email;
                    data.pwd=this.form.pwd;
                    this.$axios.get(url,data)
                    .then(res => {
                           // identifyCode=res.data;
                           console.log(res.data)
                       }
                    );
                    this.dialogFormVisible = false;
                    this.form.identify="";
                    this.form.email="";
                    this.form.pwd="";
                }
                else{
                    alert("验证码错误");
                }
            }
        },
        next() {
                if (this.active++ > 2) this.active = 0;
              },
        getCaptcha() {
              this.flag = true;//点击之后设置按钮不可取
              this.content = this.totalTime + "s后重新发送";//按钮内文本
              let clock = window.setInterval(() => {
                this.totalTime--;
                this.content = this.totalTime + "s后重新发送";
                if (this.totalTime < 0) {
                  window.clearInterval(clock);
                  this.content = "重新发送验证码";
                  this.totalTime = 60;
                  this.flag = false; //这里重新开启
                }
              }, 1000);
              var url="http://121.5.175.203:8080/api/Students/forget/"+this.form.email;
              this.$axios.get(url)
              .then(res => {
                     this.icode=res.data;
                 }
              );
            }
    }
}
</script>

<style>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
.Acode{
    width: 50%;
}
.regiPosition{
    position: absolute;
    left: 85%;
    top: 110%;
}
.xiegang{
    position: absolute;
    left: 86%;
    top: 92%;
    font-size: 20px;
    color: #777777;
}
.wordPosition{
    position: absolute;
    left: 90%;
    top: 110%;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    height: 20%;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid #ddd;
    color: #555;
    font-size: 20px;
}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top:2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    background: #eee;
    border-radius: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color:#777;
    cursor: pointer;
}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color:white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}

.loginButton{
    position: absolute;
    background: #0b6dff;
    border-radius: 10%;
    width: 90%;
    height: 15%;
    left:25%;
    top:120%;
    text-align: center;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color:white;
    border-radius: 20px;
    zoom: 0.9;
    font-size: 35px;
}
    
</style>