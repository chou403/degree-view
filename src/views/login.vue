<template>
    <div class="login flex-row-center-center">
        <!-- <div class="container"> -->
            <div class="web_login">
                <div class="tips">
                    <div class="title">密码登录</div>
                    <div>推荐使用
                        <a class="link_tips" hidefocus="true" @click="toCode"
                            href="javascript:void(0);" tabindex="7">快捷登录</a>，防止盗号。
                    </div>
                </div>
                <div></div>
                <account ref="accountRef" v-if="flag"></account>
                <qrCode ref="getQrCode" v-if="!flag"></qrCode>
            </div>
        <!-- </div> -->
    </div>
</template>

<script setup lang="ts">
import account from "@/components/login/account.vue";
import qrCode from "@/components/login/qrCode.vue";

const flag = ref(true)

const toCode = () => {
    flag.value = !flag.value
}

</script>

<style scoped>

.login {
    width: 100vw;
    height: 100vh;
    /* background-image: url(src/assets/img/one_price.jpg); */
    background-size: 100%;
    background-position: 50%;
}


.login_page {
    /* background-image: url('src/assets/img/one_price.jpg'); */
    /* background-size: cover;
    background-position: center;
    height: 50vh;
    width: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */

    width: 100%;
    height: 100%;
    background-size: 100%;
    background-position: 50%;


}


.login .container {
    width: 20vw;
    background: #fff;
    content: "viewport-units-buggyfill; width: 46.875vw";
}

.title {
    font-size: 20px;
    line-height: 28px;
    color: #000;
    margin: 16px 0 6px;
}

.link_tips,
.timeout a {
    color: #2E77E5;
}

.web_login {
    position: relative;
    /* height: 100%;
    top: 50%;
    margin-top: -166px; */
}

.web_login .tips {
    position: relative;
    margin: 0 auto 26px;
    z-index: 11;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    text-align: center;
}
</style>
