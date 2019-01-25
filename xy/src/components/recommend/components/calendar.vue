<template>
    <div id="calendar">
        <div class="Ccon">
            <div class="cTop">
                <h2>七天好运日历</h2>
                <a href="#">查看28天</a>
            </div>
            <ul class="aWeek">
                <li><span>周日</span></li>
                <li><span>周一</span></li>
                <li><span>周二</span></li>
                <li><span>周三</span></li>
                <li><span>周四</span></li>
                <li><span>周五</span></li>
                <li><span>周六</span></li> 
            </ul>
            <div class="ps">PS:4颗星以上，会显示在好运日历中</div>
        </div>
    </div>
</template>
<style lang="scss">
    #calendar{
        height: 1.8rem;
        width: 100%;
      .Ccon{
        width: 7.1rem;
        height: 100%;
        background: #293065;
        margin: .1rem auto; 
        box-shadow:  -.2rem 0 .4rem 0 #4958B8 inset, .2rem 0 .4rem 0 #4958B8 inset ; 
        .cTop{
            text-align: center;
            width: 100%;
            display: flex;
            align-items: center;
            height: .54rem;
            h2{
                margin: 0 auto;
                width: 1.8rem;
                color: #fff;
                font-size: .3rem;
                font-weight: normal;
                font-family: PingFang-SC-Regular;
            }
            a{
                margin-right: .2rem;          
            }
        }
        .aWeek{
            display: flex;
            justify-content: space-between;
            li{
                width: 1rem;
                height: .8rem;
                border: .01rem solid #fff ;
                border-left:none;
                display: flex;
                justify-content: center;
                span{
                    width: .5rem;
                    margin-top:.34rem;
                    display: block;
                    border-top:.02rem #fff solid ;
                    padding-top: .05rem;
                    color: #fff;
                }
            }
        }
        .ps{
            color: #C5C3C3;
            font-size: .22rem;
            padding-left:.2rem;
            margin-top: .08rem; 
        }
      }  
    }

</style>

