<template>
  <div class="root">
    <div class="title">{{ title }}</div>
    <div v-html="content"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import StringUtil from "@/components/util/StringUtil";
import DomUtil from "@/components/util/DomUtil";
import PathUtil from "@/components/util/PathUtil";

export default defineComponent({
  name: "BlogDetail",
  data() {
    return {
      title: '',
      path: '',
      content: "",
    }
  },
  props: {},
  mounted() {
    this.title = this.$route.query.title ? this.$route.query.title.toString() : "blank";
    this.path = this.$route.query.path ? this.$route.query.path.toString() : "blank";
    this.content = StringUtil.markdownToHtml(require("../../../writing/" + this.path).default);
    this.processImage();
  },
  methods: {
    processImage() {
      setTimeout(() => {
        let elements = document.querySelectorAll("img");
        for (const element of elements) {
          element.setAttribute("class", "hidden")
          let path = DomUtil.getAttributeValue(element, "src");

          const myIcon = new Image();
          myIcon.src = require("../../../writing/" +
            PathUtil.remove(this.path, PathUtil.count(this.path) - 1) + "/" +
            PathUtil.remove(path, 0)
          );
          // @ts-ignore
          element.parentElement.insertBefore(myIcon, element);
        }
      }, 500);
    }
  }
})
</script>

<style scoped lang="scss">


//h1 {
//  font-size: 1.8rem;
//}
//
//h2 {
//  font-size: 1.5rem;
//}
//
//h3 {
//  font-size: 1.2rem;
//}
//
//h4 {
//  font-size: 0.8rem;
//}
//
//h5 {
//  font-size: 0.6rem;
//}
</style>
