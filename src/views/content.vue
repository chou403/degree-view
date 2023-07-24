<template>
    <div class="main">
        <div style="width: 30vw;background-color:white;border-right:1px solid aliceblue">
            <van-search v-model="search_value" placeholder="请输入搜索关键词" />
            <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了">
                <van-cell v-for="(item, index) in list" :key="index" :title="item.name"
                    :class="[daRadio == item.code ? 'cell-check' : '']" @click="accountClick(item)" />
            </van-list>
        </div>
        <div style="width: 70vw;background-color: rgba(255, 255, 255, .9);">
            <van-sticky :offset-top="0">
                <div class="tar">
                    <span>{{ chat_title }}</span>
                    <van-nav-bar title="对方正在娇羞中...">
                        <template #right>
                            <van-icon name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
                </div>
            </van-sticky>

            <div style="border: 1px solid;height: 80vh;">

            </div>

            <div style="border: 1px salmon solid;height: 15vh;">
                <textarea name="" id="" style="width: 100%;height: 100%;padding: 20px;"></textarea>
            </div>

            <!-- <van-popover v-model="showPopover" trigger="manual" :actions="actions" placement="right-end" :offset="[0, -130]"
                @select="onSelect">
                <template #reference>
                    <div @touchstart="start()" @touchend="end()" @click="showPopover = false" class="content">
                        <ul>
                            <li v-for="(item, index) in loveArray" :key="index" :class="'text-' + item.class"
                                :style="{ '--url': item.url }">
                                <span>{{ item.text }}</span>
                            </li>
                        </ul>
                    </div>
                </template>
            </van-popover> -->
        </div>
    </div>
</template>

<script setup lang="ts">
const loveArray = ref()
const actions = ref()
const showPopover = ref()
const search_value = ref()


const list = ref([
    { code: 1, name: '张三' }, { code: 2, name: '李四' }
]);
const loading = ref(false);
const finished = ref(false);

let chat_title = ref()
let daRadio = ref()

const accountClick = (item: any) => {
    daRadio.value = item.code
}

// const onLoad = () => {
//     // 异步更新数据
//     // setTimeout 仅做示例，真实场景中一般为 ajax 请求
//     setTimeout(() => {
//         for (let i = 0; i < 10; i++) {
//             list.value.push(list.value.length + 1);
//         }

//         // 加载状态结束
//         loading.value = false;

//         // 数据全部加载完成
//         if (list.value.length >= 40) {
//             finished.value = true;
//         }
//     }, 1000)
// }

const start = () => {

}
const end = () => {
}
const onSelect = () => {

}
</script>

<style scoped>
.content_background {
    background-color: aquamarine;

}

.cell-check {
    background-color: ghostwhite;
}

.main {
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-size: 16px;
    position: relative;
    background-color: #ededed;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
}

.main .tar .tar_back {
    background-color: #ededed;
    box-shadow: 0px 1px 1px 0px rgba(212, 212, 212, 0.6);
}

.van-popover__wrapper {
    width: 100%;
}

.main ul {
    padding: 20px 45px;
    list-style: none;
}

.main li {
    padding: 10px 10px 10px 10px;
    margin-bottom: 5px;
    position: relative;
    /* 让页面内的文字不可被选中 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.main li span {
    display: inline-block;
    border-radius: 7px;
    background: #a6e860;
    padding: 6px 10px 8px 10px;
    max-width: 88%;
    word-wrap: break-word;
}

.main li.text-left span {
    background: white;
}

/* 伪元素类,在文本框前面加上头像 */
.main li.text-left:before {
    content: "";
    width: 38px;
    height: 38px;
    border-radius: 3px;
    display: block;
    background: var(--url);
    background-size: 100%;
    position: absolute;
    left: -40px;
    top: 10px;
}

/* 伪元素类 加上气泡框的角 */
.main li.text-left span:after {
    content: "";
    width: 0px;
    height: 0px;
    display: block;
    /* transparent 透明色 */
    border: 7px solid transparent;
    /* 在右边生成一个白色的小三角 */
    border-right: 7px solid white;
    position: absolute;
    left: -3px;
    top: 12px;
}

.text-right {
    text-align: right;
}

.text-right span {
    text-align: left;
}

.main li.text-right:after {
    content: "";
    width: 38px;
    height: 38px;
    border-radius: 3px;
    display: block;
    background: var(--url);
    background-size: 100%;
    position: absolute;
    right: -38px;
    top: 10px;
}

.main li.text-right span:after {
    content: "";
    width: 0px;
    height: 0px;
    display: block;
    border: 7px solid transparent;
    border-left: 7px solid #a6e860;
    position: absolute;
    right: -3px;
    top: 11px;
}

.changeButton {
    text-align: center;
}

p {
    /* text-align: center; */
    margin-left: 70px;
    font-size: 12px;
    color: rgb(133, 131, 131);
}

.button {
    margin: 50px auto;
    border-radius: 8px;
}
</style>

