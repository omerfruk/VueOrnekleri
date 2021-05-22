import Vue from "vue";
import productSell from "./components/product/productSell";
import productPurchase from "./components/product/productPurchase";
import productList from "./components/product/productList";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes =[
    {path :"/" , component:productList},
    {path :"/urun-islemleri" , component: productPurchase},
    {path :"/urun-cikisi" , component:productSell},
    {path :"*" , redirect :"/"},
];

export const router = new VueRouter({
    mode: "history",
    routes
});