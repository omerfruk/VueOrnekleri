<template>
  <div>
    <header-bar></header-bar>
    <transtition name="fade" mode="out-in">
      <router-view></router-view>
    </transtition>
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
},
  created() {
  this.$store.dispatch("getTradeResult");
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .3s ease-out;
}
.fade-leave{}
.fade-leave-active{
  transition: opacity .3s ease-out;
}
</style>
