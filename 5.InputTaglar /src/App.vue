<template>
 <div class="container">
    <tags></tags>
 </div>
</template>

<script>
import tags from "./components/tags";
export default {
  data() {
    return {
      tags: ['deneme', 'text'],
      error: false,
    }
  },
  components:{
    tags
  }
}
</script>

<style>


</style>
