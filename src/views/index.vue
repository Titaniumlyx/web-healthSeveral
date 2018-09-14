<template>
  <div class="container">
    <Header></Header>

        <div class="content">
          <div class="block">
            <!--路径-->
            <div class="bread clearfix">
              <span class="fll">当前位置: </span>
              <a href="javascript:;">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>首页</el-breadcrumb-item>
                  <el-breadcrumb-item>网站公告</el-breadcrumb-item>
                </el-breadcrumb>
              </a>
            </div>
            <!--内容-->
            <div class="main-content clearfix">
              <div class="main-list fll">
                <!--list-->
                <div class="listBox">
                  <div class="listBoxT two">
                    <div class="listBoxT-up">
                      <a href="javascript:;">亚强世纪官方网站即将开业！</a>
                      <span class="flr">发布日期：2013-11-28</span>
                    </div>
                    <div class="lable">
                      <i class="iconfont icon-Pencil-"></i>
                      <span class="name">关键字：</span>
                    </div>
                    <i class="coner"></i>
                  </div>
                  <div class="listBoxC">
                    <p class="txt">
                      <a href="javascript:;">【查看全文】</a>
                    </p>
                    <p class="img">
                      <a href="javascript:;">
                        <img style="width: 600px;height: 400px;" src="../assets/imgs/p1.jpeg" alt="">
                      </a>
                    </p>
                  </div>
                </div>
                <div class="listBox">
                  <div class="listBoxT two">
                    <div class="listBoxT-up">
                      <a href="javascript:;">亚强世纪官方网站即将开业！</a>
                      <span class="flr">发布日期：2013-11-28</span>
                    </div>
                    <div class="lable">
                      <i class="iconfont icon-Pencil-"></i>
                      <span class="name">关键字：</span>
                    </div>
                    <i class="coner"></i>
                  </div>
                  <div class="listBoxC">
                    <p class="txt">
                      <a href="javascript:;">【查看全文】</a>
                    </p>
                    <p class="img">
                      <a href="javascript:;">
                        <img style="width: 600px;height: 400px;" src="../assets/imgs/p1.jpeg" alt="">
                      </a>
                    </p>
                  </div>
                </div>
                <div class="listBox">
                  <div class="listBoxT two">
                    <div class="listBoxT-up">
                      <a href="javascript:;">亚强世纪官方网站即将开业！</a>
                      <span class="flr">发布日期：2013-11-28</span>
                    </div>
                    <div class="lable">
                      <i class="iconfont icon-Pencil-"></i>
                      <span class="name">关键字：</span>
                    </div>
                    <i class="coner"></i>
                  </div>
                  <div class="listBoxC">
                    <p class="txt">
                      <a href="javascript:;">【查看全文】</a>
                    </p>
                    <p class="img">
                      <a href="javascript:;">
                        <img style="width: 600px;height: 400px;" src="../assets/imgs/p1.jpeg" alt="">
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="main-listR flr">
                <div class="rBox clearfix">
                  <h3>最新文章</h3>
                  <div class="rBox-block">
                    <dl>
                      <dd>
                        <ul class="imgBox clearfix">
                          <li class="first">
                            <a href="javascript:;">
                              <img src="../assets/imgs/zs.gif" width="135" height="85">
                            </a>
                            <a href="javascript:;">支付註冊</a>
                          </li>
                          <li>
                            <a href="javascript:;">
                              <img src="../assets/imgs/zs.gif" width="135" height="85">
                            </a>
                            <a href="javascript:;">新手上路</a>
                          </li>
                        </ul>
                      </dd>
                    </dl>
                    <dl>
                      <dt>
                        <a href="javascript:;">解决方案</a>
                      </dt>
                      <dd></dd>
                    </dl>
                    <dl>
                      <dt>
                        <a href="javascript:;">解决方案</a>
                      </dt>
                      <dd></dd>
                    </dl>
                    <dl>
                      <dt>
                        <a href="javascript:;">解决方案</a>
                      </dt>
                      <dd></dd>
                    </dl>
                    <dl>
                      <dt>
                        <a href="javascript:;">解决方案</a>
                      </dt>
                      <dd></dd>
                    </dl>
                    <dl>
                      <dt>
                        <a href="javascript:;">解决方案</a>
                      </dt>
                      <dd></dd>
                    </dl>
                    <dl>
                      <dt>
                        <a href="javascript:;">解决方案</a>
                      </dt>
                      <dd></dd>
                    </dl>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

    <Foot></Foot>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Foot from '../components/Footer'

  export default {
    name: "index",
    components: {
      Header,Foot
    }
  }
</script>

<style scoped lang="scss">
  @import '../assets/consult';
  /*.content{
    margin-top: 100px;
    .block{
      width: 1200px;
      margin: 0 auto;
      .bread{
        font-size: 14px;
        color: #606266;
        .el-breadcrumb__item {
          &:hover{
            color: #FF0027;
          }
          float: left;
          margin-left: 5px;
          margin-top: 3px;
        }
      }
      .main-content{
        margin-top: 15px;
        .main-list{
          width: 888px;
          border: 1px solid #d9d9d9;
          .listBox{
            .listBoxT{
              width: 888px;
              height: 87px;
              border-bottom: 1px solid #d9d9d9;
              position: relative;
              background: #F5F5F5;
              .listBoxT-up{
                padding: 10px 15px 12px 20px;
                a{
                  color: rgb(229, 13, 69);
                  font-size: 18px;
                  font-weight: bold;
                }
                span{
                  color: #afafaf;
                  font-size: 12px;
                }
              }
              .lable{
                padding-left: 20px;
                .iconfont{
                  color: rgb(229, 13, 69);
                }
                .name{
                  display: inline-block;
                  font-size: 13px;
                }
              }
            }
            .listBoxC{
              padding: 20px;
              .txt{
                display: block;
                line-height: 24px;
                text-indent: 20px;
                color: #454545;
                a{
                  color: #e50d45;
                  font-size: 12px;
                }
              }
              .img{
                display: block;
                width: 627px;
                margin-top: 20px;
                overflow: hidden;
                text-align: center;
                a img{
                  background: #eee;
                  overflow: hidden;
                  vertical-align: top;
                }
              }
            }
          }
        }
        .main-listR{
          width: 300px;
          .rBox{
            border: 1px solid #e0dede;
            margin-bottom: 16px;
            h3{
              width: 298px;
              height: 30px;
              text-indent: 12px;
              color: rgb(69, 69, 69);
              font-weight: bolder;
              line-height: 30px;
              font-size: 14px;
              border-bottom: 1px solid rgb(228, 228, 228);
              background: #F3F3F3;
            }
            .rBox-block{
              padding: 16px 0 0 12px;
              dl{
                margin-bottom: 11px;
                a{
                  color: #333;
                  font-size: 14px;
                }
              }
              .imgBox{
                margin: 0 0 10px 0;
                li{
                  float: left;
                  width: 135px;
                  text-align: center;
                  line-height: 20px;
                }
                .first{
                  margin-right: 9px;
                  a{
                    color: #333;
                    font-size: 12px;
                    img{
                      background: #eee;
                      overflow: hidden;
                      vertical-align: top;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }*/
</style>
