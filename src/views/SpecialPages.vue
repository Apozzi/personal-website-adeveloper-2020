<template>
  <iframe class="frame" v-bind:src="'https://special-pages.web.app/' + this.$route.query.route" title="SpecialPages"></iframe>
</template>

<script>
export default {
  name: "Archive"
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