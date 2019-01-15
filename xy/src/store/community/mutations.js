export default {
    // 获取动态列表
    handleMoments_zjy(state,params){
        state.Moments_zjy=[...state.Moments_zjy,...params];
    },
    
    handleTalklist_zjy(state,params){
        state.Talklist_zjy=params;
    },
    // 转发
    handlePush_zjy(state){
        state.flagPush_zjy=!state.flagPush_zjy;
        state.flagHide_zjy=!state.flagHide_zjy;
    },
}