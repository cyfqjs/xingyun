export default {
    // 获取动态列表
    handleMoments_zjy(state,params){
        state.Moments_zjy=[...state.Moments_zjy,...params];
    },
    // 私信列表
    handleTalklist_zjy(state,params){
        state.Talklist_zjy=params;
    },
    // 转发
    handlePush_zjy(state){
        state.flagPush_zjy=!state.flagPush_zjy;
        state.flagHide_zjy=!state.flagHide_zjy;
    },
    // 获取某条具体的动态
    handleOne_zjy(state,params){
        state.detailsOne=params;
    },
    // 点赞
    handleAddDz_zjy(state,params){
        state.Moments_zjy.map((item,index)=>{
            if(item.id==params.id){
                if(item.flag==1){
                    item.flag=0
                    params.compliments--;
                }else{
                    item.flag=1
                    params.compliments++;

                }
            }
        })
        
    },
    // 关注
    handleGz_zjy(state,params){
        for(var i=0;i<state.Moments_zjy.length;i++){
            if(state.Moments_zjy[i].id==params){
               if(state.Moments_zjy[i].statu==1){
                state.Moments_zjy[i].statu=0
               }else{
                state.Moments_zjy[i].statu=1
               }
               
            }
        }
    }
}