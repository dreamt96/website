<template>
  <div class="root">
    <div class="twitter" v-for="(item, i) in twitterList.twitters" v-bind:key="i">
      <div>{{item.content}}</div>
      <div>{{item.createTime}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import twitterList from "../../../writing/twitter/twitter.json";

export default defineComponent({
  name: 'Twitter',
  data() {
    return {
      twitterList: twitterList
    }
  },
  mounted() {

  }
});
</script>

<style scoped lang="scss">
.root {
  display: flex;
  flex-direction: column-reverse;

  .twitter{
    border-color: aqua;
    border-width: 1px;
    border-style: groove;

    margin-bottom: 1em;

    width: 30em;
  }
}

</style>
