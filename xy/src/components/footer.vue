<template>
	<div id="footer">
		<ul>
			<li>
               <router-link to="/recommend">推荐</router-link>
            </li>
            <li>
               <router-link to="/spot">看点</router-link>
            </li>
            <li>
               <router-link to="/plus"> + </router-link>
            </li>
            <li>
               <router-link to="/community">社区</router-link>
            </li>
            <li>
               <router-link to="/personal">个人中心</router-link>
            </li>
		</ul>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	#footer{
        width: 100%;
        height: 49px;
        background: #000;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    #footer>ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }

    #footer>ul>li{
        width: 100%;
        height: 100%;
    }

    #footer>ul>li>a{
        width: 100%;
        height: 100%;
        display: block;
        text-align: center;
        line-height: 49px;
        color: #fff;
    }

    #footer>ul>li>.router-link-active{
        background: #c33;
    }
</style>