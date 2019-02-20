import axios from "../../lib"
var  websocket = null;
import getMyDate from "../../components/community/time"
export default {
    // 获取动态列表
    handleMoments_zjy({commit,state}){
        // let t = sessionStorage.getItem("token");

        axios({
            method:"get",
            url:"http://39.96.91.169/StarOfSea/community/getShares",
            // headers:{"Content-type":"application/json"},
            withCredentials:true,
            // headers: {
            //     accessToken: t
            //     }
        })
        .then(data=>{
            console.log(data)
            commit("handleMoments_zjy",data.shares);
            // commit("handleTalklist_zjy",data.Talktlist);
        })
    },
    // 私信列表
    handleTalklist_zjy({commit,state}){
        let websocket = null;
        if ('WebSocket' in window) {
            // 创建一个websocket服务
                websocket = new WebSocket("ws://39.96.91.169:8080/StarOfSea/websocket/321");
            } else {
                alert('当前浏览器 Not support websocket');
            }
            websocket.onopen= ()=>{
                // document.getElementById('message').innerHTML="WebSocket连接成功";
            };
            websocket.onmessage= (event)=> {
                // 返回数据
                let arr=event.data;
                let msgs = JSON.parse(arr);
                commit("handleTalklist_zjy",msgs)
            };
            // onbeforeunload 事件在即将离开当前页面（刷新或关闭）时触发。
            window.onbeforeunload = ()=> {
                closeWebSocket();
            };
            function closeWebSocket() {
                // 关闭连接
                websocket.close();
            }

        },
    // 聊天室记录
    handleChat({commit},params){
        console.log(params)
        let uid=JSON.parse(sessionStorage.getItem("friend")).uid
        
		if ('WebSocket' in window) {
            // 123和321为好友id和自己的id   用a来连接
			websocket = new WebSocket("ws://39.96.91.169:8080/StarOfSea/websocket/321a123");
		} else {
			alert('当前浏览器 Not support websocket');
		}
		websocket.onopen = ()=> {
			// document.getElementById('message').innerHTML = "WebSocket连接成功";
		};
		websocket.onmessage = (event) =>{
            var arr = event.data;
            var msgs = JSON.parse(arr);
            // params为好友的相关信息，用来渲染头像和昵称
            commit("handleChat",{msg:msgs,friend:params})
        };
            // onbeforeunload 事件在即将离开当前页面（刷新或关闭）时触发。        
		window.onbeforeunload = ()=> {
			closeWebSocket();
		};
		function closeWebSocket() {
            // 关闭连接
			websocket.close();
        }
    },
    // 实时聊天
    handleChatSend({dispatch,commit},params){
        let uid=JSON.parse(sessionStorage.getItem("friend")).uid
        // console.log(uid)
        var message={};
         // 自己的id
         message.rid="321";
         //好友id
         message.sid="123";
        // 输入框的内容
        message.content=params
        var send=JSON.stringify(message);
        // 发送给后端
        websocket.send(send);
        dispatch("handleChat")
    },
    // 私信列表
    // handleTalklist_zjy({commit,state}){
    //     axios({
    //         method:"post",
    //         url:"/api/mock/5c36ed7596e17359c184e353/community/getShares",
    //         // data:{
    //         //     uid:1
    //         // },
    //     })
    //     .then(data=>{
    //         console.log(data)
    //         commit("handleTalklist_zjy",data.Talktlist);
    //     })
    // },
    // 转发
    handlePush_zjy({commit}){
        commit("handlePush_zjy")
    },
    // 点赞
    handleAddDz_zjy({commit,state,dispatch},params){
        let flagStatu=null;
        params.flag==0?flagStatu=0:flagStatu=1;
        axios({
            method:"post",
            url:"http://39.96.91.169/StarOfSea/action/compliment",
            data:{
                aid:params.id,
                type:"3",
                state:flagStatu
            },
            withCredentials:true
        })
        .then((data)=>{
            if(data.code==1){
            dispatch("handleAddDz_zjy",params);
            }
        })
    },
    // 评论
    handleSendT_zjy({commit,dispatch},params){
        let num=null;
        let id=null;
        if(params.con==3){
            num=3;
            id=params.id;
        }else{
            num=4;
            params.replies.map((item,index)=>{
                if(item.id==params.eid){
                    id=item.id
                }
            })  
        }
        axios({
            method:"post",
            url:"http://39.96.91.169/StarOfSea/action/addReply",
            data:{
                aid:id,
                type:num,
                opinion:"",
                content:params.main_zjy,
            },
            withCredentials:true

        }).then(data=>{
            if(data.code==1){

                dispatch("handleOne_zjy",params)
            }
        })
    },
    // 关注
    handleGz_zjy({commit,state},params){
        let url_zjy=null;
        if(params.statu==1){
            url_zjy="http://39.96.91.169/StarOfSea/user/unattention"
        }else{
            url_zjy="http://39.96.91.169/StarOfSea/user/attention"
        }
        axios.get(url_zjy,{
            params:{  
                fid:params.uid,
            },
            withCredentials:true
        })
        .then(data=>{
           if(data.code==1){
               commit("handleGz_zjy",params.id)
           }
        })
    },
    //获取某条具体动态
    handleOne_zjy({commit},val){
        axios.get("http://39.96.91.169/StarOfSea/community/findShare",{

            params:{
                aid:val.id,
            },
            withCredentials:true
        })
        .then(data=>{
            if(data.code==1){
                data.share.createdate=getMyDate.getMyDate(data.share.createdate)
                data.share.replies.map((item,index)=>{
                    item.createtime=getMyDate.getMyDay(item.createtime)
                })
                commit("handleOne_zjy",data.share)
                let details=JSON.stringify(data.share)
                sessionStorage.setItem("details",details)
            }

        })
    }
}