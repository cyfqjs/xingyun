import axios from 'axios'
export default {
    toThree({commit}) {
        axios({
            method: "post",
            url: "http://39.96.91.169/StarOfSea/login/reginDetails",
            data: {
                address: commit.address,
                nickname: commit.nickname,
                sex: commit.sex,
                birthday:commit.birthday
            }
        }).then(data => { 
            // console.log(data.data);
            // commit("toThree", data.data); 
            // console.log(data);
        })
     }
}