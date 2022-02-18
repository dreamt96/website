<template>
  123
  {{txt}}
</template>
<script lang="ts">
import {Vue} from "vue-class-component";
import markdown from "raw-loader!./first-blog.md";

export default class Blog extends Vue {
  txt= "string";

  mounted(){
    this.txt = markdown
  }
}
</script>

<style scoped>

</style>
