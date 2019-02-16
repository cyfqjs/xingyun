import axios from "../../lib"
var  websocket = null;
import getMyDate from "../../components/community/time"
export default {
    // 获取动态列表
    handleMoments_zjy({commit,state}){
        axios({
            method:"get",
            url:"http://39.96.91.169/StarOfSea/community/getShares",
            // headers:{"Content-type":"application/json"},
            withCredentials:true
        })
        .then(data=>{
            commit("handleMoments_zjy",data.shares);
            // commit("handleTalklist_zjy",data.Talktlist);
        })
    },
    // 私信列表
    handleTalklist_zjy({commit,state}){
            let websocket = null;
            if ('WebSocket' in window) {
                websocket = new WebSocket("ws://39.96.91.169:8080/StarOfSea/websocket/321");
            } else {
                alert('当前浏览器 Not support websocket');
            }
            websocket.onopen=function () {
                // document.getElementById('message').innerHTML="WebSocket连接成功";
            };
            websocket.onmessage=function (event) {
                setMessageInnerHTML(event.data);
            };
            window.onbeforeunload = function () {
                closeWebSocket();
            };
            function setMessageInnerHTML(jsonString) {
                let arr=jsonString;
                var msgs = JSON.parse(arr);
                // var string='';
                // for (var i = 0; i < msgs.length; i++) {
                // 	string += 
                // 	"<li> <img style='border-radius: 20px; vertical-align: middle; width: 40px' src='"+msgs[i].imgpath+"' onclick='openView()'>"+msgs[i].name+"<span style='margin-left: 10px;'>"+msgs[i].content+"</span>未读数："+msgs[i].unread+"</li>"
                // }
                // document.getElementById('message').innerHTML=string;
                
                commit("handleTalklist_zjy",msgs)
                
            };
            function closeWebSocket() {
                websocket.close();
            }

        },
    // 聊天室记录
   
    handleChat({commit},params){
		if ('WebSocket' in window) {
			websocket = new WebSocket("ws://39.96.91.169:8080/StarOfSea/websocket/321a123");
		} else {
			alert('当前浏览器 Not support websocket');
		}
		websocket.onopen = function() {
			// document.getElementById('message').innerHTML = "WebSocket连接成功";
		};
		websocket.onmessage = function(event) {
			setMessageInnerHTML(event.data);
		};
		window.onbeforeunload = function() {
			closeWebSocket();
		};

		function setMessageInnerHTML(jsonString) {
			var arr = jsonString;
            var msgs = JSON.parse(arr);
            commit("handleChat",{msg:msgs,friend:params})
        }
		function closeWebSocket() {
			websocket.close();
        }


    },
    // 实时聊天
    handleChatSend({dispatch,commit},params){
        var message={};
        message.sid="123";
        message.rid="321";
        message.content=params
        var send=JSON.stringify(message);
        websocket.send(send);
        dispatch("handleChat")
    },
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
        console.log(params.eid)
        if(params.con==3){
            num=3;
            id=params.eid;
        }else{
            num=4;
            params.replies.map((item,index)=>{
                if(item.id==params.eid){
                    id=item.id
                }
            })
            console.log(id,num,params.main_zjy)
            
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
        axios({
            method:"get",
            url:url_zjy,
            data:{
                
                fid:params.uid,
            },
            withCredentials:true
        })
        .then(data=>{
            console.log(data)
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
            console.log(1)
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