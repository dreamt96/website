<template>
  <div>
    <div>{{ title }}</div>
    <div v-html="content"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import StringUtil from "@/components/util/StringUtil";

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
  }
})
</script>

<style scoped>

</style>
