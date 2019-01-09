export default {
    handleHomeData(state, params) {
        state.banners = params.banners;
        state.others = params.others;
        state.presets = params.presets;
        state.tabs = params.tabs;
    }
}
