<template>
  <div class="root">

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DropDown",
  props: {
    data: null
  }
})
</script>

<style scoped lang="scss">
.root {
  display: inline-block;
}
</style>
