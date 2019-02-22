export default {

    handleopen(state, parms) {
        
        // if (parms == 2) {
        //     var str = location.href;
        //     state.flag = true;
        //     state.linkto = str.split("/")[4];
        // }
    },
    handtitle(state, e) {
        let val = e.target.value;
        state.bktitle = val;

    },
    handmain(state, e) {
        let val = e.target.value;
        state.bkmain = val;
    },
    handlang(state, e) {
        let val = e.target.value;
        state.langmain = val;
    }
}