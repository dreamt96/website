<template>
  123
  {{ txt }}
</template>
<script lang="ts">
import {Vue} from "vue-class-component";
import configStr from "raw-loader!../../../writing/writing.config.json.txt";
import WritingConfig from "@/components/blog/WritingConfig";

export default class Blog extends Vue {
  txt = "";
  config: WritingConfig= WritingConfig.ofDefault();

  // constructor() {
  //   super();
  //   this.txt = "txt";
  //   // this.config = JSON.parse(configStr);
  // }


  mounted() {
    console.log("1");
    console.log(configStr);
    console.log("1");
    console.log("2");
    console.log(configStr.replaceAll("\\r","").replaceAll("\\n","").replaceAll("\\",""));
    console.log("2");
    console.log("3");
    console.log(JSON.parse(configStr.replaceAll("\\r","").replaceAll("\\n","").replaceAll("\\","")));
    console.log("3");
    for (let i = 0; i < this.config.blogs.length; i++) {
      let blog = this.config.blogs[i];
      this.txt += blog.title;
      this.txt += "\n";
      this.txt += require("../../../writing/"+blog.path);
      this.txt += "\n";
    }


    // setInterval(() => {
    //   let num = Date.now() % 2 + 1;
    //   let raw = require("../../../writing/" + num + ".md");
    //   this.txt = JSON.stringify(raw);
    // }, 500)
  }
}
</script>

<style scoped>

</style>
