export default {
    fnTarot(state, params) {
    	state.flag = true;
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
        let imgPath = "../../../../static/" + params.img_path;
        state.img_path = imgPath;
    }
}