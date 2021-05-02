<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <newProduct></newProduct>
    <br><br>
    <Progres></Progres>
    <br><br>
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    <Products></Products>
  </div>


</template>

<script>

import newProduct from "./component/newProduct"
import Progres from  "./component/Progres"
import Products from  "./component/Products"

  export default {

  components:{
    newProduct,
    Progres,
    Products
  },
    data() {
      return {
        imageList: [],
        product : {
            selectedImage: null
        }
      }
    },
    methods: {
      onChange(e) {
        const file = e.target.files[0];
        this.product.selectedImage = URL.createObjectURL(file);
      }
    }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

