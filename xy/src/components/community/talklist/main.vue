<template>
    <div id="main_zjy">
        <ul class="list_zjy">
            <li>
                <p class="photo_zjy"><img src="@/assets/community/img/tx.jpeg" alt=""></p>
                <p class="message_zjy">天才少年<span>此处最多显示14个字</span></p>
                <p class="time_zjy">下午14:22 <img src="@/assets/community/img/msg.png" alt=""></p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #main_zjy{
        width:100%;
        height:100%;
        min-height:1000rem;
        background: #221D3B;
    }
    #main_zjy>.list_zjy{
        width:100%;
        height:auto;
    }
    #main_zjy>.list_zjy>li{
        width:100%;
        height:auto;
        padding: .15rem .2rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>