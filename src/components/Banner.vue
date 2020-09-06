<template>
  <div class="banner">
    <div class="triangle-first"></div>
    <h1 class="title" style="
        position: absolute;
        color: #ffffff;
        font-weight: 100;
        margin-left: 47px;
        margin-top: 36px;
        z-index: 1000;
        right: 36px;
    "><strong style="
        color: #ffffff;
    "><a style="
        color: #ffffff;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
    ">POZZI</a></strong> SITE</h1>
    <div class="banner-hello">
      <svg id="andysvg" class="title-kanji" width="7500" height="200">
        <path stroke="white" stroke-width="2" fill="none" d="M-433.707,56l-13.936-44.434h-14.42L-475.78,56h11.073l2.667-8.757h11.9L-447.625,56h13.918Zm-22.42-31.347,3.6,12.89h-7.189Zm57.049,10.155q0-5.436-1.074-7.633a8.277,8.277,0,0,0-3.565-3.581,12.411,12.411,0,0,0-6.1-1.384q-6.868,0-9.538,5.371V22.895H-431.4V56h12.988V36.111q0-4.948,3.548-4.948a2.887,2.887,0,0,1,2,.716q0.8,0.716.8,3.288V56h12.988V34.809Zm37.827-23.242h-12.793V25.6a10.187,10.187,0,0,0-8.106-3.743,11.339,11.339,0,0,0-9.472,4.688Q-395.2,31.228-395.2,39.2q0,8.529,3.564,13a11.323,11.323,0,0,0,9.294,4.476q6.218,0,8.919-5.078V56h12.175V11.566Zm-12.793,31.348a5.832,5.832,0,0,1-1.091,3.874,3.373,3.373,0,0,1-2.653,1.27q-4.1,0-4.1-8.04a25.909,25.909,0,0,1,.8-6.934q0.8-2.832,3.369-2.832,3.678,0,3.679,4.46v8.2Zm35.19,5.273q-2.93,0-3.972-1.514a8.592,8.592,0,0,1-1.106-4.639h22.168q0.032-1.2.032-1.888,0-8.3-4.9-13.119t-12.842-4.818q-8.2,0-13.118,5.111a17.394,17.394,0,0,0-4.916,12.533,16.044,16.044,0,0,0,4.981,12q4.98,4.834,13.346,4.834,7.52,0,11.931-3.434a14.288,14.288,0,0,0,5.485-8.317l-12.11-.814q-0.748,4.07-4.98,4.069h0Zm-5.111-12.663q0-5.664,4.606-5.664a4.761,4.761,0,0,1,3.26,1.156q1.314,1.156,1.346,4.508h-9.212Zm38.413,5.306q0-7.194,6.445-7.194a10.7,10.7,0,0,1,2.442.326V22.406a18.789,18.789,0,0,0-1.888-.13q-6.771,0-8.627,7.454V22.895h-10.807V56h12.435V40.831Zm25.62,15.853q7.974,0,12.516-3.192a10.025,10.025,0,0,0,4.541-8.632,9.27,9.27,0,0,0-2.05-6.059,10.519,10.519,0,0,0-4.947-3.453A65.392,65.392,0,0,0-280.908,33.5q-3.126-.353-3.126-1.981a1.571,1.571,0,0,1,1.026-1.123,6.6,6.6,0,0,1,3.108-.57q4.395,0,5.762,2.93l9.831-1.856q-3.321-8.691-15.365-8.691-6.868,0-11.1,3.141A9.769,9.769,0,0,0-295,33.571,10.035,10.035,0,0,0-292.5,40.2q2.505,2.978,12.6,4.378a19.65,19.65,0,0,1,4.623.961,1.453,1.453,0,0,1,.976,1.318q0,1.953-5.045,1.953-6.088,0-6.967-3.581l-10.253,1.4q3.189,10.059,16.634,10.059h0Zm49.822-4.964a16.694,16.694,0,0,0,5.029-12.386,16.462,16.462,0,0,0-4.964-12.239q-4.965-4.883-13.135-4.883-8.1,0-13.167,4.948a16.586,16.586,0,0,0-5.062,12.37,16.938,16.938,0,0,0,4.85,12.028q4.851,5.127,13.086,5.127Q-235.139,56.684-230.11,51.719Zm-16.39-4.753q-1.074-1.839-1.074-7.536,0-4.85,1.041-6.966a3.449,3.449,0,0,1,3.288-2.116,3.412,3.412,0,0,1,3.386,2.051,17.271,17.271,0,0,1,.944,6.706,31.482,31.482,0,0,1-.668,6.559,3.487,3.487,0,0,1-3.694,3.141A3.5,3.5,0,0,1-246.5,46.967Zm57.456-12.158q0-5.436-1.075-7.633a8.274,8.274,0,0,0-3.564-3.581,12.413,12.413,0,0,0-6.1-1.384q-6.87,0-9.538,5.371V22.895h-12.045V56h12.989V36.111q0-4.948,3.548-4.948a2.887,2.887,0,0,1,2,.716q0.8,0.716.8,3.288V56h12.989V34.809Zm42.841,5.046q7.389,0,11.816-3.906a13.019,13.019,0,0,0,4.427-10.254,13.567,13.567,0,0,0-2.164-7.52,13.125,13.125,0,0,0-5.86-4.98q-3.694-1.627-10.791-1.628h-18.978V56h13.835V39.854h7.715Zm-7.91-18.131h5.013q5.566,0,5.566,4.167,0,4.427-6.022,4.427h-4.557V21.723Zm56.1,30a16.7,16.7,0,0,0,5.029-12.386,16.462,16.462,0,0,0-4.964-12.239q-4.964-4.883-13.135-4.883-8.106,0-13.167,4.948a16.586,16.586,0,0,0-5.062,12.37,16.934,16.934,0,0,0,4.85,12.028q4.849,5.127,13.086,5.127Q-103.038,56.684-98.008,51.719ZM-114.4,46.967q-1.076-1.839-1.075-7.536,0-4.85,1.042-6.966a3.447,3.447,0,0,1,3.288-2.116,3.411,3.411,0,0,1,3.385,2.051,17.271,17.271,0,0,1,.944,6.706,31.55,31.55,0,0,1-.667,6.559,3.488,3.488,0,0,1-3.7,3.141A3.5,3.5,0,0,1-114.4,46.967Zm39.939,0.8q-0.423,0-.942.033l-1.721.032L-62.9,29.861V22.895H-90.439v8.073h9.427q0.877,0,3.38-.1L-91.578,48.806V56h29.2V47.764h-12.08Zm30.079,0q-0.423,0-.941.033l-1.721.032L-32.82,29.861V22.895H-60.359v8.073h9.427q0.878,0,3.38-.1L-61.5,48.806V56h29.2V47.764H-44.38Zm15.272-37.6V20.453H-16.12V10.167H-29.108Zm0,12.728V56H-16.12V22.895H-29.108ZM64.71,6.553H6.572v4.59H58.98q-1.53,4-6.624,10.189a50.375,50.375,0,0,1-11.67,10.417l2.93,3.516A53.012,53.012,0,0,0,54,27.143a43.857,43.857,0,0,0,8.9-11.361,49.621,49.621,0,0,0,3.467-7.7Zm-34.6,10.579L30.042,26.15q-0.293,11-5.208,18.148T7.841,54.861l1.986,4.264a35.348,35.348,0,0,0,9.733-3.809A28.584,28.584,0,0,0,29.293,47a29.15,29.15,0,0,0,5.159-11.7,96.628,96.628,0,0,0,1.318-18.164H30.107Zm47.2-10.742-2.8,4.069A174.333,174.333,0,0,1,97.686,22.537l3.679-4.264A138.217,138.217,0,0,0,77.309,6.391h0Zm47.982,17.35a53.621,53.621,0,0,1-8.105,10.791,72.291,72.291,0,0,1-9.847,7.91,57.772,57.772,0,0,1-14.242,6.8,87.629,87.629,0,0,1-19.01,3.89l1.139,5.013A95.652,95.652,0,0,0,97.41,53.38a64.017,64.017,0,0,0,18.148-10.352A57.463,57.463,0,0,0,129.75,26.54ZM181.835,6.814H138.312v4.525h43.523V6.814ZM169.5,29.145h24.935V24.392H134.5v4.753h29.2V32.53q0,9.57-5.989,14.6T141.5,54.34l1.725,4.59a47.205,47.205,0,0,0,14.99-5.469,22.7,22.7,0,0,0,8.578-8.708q2.7-5.127,2.7-13.428V29.145Zm23.34-31.283-3.418,1.6a63.676,63.676,0,0,1,4.688,9.017l3.711-1.53a80.035,80.035,0,0,0-4.981-9.082h0ZM183.95-.12l-3.515,1.6a73.33,73.33,0,0,1,4.72,9.115L188.9,8.93A68.732,68.732,0,0,0,183.95-.12h0Zm51.4,30.339a85.991,85.991,0,0,0,7.763-5.925,46.107,46.107,0,0,0,7.927-8.952l-5.144-1.92q-5.306,7.812-16.048,14.714T203.841,38.747l1.66,4.2A103.721,103.721,0,0,0,230.046,33.7V60h5.306V30.219Z"></path>
      </svg>
      <p class="less-opacity">Hello, My name is<p>
      <h1 class="name">Anderson Pozzi</h1>
      <h1 class="subtitle">I just create.</h1>
      <p class="description">
        Hard-working Programmer, Fan of japonese culture and multi hobbyist.
        I hope you get inspired by my work.
        And to know each other better.
      </p>
      <p class="description less-margin">Thank you for visiting my site!</p>
      <div id="external">
        <a class="external-link" href="https://github.com/Apozzi"><i class="fab fa-github"></i></a>
        <a class="external-link" href="https://br.linkedin.com/in/anderson-rodrigo-pozzi-a06246186"><i class="fab fa-linkedin"></i></a>
        <!--<a class="external-link" href="https://twitter.com/PAngelAndy"><i class="fab fa-twitter"></i></a> -->
        <a class="external-link" href="https://drive.google.com/file/d/1KZDJPO-VqTqIxZi8M2nFZDbsSW8sfsOZ/view?usp=sharing"><Button class="curriculum-button" label="Curriculum vitae"/></a>
      </div>
    </div>
    <img id="banner-image" class="banner-image" alt="banner" src="../assets/banner.jpg" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import anime from "animejs";
