import useCounterStore from './modules/counter'
import useCommonStore from './modules/common'

const useStore = () => ({
    counter: useCounterStore(),
    common: useCommonStore(),
})

export default useStore
