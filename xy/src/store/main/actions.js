import axios from "../../lib"

export default{

    // 个人主页信息
    handleIndex({commit}){
        axios({
            method:"get",
            url:"/api/user/getDetails",
            data:{
                uid:1
            }
        })
        .then((data)=>{
            //console.log(data.details);
            commit("handleIndex",data.details)
        })
    },

    //个人主页时间轴
    handleTime({commit}){
        axios({
            method:"post",
            url:"/getTime"
        })
        .then((data)=>{
            //console.log(data);
            commit("handleTime",data)
        })
    },


    handleGet({commit}){
        axios({
            method:"post",
            url:"/getFans",
        })
        .then((data)=>{
            // console.log(data);
            commit("handleGetData",data.data);
        })
    },


    handleGetFoucson({commit}){
        axios({
            method:"post",
            url:"/getFocus",
        })
        .then((data)=>{
         //   console.log(data);
            commit("handleGetFoucson",data.data);
        })
    }
}