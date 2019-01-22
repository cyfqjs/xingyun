export default {
    handleNickname(state, e) { 
        console.log(e.target.value);
        state.nickname = e.target.value;
    },
    handleSex(state, e) { 
        console.log(e.target.value);
        
        state.sex = e.target.value;

    },
    handleBirthday(state, e) { 
        console.log(e.target.value);
        
        state.birthday = e.target.value;

    },
    handleAddress(state, e) { 
        console.log(e.target.value);
        
        state.address = e.target.value;

    }
}