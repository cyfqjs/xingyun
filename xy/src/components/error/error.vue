<template>
        <div id="error">
            <h2>404</h2>
            <h1>该链接不存在</h1>
            <router-link :to="{name:'hPage'}">
                <span class="backhPage">返回首页</span>
            </router-link>
        </div>
</template>

<script>
</script>

<style lang="scss">
    #error{
        padding-top: .4rem;
        h1 , h2 , .backhPage{
            width: 100%;
            text-align: center;
            display: block;
            color: #333;
            font-weight: normal;
        }
        .backhPage{
            margin-top: .4rem;
            font-weight: bold;
            font-size: .4rem;
            font-family: "仿宋";
            color: red;
        }
    }
</style>