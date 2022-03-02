<template>
  <div class="root">
    <div class="blog-abstract" v-for="(item, i) in config.blogs" v-bind:key="i">
      <div class="link">
        <router-link :to="'/blogDetail?path=' + item.path + '&title='+ item.title">{{ item.title }}</router-link>
      </div>
      <div class="date">
        {{ item["publish-date"] }}
      </div>
    </div>
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
.root {
  .blog-abstract {
    padding: 0.3em 0;

    border-width: 1px;
    border-style: solid;

    margin: 0.5em;

    .link {

    }

    .date {

    }
  }
}
</style>
