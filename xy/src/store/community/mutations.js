export default {
    handleMoments_zjy(state,params){
        state.Moments_zjy=params;
    },
    handleTalklist_zjy(state,params){
        state.Talklist_zjy=params;
    },
    handlePush_zjy(state){
        state.flagPush_zjy=!state.flagPush_zjy;
        state.flagHide_zjy=!state.flagHide_zjy;

    }
}