<template>
  <div class="root">
    <div v-for="(item,i) in headers" v-bind:key="i">
      <router-link :to="item.path" class="link">{{ item.name }}</router-link>
      <div>|</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import data from "@/config/header.json";

export default defineComponent({
  name: "Header",
  data() {
    return {
      headers: data.header
    }
  }
});
</script>

<style scoped lang="scss">
.root {
  padding-bottom: 0.5em;
  div {
    display: inline-block;
    .link{
      font-size: 1.2em;
    }
  }
}
</style>
