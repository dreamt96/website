<template>
  <div class="root">
    <drop-down :data="headers"/>
    <input type="text"/>
    <button>search</button>
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
      headers: []
    }
  },
  mounted() {
    for (const conf of this.headerConfig) {
      // @ts-ignore
      this.headers.push({name: conf.name});
    }
  }
})
</script>

<style scoped lang="scss">
.root {
}
</style>
