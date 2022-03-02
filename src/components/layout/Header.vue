<template>
  <div class="root">
    <div class="navigation">
      <div v-for="(item,i) in headers" v-bind:key="i">
        <router-link :to="item.path" class="link">{{ item.name }}</router-link>
        <div>|</div>
      </div>
    </div>
    <div class="search">
      <SearchTab :header-config="headers"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import data from "@/config/header.json";
import SearchTab from "@/components/layout/SearchTab.vue";

export default defineComponent({
  name: "Header",
  components: {
    SearchTab
  },

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

  .navigation {
    display: inline-block;

    div {
      display: inline-block;

      .link {
        font-size: 1.2em;
      }
    }

  }

  .search {
    display: inline-block;
    float: right;
  }
}
</style>
