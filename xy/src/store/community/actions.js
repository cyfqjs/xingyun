import axios from "../../lib"
export default {
    // 获取动态列表
    handleMoments_zjy({commit,state}){
        axios({
            method:"post",
            url:"/api/mock/5c36ed7596e17359c184e353/community/getShares ",
        })
        .then(data=>{
            commit("handleMoments_zjy",data.shares);
            commit("handleTalklist_zjy",data.Talktlist);

        })
    },
    // 转发
    handlePush_zjy({commit}){
        commit("handlePush_zjy")
    },
    // 点赞
    // handleAddpl_zjy({commit,state,dispatch},params){
    //     let flagStatu=null;
    //     params.flag==0?flagStatu=1:flagStatu=0;
    //     axios({
    //         method:"post",
    //         url:"/api/mock/5c36ed7596e17359c184e353/community/compliment",
    //         data:{
    //             // aid:state.Community.Moments_zjy.indexof(params),
    //             aid:params.id,
    //             type:"3",
    //             uid:"",
    //             state:flagStatu
    //         },
    //     })
    //     .then((data)=>{
    //         if(data.code==1){
    //         dispatch("handleMoments_zjy");
    //         }
    //     })
    // }
}