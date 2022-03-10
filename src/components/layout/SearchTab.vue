<template>
  <div class="root">
    <drop-down :data="headers"/>
    <input v-model="searchKey" type="text"/>
    <router-link :to="'/searchResult?searchKey' + searchKey">search</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DropDown from "@/components/mod/DropDown.vue";

export default defineComponent({
  name: "SearchTab",
  components: {DropDown},
  props: {
    headerConfig: null,
  },
  data() {
    return {
      headers: [],
      searchKey: null
    }
  },
  mounted() {
    for (const conf of this.headerConfig) {
      // @ts-ignore
      this.headers.push({name: conf.name});
    }
  },
  methods: {}
})
</script>

<style scoped lang="scss">
.root {
}
</style>
