<template>
    <van-image
    width="100"
    height="100"
    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />

</template>

<script setup lang="ts">

import { webSocketStore } from "@/stores/webSocket";
import { createWebSocket } from "@/utils/socket";

import { showToast } from 'vant';

const webSocket = webSocketStore();

const mes = ref();
const global_callback = (msg: any) => {
    console.log("websocket的回调函数收到服务器信息：" + JSON.stringify(msg));
    // console.log("收到服务器信息：" + msg);
    mes.value = JSON.parse(JSON.stringify(msg));
    webSocket.addMsg(mes);
    showToast({
        // title: "您有一条新的消息y",
        message: mes.value.key,
        position: "bottom",
    });
};

createWebSocket(global_callback);

</script>

<style scoped>
.login_module {
    @apply bg-light-50 flex items-center justify-center flex-col
}
</style>
