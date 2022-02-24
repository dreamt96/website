<template>
<div class="root">
  <div>
    <router-link to="/home">home</router-link>
  </div>
  <div>
    <router-link to="/blog">blog</router-link>
  </div>

</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Header"
});
</script>

<style scoped lang="scss">
.root{

}
</style>
