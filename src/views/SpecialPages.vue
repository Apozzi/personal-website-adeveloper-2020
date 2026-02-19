<template>
  <iframe class="frame" v-bind:src="'https://special-pages.web.app/' + this.$route.query.route" title="SpecialPages"></iframe>
</template>

<script>
import { trackPageVisit } from '@/utils/trackPageVisit';
export default {
  name: "SpecialPages",
  mounted() {
    //trackPageVisit(`special-pages-${this.$route.query.route}`);
  }
};
</script>

<style lang="scss">
.frame {
  height: 99vh;
  width: 100vw;
  border: none;
  overflow: hidden;
}
</style>