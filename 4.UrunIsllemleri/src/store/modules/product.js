import Vue from "vue";
import {router} from "../../router";

const state = {
    products: []
}

const getters = {
    getProducts(state) {
        return state.products
    },
    getProduct(state) {
        return key => state.products.filter(element => {
            return element.key == key;
        })
    }
}

const mutations = {
    updateProductList(state, product) {
        state.products.push(product);
    }
}
const actions = {
    initApp({commit}) {
        //Vue Resource islemleri
        Vue.http.get("https://urun-islemleri-7f6bd-default-rtdb.firebaseio.com/products.json")
            .then(response => {
                let data = response.body;
                for (let key in data) {
                    data[key].key = key;
                    commit("updateProductList", data[key]);
                }
            })
    },
    saveProduct({commit, state, dispatch}, product) {
        Vue.http.post("https://urun-islemleri-7f6bd-default-rtdb.firebaseio.com/products.json", product)
            .then((response) => {
                //ürün listeleme icin
                product.key = response.body.name;
                commit("updateProductList", product);
                //aliş satış islemleri icin
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch("setTradeResult", tradeResult)
                router.replace("/")
            })
    },
    sellProduct({commit, state, dispatch}, peyload) {

        let product = state.products.filter(element => {
            return element.key == peyload.key;
        })
        if (product) {
            let totalCount = product[0].count - peyload.count;
            Vue.http.patch("https://urun-islemleri-7f6bd-default-rtdb.firebaseio.com/products/" + peyload.key + ".json", {count: totalCount})
                .then(response => {
                    product[0].count = totalCount;
                    let tradeResult = {
                        purchase: 0,
                        sale: product[0].price ,
                        count: peyload.count
                    }
                    dispatch("setTradeResult", tradeResult)
                    router.replace("/")
                })
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}