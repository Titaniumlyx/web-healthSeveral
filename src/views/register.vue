<template>
  <div class="register-container">
    <div class="register-block">
      <div class="zc-header clearfix" style="padding:15px 0;">
        <div class="logo fll" style="width:146px;height:53px">
          <a href="javascript:;">
            <img src="../assets/imgs/rzlogo2.gif" border="0">
          </a>
        </div>
        <h1>用户注册</h1>
      </div>
      <div class="zc-content clearfix">
        <div class="user-zc fll">
          <h1 style="padding-left:10px;">注册新用户</h1>
          <form method="post" class="register-box">
            <div class="one">账&nbsp;户&nbsp;名&nbsp;：
              <input type="text" class ="txt" size ="12" maxlength ="20" name ="username"/></div>
            <div class="one">设置密码：
              <input type="password" name="password"/></div>
            <div class="one">确认密码：
              <input type="password1" name="password1"/></div>
            <div class="one">联系电话：
              <input type="text" class ="txt" name ="tel"/></div>
            <div class="one">电子邮件：
              <input type="text" class ="txt" name ="tel"/></div>
            <div class="one">联系地址：
              <input type="text" class ="txt" name ="tel"/></div>
            <div class="one">邮政编码：
              <input type="text" class ="txt" name ="tel"/></div>
            <div class="one">真实姓名：
              <input type="text" class ="txt" name ="tel"/></div>
            <div class="two">验&nbsp;证&nbsp;码 ：
              <input type="text" class ="txt" name ="tel"/>
              <img src="../assets/imgs/veri.jpg" style="width: 100px;height: 30px;background: #eee;overflow: hidden;">
            </div>
            <div class="readAccept">
              <label>
                <input type="checkbox" value="1" checked="checked">
                我已看过并接受《
                <a href="javascript:;">用户协议</a>》
              </label>
            </div>
            <div class="readAccept three">
              <label style="color: red">会员资费按月计费，10元/月。</label>
              <img src="../assets/imgs/yh.jpg">
              <div class="btn">
                <input type ="submit" name="submit" value="注册" class ="btnSubmit" disabled/>
              </div>
            </div>
          </form>
        </div>
        <div class="zc-login flr" style="color:#555;padding-top:40px;">
          <img src="../assets/imgs/121.png" style="background:#fff;margin-left: -220px;" width="480" height="350">
          已经有帐号？请直接登录
          <a href="javascript:;" class="flr">登&emsp;录</a>
        </div>
      </div>
      <div class="zc-footer"></div>
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
  .register-block{
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

    .zc-content{
      border: 1px solid #d7d7d7;
      padding: 40px;
      padding-right: 0;
      .user-zc{
        width: 630px;
        border-right: 1px dashed #e5e5e5;
        color: #555;
        h1{
          font-weight: normal;
          line-height: 38px;
          font-size: 18px;
        }
        .register-box{
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
          .readAccept{
            font-size: 13px;
            margin-left: 82px;
            margin-top: 15px;
            .btn{
              margin-top: 10px;
            }
            .btnSubmit{
              width: 100px;
              height: 36px;
              background: #DC141B;
              line-height: 36px;
              text-align: center;
              color: #fff;
              font-size: 16px;
              border: 0;
              border-radius: 3px;
              cursor: pointer
            }
          }
          .three{
            font-size: 12px;
            margin-top: 34px;
          }
        }
      }
      .zc-login{
        width: 270px;
        img{
          overflow: hidden;
          vertical-align: top;
        }
        a{
          color: #666;
          border: 1px solid #ccc;
          border-radius: 3px;
          background: #F8F8F8;
          display: block;
          width: 70px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 15px;
        }
      }
    }
  }
</style>
