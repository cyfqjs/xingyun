import qs from "qs"
import getMyDate from "../../components/community/time"
export default {
    // 获取动态列表
    handleMoments_zjy(state,params){
        state.Moments_zjy=[...state.Moments_zjy,...params];
    },
    // 私信列表
    handleTalklist_zjy(state,params){
        params.map((item,index)=>{
            item.sendTime=getMyDate.getMyDate(item.sendTime)
        })
        state.Talklist_zjy=params;
    },
    // 聊天记录
    handleChat(state,obj){
        if(obj.friend==1){
            if(state.flagChatList){
                let brr=[]
                for(var i=obj.msg.length-1-state.limit;i>0;i--){
                    if(brr.length<6){
                        brr.push(obj.msg[i])
                    }
                }
                state.chatList=[...brr.reverse(),...state.chatList];
                state.friend=obj.friend
                sessionStorage.setItem("friend",JSON.stringify(obj.friend))
                state.limit+=6;
            }else{
                state.flagChatList=false;
            }
        }else{
            let brr=[]
                for(var i=obj.msg.length-1;i>obj.msg.length-7;i--){
                    
                        brr.push(obj.msg[i])
                    
                }
                state.chatList=brr.reverse();
                state.friend=obj.friend
                sessionStorage.setItem("friend",JSON.stringify(obj.friend))
        } 
    },
    // 实时聊天
    handleChatSend(state,params){
        state.chatList=params
    },
    // 转发
    handlePush_zjy(state){
        state.flagPush_zjy=!state.flagPush_zjy;
        state.flagHide_zjy=!state.flagHide_zjy;
    },
    // 获取某条具体的动态
    handleOne_zjy(state,params){
        state.detailsOne=params;
        console.log( params)
        
    },
    // 点赞
    handleAddDz_zjy(state,params){
        state.Moments_zjy.map((item,index)=>{
            if(item.id==params.id){
                if(item.flag==1){
                    item.flag=0
                    params.compliments--;
                }else{
                    item.flag=1
                    params.compliments++;

                }
            }
        })
        
    },
    // 关注
    handleGz_zjy(state,params){
        for(var i=0;i<state.Moments_zjy.length;i++){
            if(state.Moments_zjy[i].id==params){
               if(state.Moments_zjy[i].statu==1){
                state.Moments_zjy[i].statu=0
               }else{
                state.Moments_zjy[i].statu=1
               }
               
            }
        }
    },
    // 保存评论id
    handlePid(state,params){
        params.replies.map((item,index)=>{
            item.createtime=getMyDate.getMyDay(item.createtime)
        })
        state.plList=params.replies
    }
}