<template>
    <account ref="accountRef"></account>
    <!-- <qrCode ></qrCode> -->
</template>

<script setup lang="ts">


// import { webSocketStore } from "@/stores/webSocket";
// import { createWebSocket } from "@/utils/socket";

import account from "@/components/login/account.vue";
// import qrCode from "@/components/login/qrCode.vue";

// let accountRef = ref()


// import { showToast } from 'vant';

// const webSocket = webSocketStore();

// const mes = ref();
// const global_callback = (msg: any) => {
//     console.log("websocket的回调函数收到服务器信息：" + JSON.stringify(msg));
//     // console.log("收到服务器信息：" + msg);
//     mes.value = JSON.parse(JSON.stringify(msg));
//     webSocket.addMsg(mes);
//     showToast({
//         // title: "您有一条新的消息y",
//         message: mes.value.key,
//         position: "bottom",
//     });
// };

// createWebSocket(global_callback);

// var loginParam = {
//     username: '',
//     password: ''
// }
// const dataInfo = ref(loginParam)
// // const reactive_obj = reactive(loginParam)
// // console.log(reactive_obj);


// const onSubmit = (values: any) => {
//     console.log('submit', values)
// };

</script>

<style scoped>
.login_module {
    @apply bg-light-50 flex items-center justify-center flex-col
}
</style>
