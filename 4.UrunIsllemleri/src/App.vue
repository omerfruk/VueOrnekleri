<template>
  <div>
    <header-bar></header-bar>
    <body-bar></body-bar>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from "./components/share/header"
import FooterBar from "./components/share/footer"
import ProductList from "./components/product/productList"
import ProductSell from "./components/product/productSell"
import ProductPurchase from "./components/product/productPurchase"

export default {
components:{
  headerBar:HeaderBar,
  bodyBar:ProductList,
  footerBar:FooterBar,
}
}
</script>

<style>

</style>
