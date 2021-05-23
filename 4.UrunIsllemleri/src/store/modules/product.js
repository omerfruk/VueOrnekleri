import Vue from "vue";
const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products
    },
    getProduct(state){

    }
}

const mutations = {
    updateProductList(state,product){
        state.products.push(product);
    }
}
const actions = {
    initApp({commit}){
       //Vue Resource islemleri
    },
    saveProduct({commit},peyload){
        Vue.http.post("https://fir-demo-project.firebaseio.com/products.json",peyload)
            .then((response)=>{
                console.log(response);
            })
    },
    sellProduct({commit},peyload){

    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}