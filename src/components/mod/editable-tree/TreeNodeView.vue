<template>
  <div class="root">

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "TreeNodeView",
  props: {
    positionX: {
      type: Number,
      default: 0
    },
    positionY: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      positionXData: this.positionX,
      positionYData: this.positionY,
    }
  },
  mounted() {
  },
  methods: {}
})
</script>

<style scoped lang="scss">
.root {
}
</style>
