<template>
  <section id="three" class="wrapper style2">
    <div class="container">
      <header class="major special">
        <h2 id="but" ref="but">But,</h2>
        <p id="how" class="subtitle">How about we go in parts?</p>
      </header>

      <div class="feature-grid">
      <div class='animatedParent animateOnce' data-appear-top-offset='-200'>
      <div class="animated fadeInLeft slow"> 
        <div class="feature-left" id="card1">
          <div class="image rounded"><img class="img-right" src="../assets/pic04.jpg" alt="" /></div>
          <div class="content-left">
            <header>
              <h4>Experience</h4>
              <p class="content-subtitle">Programming</p>
            </header>
            <p>I have experience in languages ​​like Java, C #, PHP, Ruby, Lua, HTML, CSS and knowledge of integration with various platforms.</p>
          </div>
        </div>
      </div>
        <div class="feature-right" id="card2">
        <div class="animated fadeInRight slow">
          <div class="image rounded"><img class="img-left" src="../assets/pic05.jpg" alt="" /></div>
          <div class="content-right">
            <header>
              <h4>Japonese culture fan</h4>
              <p class="content-subtitle">Weeb!</p>
            </header>
            <p>I have a fascination with Japanese culture and blogs and food and I like to try to learn new languages.</p>
          </div>
          </div>
        </div>
        </div>
        <div class='animatedParent animateOnce' data-appear-top-offset='-200'>
        <div class="animated fadeInLeft slow delay-250" > 
        <div class="feature-left" id="card3">
          <div class="image rounded"><img class="img-right" src="../assets/pic06.jpg" alt="" /></div>
          <div class="content-left">
            <header>
              <h4>Phylosophy</h4>
              <p class="content-subtitle">Truth.</p>
            </header>
            <p>Do everything you can, especially love freedom and, even if it is for a throne, never deny the truth.</p>
          </div>
        </div>
        </div>
        <div class="feature-right" id="card4">
        <div class="animated fadeInRight slow delay-250">
          <div class="image rounded"><img class="img-left" src="../assets/pic07.jpg" alt="" /></div>
          <div class="content-right">
            <header>
              <h4>Mathematics</h4>
              <p class="content-subtitle">The art</p>
            </header>
            <p>"Mathematics, rightly viewed, possesses not only truth, but supreme beauty—a beauty cold and austere, like that of sculpture."
            <strong>(Bertrand Russel)</strong></p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import anime from "animejs";

@Component
export default class FeatureGrid extends Vue {

  mounted() {
    // Cards
    let loadedGrid = false;
    new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      if (!loadedGrid) {
        loadedGrid = true;
        anime({
          targets: ["#card1"],
          translateX: -400,
          direction: 'reverse',
          duration: 1000,
          color: 'rgba(0, 0, 0, 0)',
          easing: 'easeInOutSine',
          delay: 1000
        });
        anime({
          targets: ["#card2"],
          translateX: 400,
          duration: 1000,
          direction: 'reverse',
          color: 'rgba(0, 0, 0, 0)',
          easing: 'easeInOutSine',
          delay: 1000
        });
        anime({
          targets: ["#card3"],
          translateX: -600,
          direction: 'reverse',
          duration: 1200,
          color: 'rgba(0, 0, 0, 0)',
          easing: 'easeInOutSine',
          delay: 3500
        });
        anime({
          targets: ["#card4"],
          translateX: 600,
          duration: 1200,
          direction: 'reverse',
          color: 'rgba(0, 0, 0, 0)',
          easing: 'easeInOutSine',
          delay: 3500
        });
      }}).observe(this.$el.querySelector('.feature-grid') as Element);

      // Letters
      let loadedBut = false;
      new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      if (!loadedBut) {
        loadedBut = true;
        anime({
          targets: ["#but", "#how"],
          translateY: 200,
          duration: 1000,
          direction: 'reverse',
          color: 'rgba(0, 0, 0, 0)',
          easing: 'easeInOutSine',
          delay: 1000
        });
      }}).observe(this.$el.querySelector('#but') as Element);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .wrapper {
    background-color: #f6f6f6;
    margin: 0;
    padding-top: 68px;
    height: 960px;
 }

 .major {
    padding-bottom: 110px;
 }

 h2, h4 {
    color: #484848;
    font-weight: 700;
    line-height: 1em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
    font-size: 3em;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
 }

 h2 {
    font-size: 4em;
 }

 h4 {
    font-size: 2em;
 }

 .subtitle {
    color: #aaa;
    position: relative;
    margin: 0 0 1.5em 0;
    text-transform: uppercase;
    font-size: 2.5em;
    margin-bottom: 0;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
 }

 .feature-left {
    padding-top: 40px;
    display: inline-block;
    float: left;
    width: 50%;
 }

 .feature-right {
    padding-top: 40px;
    display: inline-block;
    float: right;
    width: 50%;
 }

 .content-left {
    float: right;
    margin-right: 5%;
    text-align: right;
    width: 60%;
    margin-bottom: 60px;
    max-width: 400px;
    height: 200px;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
 }
 
 .content-right {
    float: left;
    margin-left: 5%;
    text-align: left;
    width: 60%;
    margin-bottom: 60px;
    max-width: 400px;
    height: 200px;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
 }

 .content-subtitle {
    color: #aaa;
    position: relative;
    margin: 0 0 1.5em 0;
    text-transform: uppercase;
 }

 p {
    font-size: 19px;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
    color: #666;
 }

 .img-right {
    border-radius: 100%;
    float: right;
    margin-left: 20px;
    margin-right: 30px;
    border: solid 4px #dedede;
    height: 192px;
 }

 .img-left {
    border-radius: 100%;
    float: left;
    margin-left: 30px;
    margin-right: 20px;
    border: solid 4px #dedede;
    height: 192px;
 }

 @media screen and (max-width: 1200px) {
      .content-left, .content-right {
          margin-top: 30px;
      }

      .wrapper {
          height: 1460px;
      }
  }

  @media screen and (max-width: 900px) {
      .feature-left, .feature-right {
          width: 100%;
      }

      .wrapper {
          height: 1710px;
      }
  }

  @media screen and (max-width: 750px) {
      .img-left, .img-right {
          display: none;
      }

      .major {
          padding-bottom: 00px;
      }

      .subtitle {
          font-size: 19px;
      }

      .wrapper {
          height: 1800px;
      }

      .content-left {
        text-align: center;
        margin-left: 20px;
      }

      .content-right {
        text-align: center;
        margin-left: 20%;
      }

      .feature-left, .feature-right {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
  }
</style>


