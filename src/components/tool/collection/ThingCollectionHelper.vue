<template>
  <div class="root">
    <editable-tree/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import EditableTree from "@/components/mod/editable-tree/EditableTree.vue";

export default defineComponent({
  name: "ThingCollectionHelper",
  components: {EditableTree}
})
</script>

<style scoped lang="scss">
.root {
}
</style>