import Button from "@/components/Button.vue";


@Component({
  components: {
    Button
  }
})
export default class Banner extends Vue {
  @Prop() private msg!: string;

  mounted() {
    anime({
      targets: [".less-opacity", ".subtitle", ".description", ".name", "#external"],
      translateY: 200,
      direction: 'reverse',
      duration: 1000,
      color: 'rgba(0, 0, 0, 0)',
      easing: 'easeInOutSine',
      delay: 2000
    });
    anime({
      targets: [".banner-image", ".title"],
      translateX: 1200,
      duration: 1000,
      direction: 'reverse',
      color: 'rgba(0, 0, 0, 0)',
      easing: 'easeInOutSine',
      delay: 2000
    });
    anime({
      targets: '#andysvg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 8000,
      direction: 'alternate',
      loop: false,
      delay: 1700
    });
    anime({
      targets: [".triangle-first"],
      translateX: -500,
      direction: 'reverse',
      duration: 1000,
      color: 'rgba(0, 0, 0, 0)',
      easing: 'easeInOutSine',
      delay: 2000
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    padding: 0;
    margin: 0px;
    display: grid;
    background-color: #272727;
    height: 64rem;
    background-image: url(https://www.transparenttextures.com/patterns/cartographer.png);
    background-attachment: fixed;
}
.banner-hello {
    color: white;
    padding-top: 18rem;
    font-size: 1.20rem;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
    grid-column-start: 1;
    grid-column-end: 8;
    margin-left: auto;
    margin-right: auto;
    text-align: initial;
    line-height: 20px;
}
.name {
    font-size: 4rem;
}
.subtitle {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.4) !important;
}
.less-opacity {
  color: rgba(255, 255, 255, 0.5) !important;
}
.description {
  width: 600px;
  margin-top: 80px;
  color: rgba(255, 255, 255, 0.8) !important;
}
.less-margin {
  margin-top: 30px;
}
.banner-image {
  height: 100%;
  margin-left: -170px;
  clip-path: polygon(0% 0,100% 0,100% 100%,20% 100%);
}

.title-kanji {
  width: 763px;
  position: absolute;
  z-index: 1000;
  top: 193px;
}

.triangle-first {
  width: 315px;
  height: 1024px;
  position: absolute;
  background-color: #7d7d7d;
  clip-path: polygon(0% 0, 20% 0, 100% 100%, 00% 100%);
  max-width: 10%;
}

p {
  line-height: 1.5;
}

.svg-inline--fa {
  font-size: 36px;
  padding-right: 20px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
}

.external-link {
  color: white;
}

.curriculum-button {
    height: 52px;
    width: 147px;
    padding: 0 1em;
    font-size: 15px;
    line-height: 3.25em;
    position: absolute;
    top: 2px;
}

@media screen and (max-width: 1200px) {
  .banner-image {
      display: none;
  }

  .banner-hello {
      margin: 0 auto;
      position: absolute;
      left: calc(50% - 297px);
      align-items: center;
      text-align: center;
  }

  #andysvg {
      left: 175px;
  }

  .curriculum-button {
    top: 66px;
    left: calc(50% - 98px);
  }

  .name {
    max-width: 100vw;
    line-height: 1;
    margin: auto;
  }

  .description {
    max-width: 100vw;
    margin: 80px auto;
  }
}

@media screen and (max-width: 400px) {
  .banner-hello {
      position: absolute;
      left: 0px;
      padding-top: 17rem !important;
  }

  #andysvg {
      display: none;
  }

  .description {
    font-size: 14px;
    width: 210px;
  }

  #external {
    margin-left: 20px;
  }
}

@media screen and (max-height: 800px) {
    .banner-hello {
        padding-top: 14rem;
    }

    .title-kanji {
        top: 142px;
    }
  }
</style>


