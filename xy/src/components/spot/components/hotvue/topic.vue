<template>
    <div class="topic">
        <ul>
            <li>
                <div class="title">{{title}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
             title:"分手可以体面吗",
 
        }
    }
}
</script>
<style lang="scss" scoped>
.topic{
    width: 7.07rem;
    margin:0 auto;
    ul{
        width: 100%;
        li{
            width: 100%;
            height: 2.65rem;
            margin-top: .19rem;
            background: url('../../../../assets/spot/jiatu-kd@2x.png');
            background-size: 100% 100%;
            padding-top: .61rem;
            .title{
                width: 100%;
                height: .75rem;
                background: rgba(47, 40, 75,.44);
                font-size: .28rem;
                font-family: 'PingFang-SC-Regular';
                text-align: center;
                color: white;
                line-height:.75rem;
            }
        } 
    }
}
</style>
 