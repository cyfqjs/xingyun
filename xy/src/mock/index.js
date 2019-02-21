const Mock=require("mockjs");

let data= Mock.mock({
    "data|30":[{
        "id|+1": 1,
        "fansName": "@cname(3, 5)",
        "fansSign": "@csentence(7, 10)",
        "fansImg": "@image('200x100','@color','#FFF')"
    }]
})

Mock.mock("/getFans","post",(config)=>{
    return data;
})

let getFocus=Mock.mock({
    "data|20": [{
        "id|+1": 1,
        "foucsonName": "@cname",
        "foucsonSign": "@csentence(5, 10)",
        "fousonImg": "@image('200x100','@color()')"
    }]
})

Mock.mock("/getFocus","post",(config)=>{
    return getFocus;
})


let timeData=Mock.mock({
    "data|3":[{
        "id|+1":1,
        "title":"@ctitle(5,10)",
        "content":"@cparagraph(1,10)",
        "img":"@image('200x100','@color','#FFF')"
    }]
})

Mock.mock("/getTime","post",(config)=>{
    return timeData;
})

