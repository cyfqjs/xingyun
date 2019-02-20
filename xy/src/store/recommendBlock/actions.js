import axios from 'axios'

export default {
    fnTarot({ commit }) {let t = sessionStorage.getItem("token");
console.log(t);
        axios({
            url: "http://39.96.91.169/StarOfSea/index/getTarot",
            method: "post",
            headers: {
                "accessToken":t
            }
        }).then(data => {
            // console.log(data.data);
            commit("fnTarot", data.data);
        
            let imgPath = "../../../../static/" + data.data.img_path;
            var c = { "img":imgPath, "brand": data.data.brand, "keyword": data.data.keyword, "constellat": data.data.constellat, "describe": data.data.describe, "explain": data.data.explain }
            //将获取的数据存放在llq的localStore中
            sessionStorage.setItem("conData", JSON.stringify(c));
        });
    },
}