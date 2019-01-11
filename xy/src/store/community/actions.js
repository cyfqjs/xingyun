import axios from "../../lib"
export default {
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
    handlePush_zjy({commit}){
        commit("handlePush_zjy")
    }
}