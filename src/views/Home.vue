<template>
  <div id="home" key="home" class="home">
    <MenuHome />
    <Banner msg="Vue.js App" />
    <FeatureGrid />
    <About />
    <Articles/>
    <Contact />
    <Map/>
    <Footer />
  </div>
</template>

<script>

import Banner from "@/components/Banner.vue";
import MenuHome from "@/components/MenuHome.vue";
import FeatureGrid from "@/components/FeatureGrid.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Map from "@/components/Map.vue";
import Articles from "@/components/Articles.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Banner,
    MenuHome,
    FeatureGrid,
    About,
    Contact,
    Map,
    Articles,
    Footer
  }
};
</script>

<style scoped lang="scss">
.home {
  overflow: hidden;
}
</style>
