import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0)

    const increment = () => {
        counter.value++
    }

    return {
        counter,
        increment
    }
})