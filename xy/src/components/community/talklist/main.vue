<template>
    <div id="main_zjy">
        <ul class="list_zjy">
            <li v-for="(item,index) in Talklist_zjy">
                <router-link to="/chat" @click="handleMessage">
                    <p class="photo_zjy"><img :src="item.photo" alt=""></p>
                    <p class="message_zjy">{{item.username}}<span>{{item.newMessage}}</span></p>
                    <p class="time_zjy">{{item.messageTime}}<img src="@/assets/community/img/msg.png" alt=""></p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    created(){
        this. handleTalklist_zjy();
    },
    computed:{
        ...Vuex.mapState({
            Talklist_zjy:state=>state.Community.Talklist_zjy
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleTalklist_zjy:"Community/handleTalklist_zjy",
        })
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
    #main_zjy>.list_zjy{
        width:100%;
        height:auto;
    }
    #main_zjy>.list_zjy a{
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
        font-size:.26rem;
        color:#fff;
        margin-left:-2.5rem;
    }
    .message_zjy>span{
        display: block;
        width:1.98rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        font-size:.2rem;
        color:#B8B8B8;
        margin-top:.2rem;
        

    }
    .time_zjy{
        font-size:.18rem;
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