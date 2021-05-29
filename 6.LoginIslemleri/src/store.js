import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "",
        fbAPIKey: "AIzaSyBonvrx4b1T728OWNd1VcG-qu8r_bhXguc"
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {
        login({commit, dispatch, state}, authData) {
            let ApiLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if (authData.isUser) {
                ApiLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }
            axios.post(ApiLink + this.state.fbAPIKey,
                {email: authData.email, password: authData.password, returnSecureToken: true}
            ).then(response => {
                console.log(response)
            })
        },
        logout({commit, dispatch, state}) {

        }
    },
    getters: {},
})