import axios from 'axios'
export default {
    toThree({state}) {
        axios({
            method: "post",
            url: "http://39.96.91.169:8080/StarOfSea/login/reginDetails",
            data: {
                address: state.address,
                nickname: state.nickname,
                sex: state.sex,
                birthday:state.birthday
            }
        }).then(data => { 
            console.log(data);  
        })
     }
}