<template>
  <div id="articles" class="articles">
    <svg data-v-115b8bed="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1e3 42.18354" style=""><g data-v-115b8bed=""><path data-v-115b8bed="" d="M.003 22.694 1e3 2.928v4.393l-.008-.054L0 42.184" style="fill: rgb(35 35 35);"></path><path data-v-115b8bed="" d="M.003.0H1e3v5.124-.022L.003 22.694" style="fill: rgb(39 39 39);"></path></g></svg>
    <div class="content">
      <div>
        <h2 class="title">Articles</h2>
        <div class="carousel__wrapper">
          <carousel :navigationEnabled="true">
          <slide>
            <div class="slide-content">
              <img class="slide-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc0.wallpaperflare.com%2Fpreview%2F111%2F43%2F764%2Fcode-coder-codes-coding.jpg&f=1&nofb=1&ipt=49602ef1f889e888a5f2277197ff8bc03127e1749b13301a60c9b661d4093191&ipo=images">
            </div>
          </slide>
          <slide>
            <div class="slide-content">
              <img class="slide-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bacancytechnology.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F05%2FAngular-16.png&f=1&nofb=1&ipt=0556f1a0e290232e5ec58b0cf1e27b6665c4f1d335022ba0c01ee7a65d045efc&ipo=images">
            </div>
          </slide>
          <slide>
            <div class="slide-content">
              <img class="slide-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fik.imagekit.io%2Flaxaar%2F1686313855890ReactJS_2400x1200.png&f=1&nofb=1&ipt=eb487fa90df7337079a67e27c4b9f6dbb7a6f005651cb697f544f1b428ec7bd8&ipo=images">
            </div>
          </slide>
          <slide>
            <div class="slide-content">
              <img class="slide-image" src="https://iglu.net/wp-content/uploads/2022/12/What-is-Golang.png">
            </div>
          </slide>
        </carousel>
        </div>
    </div>
  </div>
</div>
  
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import anime from "animejs";



@Component
export default class About extends Vue {

  config = {
    itemsToShow: 2.5,
    gap: 5,
    wrapAround: true,
  };

  mounted() {
    // About Me
    let loaded = false;
    new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    if (!loaded) {
      loaded = true;
      anime({
        targets: [".profile", ".about-txt"],
        translateY: 200,
        duration: 1000,
        direction: 'reverse',
        color: 'rgba(0, 0, 0, 0)',
        easing: 'easeInOutSine',
        delay: 4000
      });
    }}).observe(this.$refs.about as Element);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .about {
    height: 550px;
  }

  .content {
    padding: 4em 0 4em 0;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .profile {
    float: left;
    border-radius: 4px;
    display: block;
    height: 100%;
    height: 275px;
  }

  h2 {
    color: white;
    font-weight: 700;
    line-height: 1em;
    margin: 0 0 1em 0;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
    color: #b9b9b9;
  }

  .slide-content {
    border: 2px solid #232323;
    height: 316px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 10px;
  }

  .slide-image{
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1200px) {
    .profile {
      display: none;
    }

    .about-txt {
        padding-left: 10vw;
        width: 80vw;
    }
  }

  .articles {
      background: #1c1c1c;
      height: 660px;
  }

  .title {
    display: flex;
    font-size: 1.6em;
  }

</style>

<style>
  .VueCarousel-navigation-button {
    color: white !important;
    font-size: 36px;
    margin-top: -40px;
  }
  .VueCarousel-navigation-button:focus {
    outline: none !important;
  }
  
</style>


