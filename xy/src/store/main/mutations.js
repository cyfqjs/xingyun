export default{
    handleIndex(state,params){
        state.personIndex=params;
    },
    handleTime(state,params){
        state.personTime=params;
    },
    handleGetData(state,params){
        state.fansData=params;
    },
    handleGetFoucson(state,params){
        state.foucsonData=params;
    }
}