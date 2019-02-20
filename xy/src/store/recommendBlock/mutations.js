export default {
    handleFlag(state) { 
        state.flag = true;
        
    },
    fnTarot(state, params) { 
        if (params.keyword == null) {
            state.keyword = '无';
        } else { 
            state.keyword = params.keyword;
        }
        if (params.elementary == null) {
            state.elementary = '无';
        } else { 
            state.elementary = params.elementary;
        }
        state.constellat = params.constellat;
        state.brand = params.brand;
        // console.log(params.img_path);
        let imgPath = "../../../../static/" + params.img_path;
        // console.log(imgPath);
        state.img_path = imgPath;
    }
}