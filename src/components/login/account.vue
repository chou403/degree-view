<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="dataInfo.username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="dataInfo.password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<script setup lang="ts">
import { showFailToast } from 'vant';
import login from '@/apis/modules/login';

var loginParam = {
    username: '',
    password: ''
}
const dataInfo = ref(loginParam)
const onSubmit = async (values: any) => {
    let result = await login.commonLogin(values)
    if(result.code !== 200) {
        showFailToast(result.message)
    }
};

defineExpose({
    onSubmit
})


</script>

<style scoped></style>
