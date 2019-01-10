import axios from "../../lib"
export default {
    handleMoments_zjy({commit,state}){
        axios({
            url:"/api/mock/5c36ed7596e17359c184e353/community ",
        })
        .then(data=>{
            commit("handleMoments_zjy",data.Moments);
        })
    },
    handleTalklist_zjy({commit,state}){
        axios({
            method:"get",
            url:"/api/mock/5c36ed7596e17359c184e353/community",
        })
        .then(data=>{
            commit("handleTalklist_zjy",data.Talktlist);
        })
    }, 
    handlePush_zjy({commit}){
        commit("handlePush_zjy")
    }
}