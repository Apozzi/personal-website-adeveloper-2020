<template>
  <div id="about" class="about" ref="about">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1e3 42.18354"><g>
      <path style="
      fill: rgb(208 208 208);;
      " d="M.003 22.694 1e3 2.928v4.393l-.008-.054L0 42.184"></path> 
      <path style="
      fill: rgb(222 222 222);
      " d="M.003.0H1e3v5.124-.022L.003 22.694"></path></g></svg>
    <div class="content">
      <img class="profile" alt="profile" src="../assets/profile.jpg" />
      <div class="about-txt">
        <h2>About me</h2>
        <p>Hello my name is Anderson Rodrigo Pozzi I work with program development and live in Blumenau. Among my hobbies, this programming, robotics, illustration and music.</p>
        <p>Of my too many academic and creative interests, I still like to maintain the evolutionary progress of my mind and the way in which I live, also not letting myself be affected by too much misfortunes.</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import anime from "animejs";

@Component
export default class About extends Vue {

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

  .about-txt {
    text-align: left;
    padding-left: 330px;
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

  @media screen and (max-width: 1200px) {
    .profile {
      display: none;
    }

    .about-txt {
        padding-left: 10vw;
        width: 80vw;
    }

    .about {
      height: fit-content;
      padding-bottom: 25px;
    }
  }
</style>


