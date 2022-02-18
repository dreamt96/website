<template>
<div>
  <div><router-link to="/home">home</router-link></div>
  <div><router-link to="/blog">blog</router-link></div>
  <div><router-view></router-view></div>
</div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class Layout extends Vue{
}
</script>

<style scoped>

</style>
