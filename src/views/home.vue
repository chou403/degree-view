<template>
    <div>home</div>
</template>

<script setup lang="ts">
import http from '@/apis/modules/common'

let params = {}
http.testApi(params)

</script>

