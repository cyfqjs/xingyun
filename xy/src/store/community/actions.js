import axios from "../../lib"
export default {
    // 获取动态列表
    handleMoments_zjy({commit,state}){
        axios({
            method:"post",
            url:"http://39.96.91.169:8080/StarOfSea/community/getShares",
            headers:{"Content-type":"application/json"},
            data:{
                uid:1
            },
        })
        .then(data=>{
            commit("handleMoments_zjy",data.shares);
            // commit("handleTalklist_zjy",data.Talktlist);
            console.log(data)
        })
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
            url:"http://39.96.91.169:8080/StarOfSea/action/compliment",
            data:{
                aid:params.id,
                type:"3",
                uid:1,
                state:flagStatu
            },
        })
        .then((data)=>{
            if(data.code==1){
            dispatch("handleAddDz_zjy",params);
            }
        })
    },
    // 评论
    handleSendT_zjy({commit},params){
        console.log(params);
        axios({
            method:"post",
            url:"/api/mock/5c36ed7596e17359c184e353/action/addReply",
            data:{
                uid:state.loginBlock.username,
                aid:params.id,
                type:params.type,
                content:params.main_zjy,
            }

        }).then(data=>{
            if(data.code==1){

            }
        })
    },
    // 关注
    handleGz_zjy({commit,state},params){
        let url_zjy=null;
        if(params.statu==1){
            url_zjy="http://39.96.91.169:8080/StarOfSea/user/unattention"
        }else{
            url_zjy="http://39.96.91.169:8080/StarOfSea/user/attention"
        }
        axios({
            method:"post",
            url:url_zjy,
            data:{
                uid:params.uid,
                fid:100000
            }
        })
        .then(data=>{
           if(data.code==1){
               commit("handleGz_zjy",params.id)
           }
        })
        console.log(params.statu)
    },
    //获取某条具体动态
    handleOne_zjy({commit},params){
        axios({
            method:"post",
            url:"http://39.96.91.169:8080/StarOfSea/community/findShare",
            data:{
                aid:params.id,
                uid:params.uid
            }
        })
        .then(data=>{
            if(data.code==1){
                commit("handleOne_zjy",data.share)
                let details=JSON.stringify(data.share)
                sessionStorage.setItem("details",details)
            }

        })
    }
}