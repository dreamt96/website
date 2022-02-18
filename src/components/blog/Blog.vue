<template>
  <div v-html="txt"></div>
</template>
<script lang="ts">
import {Vue} from "vue-class-component";
import configStr from "raw-loader!../../../writing/writing.config.json.txt";
import WritingConfig from "@/components/blog/WritingConfig";
import StringUtil from "@/components/util/StringUtil";

export default class Blog extends Vue {
  txt = "";
  config: WritingConfig= WritingConfig.ofDefault();

  // constructor() {
  //   super();
  //   this.txt = "txt";
  //   // this.config = JSON.parse(configStr);
  // }


  mounted() {
    this.config = StringUtil.rowToString(configStr);
    for (let i = 0; i < this.config.blogs.length; i++) {
      let blog = this.config.blogs[i];
      this.txt += blog.title;
      this.txt += "<br/>";
      let a = require("../../../writing/"+blog.path);
      this.txt += JSON.stringify(a.default);
      this.txt += "<br/>";
      this.txt += "<br/>";
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
