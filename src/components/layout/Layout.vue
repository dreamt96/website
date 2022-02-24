<template>
  <div class="root">
    <Header/>
    <Sidebar :type="simpleConstant.sidebarType.right"/>
    <MainContent/>
    <Sidebar :type="simpleConstant.sidebarType.left"/>
    <Footer/>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from "@/components/layout/Header.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
import MainContent from "@/components/layout/MainContent.vue";
import Footer from "@/components/layout/Footer.vue";
import simpleConstant from "@/components/constant/SimpleConstant";

export default defineComponent({
  name: 'Layout',
  components: {Footer, MainContent, Sidebar, Header},
  data() {
    return {
      simpleConstant: simpleConstant
    }
  }
});
</script>

<style scoped lang="scss">
.root {

}

</style>
