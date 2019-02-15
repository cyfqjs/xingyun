<template>
  <div id="main">
    <div class="wrapper mainWrapper" ref="ainWrapper">
      <ul class="content chat">
        <b @click="flagChatList==true ? handleJz(1):''"><span :style="flagChatList==true?'display:block':'display:none'">点击查看历史消息</span><span :style="flagChatList==true?'display:none':'display:block'">亲,全部加载完了~</span></b>
        <li :class="item.sid==321?'friend':'me'" v-for="(item,index) in chatList"  ref="mainBottom">
          <div :style="item.sid==321?'display:block':'display:none'">
          <span>{{item.sendTime}}</span>
          <p class="you">
            <img :src="imgpath" alt>
            <span>
              {{item.content}}
            </span>
          </p>

          </div>
          <div :style="item.sid==321?'display:none':'display:block'">
          <span>{{item.sendTime}}</span>
          <p class="my">
           
            <span>
              {{item.content}}
            </span>
             <img :src="imgpath" alt>
          </p>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
import qs from "qs";
import getMyDate from "../time.js"
export default {
  created() {

  },
  data() {
   return {
     imgpath:""
   }
  },
  activated() {
    this.scroll = new BScroll(this.$refs.ainWrapper, {
      click: true
    });
  },
  computed:{
    ...Vuex.mapState({
            // 聊天记录
            chatList:(state)=>{
                state.Community.chatList.map((item,index)=>{
                  item.sendTime=getMyDate.getMyDate(item.sendTime)
               
                })
                
                return state.Community.chatList
            },
            // 控制历史记录是否加载完毕
            flagChatList:state=>state.Community.flagChatList
    }),
  },
  methods: {
     scrollToBottom() {
        this.$nextTick(() => {
        var container = this.$el.querySelector(" .content ");
        this.$refs.mainBottom[this.$refs.mainBottom.length-1].scrollIntoView()
     })},
     ...Vuex.mapActions({
       handleJz:"Community/handleChat"
     })
  },
  watch:{
    chatList(){
      this.scrollToBottom();
      let val=JSON.parse(localStorage.getItem("friend"))
      this.imgpath=val.imgpath
    }
  }
};
</script>
<style scoped>
#main {
  width: 100%;
  height: 100%;
  overflow: hidden;;
}
#main > .mainWrapper {
  width: 100%;
  height: 100%;
}
#main > .mainWrapper > .chat {
  width: 100%;
  padding: 1rem .2rem;
  height:auto;
}
#main > .mainWrapper > ul > li {
  margin: 0.48rem 0;
  height:auto;
}
#main > .mainWrapper > .chat >b{
    width:100%;
    height:.2rem;
    display: block;
    position: fixed;
    left:0;
    top:1.2rem;
    z-index:2;
    text-align:center;
    font-size:.2rem;
    color:gray;
}
#main > .mainWrapper > .chat > .friend >div> span,
#main > .mainWrapper > .chat > .me > div>span {
  display: block;
  height: 0.2rem;
  color: #fff;
  font-size: 0.26rem;
  margin: 0 0 0.48rem 3rem;
}
#main > .mainWrapper > .chat > .me {
  margin-left: 1.36rem;
}
#main > .mainWrapper > .chat > .me > div>span {
  margin-left: 1.7rem;
}
#main > .mainWrapper > .chat > .friend >div> .you,
#main > .mainWrapper > .chat > .me > div>.my {
  width: 5.74rem;
  height: auto;
  display: flex;
  align-items: center;
}
#main > .mainWrapper > .chat > .friend >div> .you > img,
#main > .mainWrapper > .chat > .me >div> .my > img {
  width: 0.82rem;
  height: 0.82rem;
  border-radius: 50%;
  float:left;
}
#main > .mainWrapper > .chat > .me >div> .my > img {
  margin-left: 0.2rem;
}
#main > .mainWrapper > .chat > .friend > div>.you > span,
#main > .mainWrapper > .chat > .me > div>.my > span {
  width: 4.56rem;
  height: auto;
  background: #fff;
  font-size: 0.3rem;
  margin-left: 0.2rem;
  padding: 0.25rem 0.2rem;
  border-radius: 0.15rem;
  color: #595959;
  word-wrap: break-word;
  word-break: break-all;
}
#main > .mainWrapper > .chat > .me >div> .my > span {
  background: #c490bf;
  color: #fff;
}
</style>