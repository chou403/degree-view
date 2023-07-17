<template>
    <div class="flex-row-center-center">
        <van-image width="100" height="100" :src="srcInfo" />
        <van-button round block type="primary" @click="getQrCode">
            刷新
        </van-button>
    </div>
</template>

<script setup lang="ts">
import login from '@/apis/modules/login';

var srcInfo = ref()

const getQrCode = async () => {
    let result = await login.getLoginQr()
    let blob = new Blob([result]);

    const imgUrl = window.URL.createObjectURL(blob)
    srcInfo.value = imgUrl
}

getQrCode()

defineExpose({
    getQrCode
})

</script>

<style scoped>
</style>
