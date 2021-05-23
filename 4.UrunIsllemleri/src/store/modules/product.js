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
    saveProduct({commit,state},product){
        Vue.http.post("https://urun-islemleri-7f6bd-default-rtdb.firebaseio.com/products.json",product)
            .then((response)=>{
                product.key=response.body.name;
                commit("updateProductList", product);
                console.log(state.products);
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