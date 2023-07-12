import { useCounterStore } from './modules/counter'
import { useCommonStore } from './modules/common'

export const useStore = () => ({
    counter: useCounterStore(),
    common: useCommonStore(),
})