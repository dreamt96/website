<template>
  <div>blog~~</div>
  <!--  <div v-html="txt"></div>-->
  <div v-for="(item, i) in config.blogs" v-bind:key="i">
    <router-link :to="'/blogDetail?path=' + item.path + '&title='+ item.title">{{ item.title }}</router-link>
  </div>
</template>
<script lang="ts">
import config from "../../../writing/writing.config.json";
import WritingConfig from "@/components/blog/WritingConfig";
import StringUtil from "@/components/util/StringUtil";
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Blog",
  data() {
    return {
      config: config,
    }
  },
  mounted() {
    console.log(config);
    // this.config= StringUtil.rowToObject(configStr);
  }

});
//
// export class Blog extends Vue {
//   txt = "";
//   config: WritingConfig = WritingConfig.ofDefault();
//
//   // constructor() {
//   //   super();
//   //   this.txt = "txt";
//   //   // this.config = JSON.parse(configStr);
//   // }
//
//
//   mounted() {
//     this.config = StringUtil.rowToString(configStr);
//     for (let i = 0; i < this.config.blogs.length; i++) {
//       let blog = this.config.blogs[i];
//       this.txt += blog.title;
//       this.txt += "<br/>";
//       let a = require("../../../writing/" + blog.path);
//       this.txt += JSON.stringify(a.default);
//       this.txt += "<br/>";
//       this.txt += "<br/>";
//     }
//
//     // setInterval(() => {
//     //   let num = Date.now() % 2 + 1;
//     //   let raw = require("../../../writing/" + num + ".md");
//     //   this.txt = JSON.stringify(raw);
//     // }, 500)
//   }
// }
</script>

<style scoped lang="scss">
div {

}
</style>
