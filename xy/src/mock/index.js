const Mock=require("mockjs");

let data= Mock.mock({
    "data|30":[{
        "id|+1": 1,
        "fansName": "@cname(3, 5)",
        "fansSign": "@csentence(7, 10)",
        "fansImg": "@image('200x100','@color','#FFF')"
    }]
})

//生成接口
Mock.mock("/getFans","post",(config)=>{
    return data;
})

