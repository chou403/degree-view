import { defineStore } from 'pinia'
import { ref } from 'vue'

const useCounterStore = defineStore('counter', () => {
    const counter = ref(0)

    const increment = () => {
        counter.value++
    }

    return {
        counter,
        increment
    }
})

export default useCounterStore