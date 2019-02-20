export default {
    handleName(state, e) { 
        // console.log(e.target.value);
        state.username = e.target.value;
    },
    handlePwd(state, e) { 
        // console.log(e.target.value);
        state.password = e.target.value;
    },
    clearPwd(state) { 
        state.password = "";
    }
}