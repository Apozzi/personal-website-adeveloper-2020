<template>
  <div class="footer">
    <p class="commons">© 2020 Anderson R. Pozzi. All rights reserved.</p>
    <p class="credit">Developted with Vue.js</p>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .footer {
    height: 200px;
    background-color: #f6f6f6;
  }
  .commons {
    padding-top: 45px;
    margin: 0;
    display: inline-block;
    list-style: none;
    text-align: center;
    color: #b9b9b9;
    font-size: 18px;
    font-weight: 100;
  }

  .credit {
    color: #b9b9b9;
  }
</style>


