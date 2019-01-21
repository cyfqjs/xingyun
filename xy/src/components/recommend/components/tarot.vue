<template>
    <div id="tarot">
        <div class="tCon">
            <div class="tLeft">
                <span class="pName">牌名</span>
                <span class="ele">元素</span>
            </div>
            <div class="tCenter">
                <h2 class="everyDay">每日塔罗</h2>
                <p class="noti">今日的专属塔罗提示</p>
                <a class="cGet" href="#">点解获取</a>
            </div>
            <div class="tRight">
                <a class="details" href="#">查看详情</a>
                <span class="constellation">星座</span>
                <span class="kWord">关键词</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    #tarot{
        width: 100%;
        height: 4.42rem;
        background: #1E1A34;
        overflow: hidden;
        .tCon{
            display: flex;
            justify-content: space-between;
            width: 7.1rem;
            height: 4.22rem;
            background: #242957;
            margin:.1rem auto;
            border-radius: .12rem;
            box-shadow:  -.2rem 0 .4rem 0 #3B438D inset, .2rem 0 .4rem 0 #3B438D inset ; 
            .tLeft{
                color: #fff;
                display: flex;
                height: 100%;
                width: 2.27rem;
                flex-direction: column;
                .pName{
                    display: block;
                    margin-top: .72rem;
                    margin-left: .89rem;    
                }
                .ele{
                    display: block;
                    margin-top: 1.86rem;
                    margin-left: .89rem;   
                }
            }
            .tCenter{
                width: 2.56rem;
                height: 100%;
                color: #fff;
                text-align: center;
                background: red;
                .everyDay{
                    margin-top: .63rem;

                }
                .noti{
                    margin-top: .21rem;
                }
                .cGet{
                    display: block;
                    margin-top: 1.62rem;
                    color: #fff;
                }
            }
            .tRight{
                color: #fff;
                height: 100%;
                width: 2.27rem;  
                .details{
                    display: block;
                    color: #EB5AE9;
                    font-size: .2rem;
                    text-align: right;
                    margin-right: .4rem;
                    margin-top: .2rem;
                }
                .constellation{
                    display: block;
                    margin-top: .3rem;
                    margin-left: 1rem;  
                } 
                .kWord{
                    display: block;
                    margin-top: 1.88rem;
                    margin-left: .89rem;
                }  
            }

        }
    }
</style>

