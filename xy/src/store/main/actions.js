import axios from "../../lib"

export default{
    handleGet({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c373fe95394183730861ee2/lei/fans",
        })
        .then((data)=>{
           // console.log(data);
            commit("handleGetData",data.data);
        })
    },
    handleGetFoucson({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c373fe95394183730861ee2/lei/foucson",
        })
        .then((data)=>{
         //   console.log(data);
            commit("handleGetFoucson",data.data);
        })
    }
}