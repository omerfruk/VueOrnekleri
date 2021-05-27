<template>
  <div class="tag-container">
    <tag
        v-for="(tag, index) in tags"
        :tag="tag"
        :index="index"
        @removeOneTagEvent="removeOneTag($event)"
    ></tag>
    <input
        type="text"
        @keydown.enter="addTag"
        @keydown.backspace="removeTag"
    >
    <div class="error" v-if="error">bu etiket daha önceden eklenmiş !!!</div>
  </div>
</template>

<script>
import tag from "./tag";

export default {
  components: {
    tag,
  },
  data(){
    return{
    tags: ['deneme','test'],
    error:false
    }
  },
  methods:{
    addTag(event) {
      let text = event.target;
      let matchedTag = false
      if (text.value.length > 0) {
        this.tags.forEach(tag => {
          if (tag === text.value.toLowerCase()) {
            matchedTag = true
          }
        })

        if (!matchedTag) {
          this.tags.push(text.value)
          text.value=''
        } else {
          this.error = true;
          setTimeout(() => {
            this.error = false
          }, 2000)
        }

      }
    },
    removeTag(e){
      if (e.target.value<=0){
        this.tags.splice(this.tags.length - 1,1)
      }
    },
    removeOneTag(index){
      this.tags.splice(index,1)
    }
  }
}
</script>

<style >
body {
  font-family: sans-serif;
}

.tag-container {
  border: 1px solid #ccc;
  padding: 20px;
}

input {
  outline: none;
  height: 30px;
  width: 100px;
}

.error {
  font-size: 12px;
  color: red;
  margin-top: 5px;
}
</style>