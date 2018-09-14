<template>
  <div class="container">
    <div class="footTable">
      <div class="ww clearfix">
        <div class="someInfo fll">
          <div class="phone">
            <h4>24小时客服热线</h4>
            <p>010-62645225</p>
          </div>
        </div>
        <table cellspacing="0" cellpadding="0" class="clearfix fll" style="width: 850px;">
          <tbody>
            <tr>
              <td>
                <div class="line"></div>
              </td>
              <td>
                <dl class="dl">
                  <dt class="dt">关于我们</dt>
                  <dd class="dd">
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">诚聘英才</a>
                    <a href="javascript:;">常见问题</a>
                  </dd>
                </dl>
              </td>
              <td>
                <div class="line"></div>
              </td>
              <td>
                <dl class="dl">
                  <dt class="dt">关于我们</dt>
                  <dd class="dd">
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">诚聘英才</a>
                    <a href="javascript:;">常见问题</a>
                  </dd>
                </dl>
              </td>
              <td>
                <div class="line"></div>
              </td>
              <td>
                <dl class="dl">
                  <dt class="dt">关于我们</dt>
                  <dd class="dd">
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">诚聘英才</a>
                    <a href="javascript:;">常见问题</a>
                  </dd>
                </dl>
              </td>
              <td>
                <div class="line"></div>
              </td>
              <td>
                <dl class="dl">
                  <dt class="dt">关于我们</dt>
                  <dd class="dd">
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">诚聘英才</a>
                    <a href="javascript:;">常见问题</a>
                  </dd>
                </dl>
              </td>
              <td>
                <div class="line"></div>
              </td>
              <td>
                <dl class="dl">
                  <dt class="dt">关于我们</dt>
                  <dd class="dd">
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">诚聘英才</a>
                    <a href="javascript:;">常见问题</a>
                  </dd>
                </dl>
              </td>
              <td>
                <div class="line"></div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="weixin flr" style="width: 180px;">
          <h2 class="title">亚强世纪公众号</h2>
          <div class="img">
            <img src="../assets/imgs/zs.gif" width="100" height="100">
          </div>
          <p class="scan-word">手机扫一扫,优惠全知晓!</p>
          <p style="color:rgb(212,0,60); width:160px; text-align:center;">
            <a href="javascript:;" style="color:rgb(212,0,60);font-size: 12px">http://yaqiang.zhonglinglh.com</a>
          </p>
        </div>
      </div>
    </div>

    <div class="footIcon"></div>

    <div class="fooCopy"></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  .container{
    background: #fff;
    .footTable{
      padding: 25px 0 10px;
      background: #f3f3f3;
      border-top: solid 1px #e6e6e6;
      border-bottom: solid 1px #e6e6e6;
      margin-top: 35px;
      .ww{
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
        .someInfo{
          width: 155px;
          .phone{
            height: auto;
            line-height: 18px;
            padding: 5px 0;
            h4{
              height: 20px;
              line-height: 20px;
              color: #666;
              font-size: 15px;
            }
            p{
              height: 30px;
              line-height: 30px;
              font-size: 20px;
              color: rgb(212,0,60);
              font-weight: bold;
            }
          }
        }
        table{
          border-collapse: collapse;
          border-spacing: 0;
        }
        .line{
          width: 0;
          height: 130px;
          border-left: solid 1px #e7e7e7;
          border-right: solid 1px #fff;
          margin: 0 20px;
        }
        .dl{
          color: #666;
          .dt{
            height: 24px;
            line-height: 24px;
            font-weight: bold;
            font-size: 15px;
          }
          .dd{
            overflow: hidden;
            a{
              display: block;
              overflow: hidden;
              height: 24px;
              line-height: 24px;
              color: #666;
              font-size: 12px;
            }
          }
        }
        .weixin{
          text-align: center;
          color: #666;
          .title{
            font-size: 15px;
          }
          .img{
            margin: 10px 0;
            img{
              overflow: hidden;
              vertical-align: top;
            }
          }
          .scan-word{
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
