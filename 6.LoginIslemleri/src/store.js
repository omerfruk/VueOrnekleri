import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state =new Vuex.Store({
    state:{
        token : "",
        fbAPIKey : "AIzaSyBonvrx4b1T728OWNd1VcG-qu8r_bhXguc"
    },
    mutations:{
        setToken(state,token){
            state.token=token
        },
        clearToken(state){
            state.token=""
        }
    },
    actions:{
        login({commit,dispatch,state}, authData){

        },
        logout({commit,dispatch,state}){

        }
    },
    getters:{

    },
})