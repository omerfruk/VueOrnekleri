import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";
import {router} from "./router";

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
        initAuth({commit, dispatch}) {
            let token = localStorage.getItem("token")
            if (token) {

                let expirationDate = localStorage.getItem("expirationDate")
                let nowDate = new Date().getTime()

                if (nowDate >= +expirationDate) {
                    console.log("token süresi gecnmis")
                    dispatch("logout")
                } else {
                    commit("setToken", token)
                    let timeSecond =+expirationDate - nowDate
                    console.log(timeSecond)
                    dispatch("setTimeoutTimer", timeSecond)
                    router.push("/")
                }
            } else {
                router.push("/auth")
                return false
            }
        },
        login({commit, dispatch, state}, authData) {
            let ApiLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if (authData.isUser) {
                ApiLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }
            return axios.post(ApiLink + this.state.fbAPIKey,
                {email: authData.email, password: authData.password, returnSecureToken: true}
            ).then(response => {
                commit("setToken", response.data.idToken)
                localStorage.setItem("token", response.data.idToken)
                // localStorage.setItem("expirationDate",new Data().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem("expirationDate", new Date().getTime() + 10000)


                //dispatch("setTimeoutTimer",+response.data.expiresIn * 1000)
                dispatch("setTimeoutTimer", 10000)
            })
        },
        logout({commit, dispatch, state}) {
            commit("clearToken")
            localStorage.removeItem("token")
            localStorage.removeItem("expirationDate")
            router.replace("/auth")

        },
        setTimeoutTimer({dispatch}, expiresIn) {
            setTimeout(() => {
                dispatch("logout")
            }, expiresIn)
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        }
    },
})