<template>
  123
  {{ txt }}
</template>
<script lang="ts">
import {Vue} from "vue-class-component";
// import markdown from "raw-loader!../../../writing/first-blog.md";

export default class Blog extends Vue {
  txt = "string";

  mounted() {
    setInterval(() => {
      let num = Date.now() % 2 + 1;
      let raw = require("raw-loader!../../../writing/" + num + ".md");
      this.txt = JSON.stringify(raw);
    }, 500)
  }
}
</script>

<style scoped>

</style>
