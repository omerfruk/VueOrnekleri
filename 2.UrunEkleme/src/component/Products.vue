<template>
  <div class="row product-container">
    <Product v-for="product in productList">
      <img class="card-img-top" :src="product.selectedImage" :alt="product.title">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <small>
          <strong>Adet : </strong> {{ product.count }}
        </small>
        <br>
        <small>
          <strong>Fiyat : </strong> {{ product.prise }}
        </small>
        <br>
        <small>
          <strong>Tutar : </strong> {{ product.totalPrise }}
        </small>
      </div>
    </Product>
  </div>
</template>

<script>
import {eventBus} from "../main";
import Product from "./Product";

export default {
  components: {
    Product
  },
  data() {
    return {
      productList: [],
    }
  },
  created() {
    eventBus.$on("productAdded", (pruduct) => {
      if (this.product.length < 2) {
        this.productList.push(pruduct);
        eventBus.$emit("progresBarUpdate",this.productList.length);
      } else {
        alert("daga fazla kayit ekleyemezsin ");
      }

    });
  }
}
</script>

<style scoped>

</style>