import axios from "../../lib"
export default {
    handleMoments_zjy({commit,state}){
        axios({
            method:"get",
            url:"http://localhost:3000/Moments",
            data:{
                pageIndex_zjy:state.pageIndex,
            }

        })
        .then(data=>{
            commit("handleMoments_zjy",data);
        })
    },
    handleTalklist_zjy({commit,state}){
        axios({
            method:"get",
            url:"http://localhost:3000/Talktlist",
        })
        .then(data=>{
            commit("handleTalklist_zjy",data);
        })
    }, 
    handlePush_zjy({commit}){
        commit("handlePush_zjy")
    }
}