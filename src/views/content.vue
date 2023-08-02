<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <div style="height: 100%; background-color:white;">
                    <van-search v-model="search_value" placeholder="请输入搜索关键词" />
                    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了">
                        <van-cell v-for="(item, index) in all_list" :key="index" :title="item.name"
                            :class="[daRadio == item.code ? 'cell-check' : '']" @click="accountClick(item)" />
                    </van-list>
                </div>
            </el-aside>
            <el-container style="padding: 0;">
                <div style="width: 70vw;background-color: rgba(255, 255, 255, .9);">
                    <el-header style="padding: 0;">
                        <div style="display: flex;align-items: center;height: 5vh;border:1px rgb(105, 99, 99) solid">
                            <span>{{ account_title }}</span>
                        </div>
                    </el-header>
                    <el-main style="padding: 0;">
                        <div style="border-left: 1px rgb(105, 99, 99) solid;border-right: 1px rgb(105, 99, 99) solid; height: 80vh;" class="conten-list">
                            <div v-for="(item, index) in chat_list" :key="index"
                                :class="[{ 'content-right': item.flag }, 'chat-content']">
                                <div class="dialog">{{ item.content }}</div>
                            </div>
                        </div>
                        <div class="input-content">
                            <textarea v-model="chat_message" @keydown.enter="addContent()"></textarea>
                        </div>
                    </el-main>
                </div>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
const search_value = ref()

let all_list = [
    {
        code: 1,
        account: 'zhangsan',
        name: '张三',
        item: [
            { name: '张三', flag: false, content: '我是张三' },
            { name: '我', flag: true, content: '你好' }
        ]
    },
    {
        code: 2,
        account: 'list',
        name: '李四',
        item: [
            { name: '李四', flag: false, content: '我是李四' },
            { name: '我', flag: true, content: '你好' }]
    }
]

let chat_list: any = reactive([])

const loading = ref(false);
const finished = ref(true);

let account_title = ref()
let daRadio = ref()
let chat_message = ref()

const accountClick = (value: any) => {
    chat_list.length = 0
    daRadio.value = value.code
    account_title.value = value.name
    let temp_list = all_list.filter(item => item.code == value.code)[0].item
    temp_list.forEach(item => chat_list.push(item))
}

const addContent = () => {
    chat_list.push({
        name: '我', flag: true, content: chat_message.value
    })
    chat_message = ref()
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

.tar .tar_back {
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

.conten-list {
    width: 100%;
    height: 100%;
    padding: 20px;
}

.conten-list .chat-content {
    display: flex;
    width: 100%;
    height: 4vh;
    align-items: center;
    justify-content: flex-start
}

.conten-list .content-right {
    display: flex;
    justify-content: flex-end
}

.input-content {
    border: 1px rgb(105, 99, 99) solid;
    height: 15vh;
}

.input-content textarea {
    width: 100%;
    height: 100%;
    padding: 20px;
}

.dialog {
    position: relative;
    padding: 10px;
    background: lightblue;
    color: #fff;
    border-radius: 4px;
}

/* .dialog::before {
      content: '';
      position: absolute;
      border: 8px solid;
      border-color: transparent lightblue transparent transparent;
      left: -16px;
      top: 8px;
    } */
</style>

