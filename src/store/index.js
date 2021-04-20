import Vue from 'vue'
import Vuex from 'vuex'

function importAllModules() {
    let allModules = {}
    let modules = require.context('./modules', true, /\.js$/)

    modules.keys().forEach((key) => {
        let moduleName = key.split('/').pop().split('.')[0]
        allModules[moduleName] = modules(key).default
    })
    return allModules
}

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: importAllModules()
})

export default store
