<template>
  <div>
    <Layout/>
  </div>
</template>

<script lang="ts">
import Layout from './components/layout/Layout.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
});
</script>

<style scoped lang="scss">
div {

}
</style>
