<template>
  <div v-for="(item, i) in config.blogs" v-bind:key="i">
    <router-link :to="'/blogDetail?path=' + item.path + '&title='+ item.title">{{ item.title }}</router-link>
  </div>
</template>
<script lang="ts">
import config from "../../../writing/writing.config.json";
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Blog",
  data() {
    return {
      config: config,
    }
  },
  mounted() {
    console.log(config);
    // this.config= StringUtil.rowToObject(configStr);
  }

});

</script>

<style scoped lang="scss">
div {

}
</style>
