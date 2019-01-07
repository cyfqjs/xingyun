import axios from "../../lib"
export default {
    handleMoments({commit,state}){
        axios({
            method:"get",
            url:"http://localhost:3000/Moments",
            data:{
                pageIndex:state.pageIndex,
            }

        })
        .then(data=>{
            commit("handleMoments",data);
        })
    }
}