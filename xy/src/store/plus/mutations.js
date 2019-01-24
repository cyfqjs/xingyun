export default {
    handleclose(state) {
        state.flag = false;
        location.href = state.linkto;
    },
    handleopen(state, parms) {
        if (parms == 2) {
            var str = location.href;
            state.flag = true;
            state.linkto = str;
        }


    }
}