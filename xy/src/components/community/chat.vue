<template>
    <div id="talkChat">
        <keep-alive>
            <component :is="comName"></component>
        </keep-alive>    
    </div>
</template>
<script>
import Talk from "./talklist/index.vue"
import Chat from "./chatbox/index.vue"

export default {
   
    created(){
        // 显示列表还是聊天框
        this.Observer.$on("handleChat_zjy",(val)=>{
            this.numChat=val;
            if(this.numChat==1){
                this.comName="Chat-com";
            }else{
                this.comName="Talk-com";
            }
        })
    },
    components:{
        "Talk-com":Talk,
        "Chat-com":Chat
    },
    data(){
        return {
            numchat:-1,
            comName:"Talk-com"
        }
    },
}

</script>
<style lang="scss" scoped>
    #talkChat{
        width:100%;
        height:100%;
    }
</style>