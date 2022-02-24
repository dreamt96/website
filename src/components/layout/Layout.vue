<template>
  <div>
    <div>
      <router-link to="/home">home</router-link>
    </div>
    <div>
      <router-link to="/blog">blog</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Layout',
});
</script>

<style scoped lang="scss">
div {

}

</style>
