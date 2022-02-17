<template>
  <router-link to="/home">Go to Home</router-link>
  <router-link to="/login">Go to Login</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
