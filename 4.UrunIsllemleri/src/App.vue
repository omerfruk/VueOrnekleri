<template>
  <div>
    <header-bar></header-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from "./components/share/header"
import FooterBar from "./components/share/footer"

export default {
components:{
  headerBar:HeaderBar,
  footerBar:FooterBar,
}
}
</script>

<style>

</style>
