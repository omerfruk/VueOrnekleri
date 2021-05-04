<template>
  <div>
    <div class="form-group">
      <label>Isim</label>
      <input type="text"
             class="form-control"
             :value="firsName"
      @input="nameChange(true,$event)">
    </div>
    <div class="form-group">
      <label>Soyisim</label>
      <input type="text"
             class="form-control"
             :value="lastName"
      @input="nameChange(false,$event)">
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  computed: {
    firsName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  },
  methods:{
    nameChange(isFirst,event){
      let FullName="";
      if (isFirst){
        FullName=event.target.value +' '+ this.lastName;
      }else{
        FullName=this.firsName +' '+ evet.target.value;
      }
      this.value=FullName;
      this.$emit("input",this.value)
    }
  }
}

</script>

