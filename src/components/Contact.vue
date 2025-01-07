<template>
  <div class="contact">
    <svg data-v-115b8bed="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1e3 42.18354"><g data-v-115b8bed=""><path data-v-115b8bed="" d="M.003 22.694 1e3 2.928v4.393l-.008-.054L0 42.184" style="fill: rgb(67 64 64);"></path><path data-v-115b8bed="" d="M.003.0H1e3v5.124-.022L.003 22.694" style="fill: rgb(28 28 28);"></path></g></svg>
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
    height: 400px;
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


