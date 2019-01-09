<template>
	<div id="footer">
		<ul>
			<li v-for="(item,index) in navs" >
               <router-link :to="{name:item.name}">
               		<span>{{item.title}}</span>
               </router-link>
            </li>
            
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navs:[
					{
						name:"recommend",
						title:"推荐"
					},
					{
						name:"spot",
                        title:"看点",
					},
					{
						name:"plus",
						title:" + "
					},
					{
						name:"community",
						title:"社区"
					},
					{
						name:"personal",
						title:"个人中心"
					}
					
				]
			}
		}
	}

</script>

<style>
    #footer {
        width: 100%;
        height: 49px;
        background: #000;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index:5;
    }
    
    #footer>ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    #footer>ul>li {
        width: 100%;
        height: 100%;
    }
    
    #footer>ul>li>a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: enter;
        text-align: center;
        line-height: 49px;
        color: #fff;
    }
    
    #footer>ul>li>a>span {
        font-size: 14px;
    }
    
    #footer>ul>li>.router-link-active {
        background: #c33;
    }
</style>