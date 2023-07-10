import { createPinia } from 'pinia'
import modules from "./content"

const pinia = createPinia()
pinia.use(modules)

export default pinia
