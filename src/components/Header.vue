<template>
    <div class="head-container">
        <div class="block">
          <div class="header-top">
            <div class="top-word flr">
              <span>欢迎光临健康小屋</span>
              <span class="login one" @click="$router.push('/login')">
                <a href="javascript:;">登录</a>
              </span>
              <span class="register one" @click="$router.push('/register')">
                <a href="javascript:;">注册</a>
              </span>
            </div>
          </div>

          <div class="below">
            <div class="logo">
              <img src="../assets/imgs/logo.png" alt="House">
            </div>
            <div class="category">
              <span class="category-item">行业资讯</span>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
  .head-container{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    .block{
      border-bottom: 1px solid #ccc;
      .header-top{
        width: 100%;
        background: #EEE;
        height: 25px;
        line-height: 25px;
        .top-word{
          font-size: 12px;
          color: #515151;
          margin-right: 150px;
          .one{
            padding: 0 6px;
            border-left: 1px dotted #CCC;
            a{
              color: #515151
            }
            a:hover{
              color: #FF0027;
            }
          }
        }
      }

      .below{
        display: flex;
        cursor: pointer;
      }
      .logo{
        margin-left: 70px;
        margin-top: 15px;
        margin-bottom: 15px;
        width: 200px;
        height: 40px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .category{
        span:hover {
          color: #000
        }
        margin-left: 50px;
        padding-top: 36px;
        color: #858585;
        font-size: 14px;
      }
    }
  }
</style>
