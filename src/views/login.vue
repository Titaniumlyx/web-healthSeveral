<template>
  <div class="login-container">
    <div class="login-block">
      <!--头部-->
      <div class="zc-header clearfix" style="padding:15px 0;">
        <div class="logo fll" style="width:146px;height:53px">
          <a href="javascript:;">
            <img src="../assets/imgs/rzlogo2.gif" border="0">
          </a>
        </div>
        <h1>用户登录</h1>
      </div>
      <!--登录内容-->
      <div class="login-content clearfix">
        <div class="user-left fll" style="padding-top:20px;color:#555;width:436px; padding-left:80px;">
          <img src="../assets/imgs/121.png" width="480" height="350" style="background: #fff;">
        </div>
        <div class="user-login flr">
          <form action="post" class="userBox">
            <div class="one">账&nbsp;户&nbsp;名&nbsp;：
              <input type="text" class ="txt" size ="12" maxlength ="20" name ="username"/>
            </div>
            <div class="one">设置密码：
              <input type="password" name="password"/>
            </div>
            <div class="two">验&nbsp;证&nbsp;码 ：
              <input type="text" class ="txt" name ="tel"/>
              <img src="../assets/imgs/veri.jpg" style="width: 100px;height: 30px;background: #eee;overflow: hidden;cursor: pointer;">
            </div>
            <div>
              <span class="remark">请输入图片中的字符，不区分大小写！</span>
            </div>
            <div class="clearfix">
              <p class="fll">
                <label class="autoLogin">
                  <input type="checkbox" style="vertical-align:middle;">
                  自动登录
                </label>
              </p>
              <a href="javascript:;" class="flr forgetPwd">忘记密码?</a>
            </div>
            <div class="loginBtn">
              <input type="submit" value="登录" class="loginSub">
            </div>
          </form>
          <div class="goRegister" style="margin-top:30px;border-top: 1px solid #eee; padding: 10px 0;">
            <a href="javascript:;" class="regis">立即注册》</a>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from '../components/Footer'

  export default {
    components:{
      Foot
    }
  }
</script>

<style scoped lang="scss">
  .login-block{
    width: 1200px;
    margin: 0 auto;
    .zc-header{
      .logo{
        margin-left: 50px;
      }
      img{
        width: 58px;
        height: 54px;
        overflow: hidden;
        vertical-align: top;
      }
      h1{
        position: absolute;
        top: 20px;
        left: 160px;
        font-size: 24px;
        font-weight: 400;
        padding: 0;
        line-height: 38px;
        margin-left: 100px;
      }
    }

    .login-content{
      border: 1px solid #ccc;
    }

    .user-login{
      padding: 0 60px;
      border-left: 1px solid #ccc;
      margin-top: 50px;
      margin-bottom: 50px;
      .userBox{
        padding: 20px 0;
        .one{
          margin-bottom: 30px;
          font-size: 14px;
          input{
            width: 240px;
            height: 26px;
            line-height: 26px;
            border: 1px solid #d5d5d5;
            font-size: 14px;
            padding: 0 5px;
          }
        }
        .two{
          input{
            width: 126px;
            height: 26px;
            line-height: 26px;
            border: 1px solid #d5d5d5;
            font-size: 14px;
            padding: 0 5px;
          }
          img{
            margin-bottom: -8px;
          }
        }
        .remark{
          color: #808080;
          font-size: 12px;
        }
        .autoLogin{
          font-size: 13px;
          color: #555;
        }
        .forgetPwd{
          font-size: 12px;
          color: #333;
        }
        .loginBtn{
          padding: 20px 0 0;
          .loginSub{
            width: 100%;
            height: 33px;
            line-height: 32px;
            background: #E20031;
            border: 0;
            border-radius: 3px;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
      .goRegister{
        text-align: right;
        .regis{
          font-size: 12px;
          font-weight: 600;
          color: #D4003C;
          cursor: pointer;
          &:hover{
            color: rgb(255, 102, 0);
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
