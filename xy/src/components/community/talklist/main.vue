<template>
    <div id="main_zjy">
        <div class="wrapper mainWrapper" ref="mainWrapper">
            <ul class="content list_zjy">
                <li v-for="(item,index) in Talklist_zjy" @click="handleChat_zjy(item)">
                    <router-link to="">
                        <p class="photo_zjy"><img :src="item.imgpath" alt=""></p>
                        <p class="message_zjy">{{item.name}}<span>{{item.content}}</span></p>
                        <p class="time_zjy">{{item.sendTime}}<img src="@/assets/community/img/msg.png" alt=""></p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    created(){
        // 获取私信列表信息
        this. handleTalklist_zjy();
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.mainWrapper,{
            click:true
        })
    },
    computed:{
        ...Vuex.mapState({
            Talklist_zjy:state=>state.Community.Talklist_zjy,
            
        })
    },
    methods:{
        ...Vuex.mapActions({
            // 获取私信列表信息
            handleTalklist_zjy:"Community/handleTalklist_zjy",
        }),


        handleChat_zjy(params){
            // 点击进入聊天框
            this.Observer.$emit("handleChat_zjy",1)
            this.$store.dispatch("Community/handleChat",params)
        },
        
    },
    watch:{
        // 监听属性，一直处于可以滚动状态。
        Talklist_zjy(newVal,oldVal){
                this.scroll.refresh();
        }
    }
}
</script>
<style scoped>
    #main_zjy{
        width:100%;
        height:100%;
        background: #221D3B;
        padding: .88rem 0 .98rem;
    }
    #main_zjy>.mainWrapper{
        width:100%;
        height:100%;
    }
    #main_zjy .list_zjy{
        width:100%;
        height:auto;
    }
    #main_zjy .list_zjy a{
        display: block;
        width:100%;
        height:auto;
        padding: .15rem .2rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .photo_zjy{
        width:1rem;
        height:1.rem;
        border-radius:50%;
    }
    .photo_zjy>img{
        width:100%;
        height:100%;
        border-radius:50%;
    }
     .message_zjy{
        font-size:.22rem;
        font-family: PingFangSC-Regular;
        color:#fff;
        margin-left:-2rem;
    }
    .message_zjy>span{
        display: block;
        width:1.98rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        font-size:.22rem;
        color:#B8B8B8;
        margin-top:.2rem;
        font-family:PingFang-SC-Regular;
    }
    .time_zjy{
        font-size:.23rem;
        display: flex;
        align-items: center;
        flex-direction:column;
    }
    .time_zjy>img{
        width:.24rem;
        height:.24rem;
        margin-top:.2rem;
    }
</style>