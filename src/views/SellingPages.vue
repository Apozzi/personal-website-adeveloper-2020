<template>
  <div>
    <pre class="selling-page-tag" v-if="isOpen">
      For Sale!
      If you have any interest contact:
      Email: eanderea1@gmail.com
      Whatsapp: +55 (47) 997127578
      <div class="selling-page-btn selling-page-close" v-on:click="toggle" >x</div>
    </pre>
    <div class="selling-page-btn selling-page-open" v-on:click="toggle" v-if="!isOpen" >⯆</div>
    <iframe class="frame" v-bind:src="this.$route.query.route" title="SpecialPages"></iframe>
  </div>
</template>

<script>
export default {
  name: "Archive",
  data() {
    return { 
      isOpen: true,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
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

.selling-page-tag {
  text-align: initial;
  position: absolute;
  right: 97px;
  top: 42px;
  background: #c91e43;
  font-size: 15px;
  padding: 30px 22px 0px 0px;
  color: white;
  border-radius: 12px;
  height: 121px;
}

.selling-page-open {
  right: 105px;
  top: 65px;
}

.selling-page-close{
  top: 7px;
  right: 11px;
}

.selling-page-btn {
  position: absolute;
  font-size: 22px;
  background: #d14362;
  border-radius: 19px;
  padding: 0px 10px;
  cursor: pointer;
}
</style>