<template>
  <div>
    <div><h1>{{ title }}</h1></div>
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
          element.parentElement.appendChild(myIcon);
        }
      }, 500);
    }
  }
})
</script>

<style scoped lang="scss">
div {

}
</style>
