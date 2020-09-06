<template>
  <div class="contact">
    <div class="title">
      <div class="contact-text">Contact-me via email!</div>
      <router-link to="/contact"><Button class="contact-button" label="Here!" /></router-link>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "@/components/Button.vue";


@Component({
  components: {
    Button
  }
})
export default class Contact extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .contact {
    height: 300px;
    background-color: #272727;
    background-image: url(https://www.transparenttextures.com/patterns/cartographer.png);
    background-attachment: fixed;
  }

  .title {
    color: #ffffff;
    width: 100%;
    font-weight: 400;
    line-height: 1em;
    margin: 0 0 1em 0;
    margin-bottom: 40px;
    font-size: 3em;
    padding-top: 121px;
    margin-right: 30%;
    font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, -apple-system;
  }

  .contact-text {
    float: left;
    margin-left: 30%;
  }

  .contact-button {
    float: left;
    margin-left: 30px;
    height: 69px;
    line-height: 63px;
    font-size: 27px;
    margin-top: -7px;
  }

  @media screen and (max-width: 1200px) {
    .contact {
      height: 400px;
    }

    .contact-text {
      margin-left: calc(50% - 106px);
      font-size: 22px;
    }

    .contact-button {
      margin-left: calc(50% - 98px);
      margin-top: 40px;
    }
  }
</style>


