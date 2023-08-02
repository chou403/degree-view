<template>
    <van-form @submit="onSubmit" :model="dataInfo">
        <van-cell-group inset>
            <van-field v-model="dataInfo.userCode" name="用户名" label="用户名" placeholder="请输入用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="dataInfo.password" type="password" name="密码" label="密码" placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                登录
            </van-button>
        </div>
    </van-form>
</template>

<script setup lang="ts">
import { showToast } from 'vant';
import login from '@/apis/modules/login';

var loginParam = {
    userCode: '',
    password: ''
}
const router = useRouter();
const dataInfo = ref(loginParam)
const onSubmit = async () => {
    console.log(dataInfo.value);
    
    let result = await login.commonLogin(dataInfo.value)
    console.log(result);
    
    if(result.code !== 200) {
        showToast(result.message)
    } else {
        router.push("/home")
    }
};

defineExpose({
    onSubmit
})

</script>

<style scoped></style>
