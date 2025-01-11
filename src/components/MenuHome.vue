<template>
  <div class="menu">
    <div class="item">Home</div>
    <div class="item"><a href="#about">About me</a></div>
    <router-link to="/archive"><div v-if="!isMobile()" class="item">Projects</div></router-link>
    <router-link to="/contact"><div class="item">Contact</div></router-link>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import anime from "animejs";

@Component
export default class MenuHome extends Vue {

  isMobile() {
      if( screen.width <= 760 ) {
          return true;
      }
      else {
          return false;
      }
  }

  mounted() {
    anime({
      targets: [".item"],
      translateX: 1200,
      duration: 1000,
      direction: 'reverse',
      color: 'rgba(0, 0, 0, 0)',
      easing: 'easeInOutSine',
      delay: 2000
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .menu {
   position: absolute;
   top: 17px;
   font-weight: 100;
   right: 263px;
   font-family: "Raleway", Arial, Helvetica, sans-serif;
   z-index: 10;
   color: #ddd;
   font-size: 19px;
   text-transform: uppercase;
 }

 .item {
   float: left;
   padding: 30px;
   cursor: pointer;
   &:hover {color: white !important;}
 }

 a {
   text-decoration: none;
   color: #dddddd;
   &:hover {color: white !important;}
 }

 @media screen and (max-width: 450px) {
    .item {
        float: left;
        padding: 23px !important;
    }

    .menu {
        position: absolute;
        background-color: #353535;
        width: 100%;
        top: 98px;
        right: 0;
    }
  }

  @media screen and (max-width: 1200px) {
    .item {
        padding: 21px;
    }
  }
</style>


