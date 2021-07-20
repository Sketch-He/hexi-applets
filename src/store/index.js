import Vue from "vue"
import Vuex from "vuex"
import {UserStatus} from "../network/request";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userLogin: "111",
        userInfo: {}
    },
    getters: {
        getttersLogin(state) {
            UserStatus().then(res => {
                state.userLogin = res.code
            })
            return state.userLogin
        }
    },
    mutations: {
        getStatus(state) {
            UserStatus().then(res => {
                state.userLogin = res.code
            })
        }
    },
    actions: {
        setCityName({commit, state}, name) {
            commit("setCity", name)
        }
    }
})

export default  store