<template>
    <h1>home</h1>
    <h2>counter: {{counter}}</h2>
    <h2>content: {{result.data}}</h2>
</template>

<script setup lang="ts">
import api from '@/apis'
import useStore from '@/stores'
import {storeToRefs} from 'pinia'

const store = useStore()
const {counter} = storeToRefs(store.counter)

let result:any = {}

const test = async() => {
    let params = {}
    result = await api.common.testApi(params)
    console.log(result.data);
}

test()

</script>

