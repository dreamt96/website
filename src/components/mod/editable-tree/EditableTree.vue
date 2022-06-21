<template>
  <div class="root">

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "EditableTree",
  props: {
    node: TreeNode
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {

    }
  }
})
</script>

<style scoped lang="scss">
.root {
}
</style>
