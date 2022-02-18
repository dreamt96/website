<template>
  <Layout/>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Layout from './components/layout/Layout.vue';

@Options({
  components: {
    Layout
  },
})
export default class App extends Vue {
}
</script>

<style>

</style>
