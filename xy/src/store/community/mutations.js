export default {
    handleMoments_zjy(state,params){
        state.Moments_zjy=[...state.Moments_zjy,...params];
        console.log(1)
    },
    
    handleTalklist_zjy(state,params){
        state.Talklist_zjy=params;
    },
    handlePush_zjy(state){
        state.flagPush_zjy=!state.flagPush_zjy;
        state.flagHide_zjy=!state.flagHide_zjy;

    }
}