<template>
  <div class="menu" v-if="!isMobile()">
    <h1 class="title"><strong style="
        color: #ffffff;
    "><a style="
        color: #ffffff;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
    ">A</a></strong>P</h1>
    <router-link to="/">
    <div class="item">
      <font-awesome-icon icon="home" />
      <div class="subtext">Home</div>
    </div>
    </router-link>
    <router-link to="/#about">
    <div class="item">
      <a id="about" href="#about">
        <font-awesome-icon icon="user" />  
        <div class="subtext">About</div>
      </a>
    </div>
    </router-link>
    <router-link to="/archive">
      <div class="item">
        <font-awesome-icon icon="archive" /> 
        <div class="subtext">Archive</div>   
      </div>
    </router-link>
    <router-link to="/contact">
      <div class="item">
        <font-awesome-icon icon="comment" /> 
        <div class="subtext">Contact</div>
      </div>
    </router-link>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import anime from "animejs";

@Component
export default class Menu extends Vue {

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
      targets: [".menu"],
      translateX: -400,
      direction: 'reverse',
      duration: 1000,
      color: 'rgba(0, 0, 0, 0)',
      easing: 'easeInOutSine',
      delay: 2000
    });
  }

}
</script>

<style scoped lang="scss">

.menu {
    background-color: #272727;
    background-image: url(https://www.transparenttextures.com/patterns/cartographer.png);
    position: fixed;
    top: 0px;
    left: 0px;
    height: calc(100% - 56px);
    padding: 10px;
    margin: 0px;
    width: 108px;
    margin: 17px;
}

.item {
  color: #ffffffe7;
  text-decoration: none;
  font-size: 51px;
  margin-bottom: 30px;
  &:hover {
    background-color: #ffffff67;
    color:white;
    border-radius: 10px;
    cursor: pointer;
  }
}

#about {
  color: #ffffffe7;
  &:hover {
    color:white;
  }
  text-decoration: none;
}

.subtext {
    font-size: 21px;
    text-decoration: none;
}

a {
  text-decoration: none;
}

.title {
    position: relative;
    font-size: 58px;
    color: rgb(255, 255, 255);
    font-weight: 100;
    margin-left: 34px;
    margin-top: -10px;
    right: 44px;
    z-index: 1000;
    width: 119px;
    background-color: #7d7d7d;
    margin-bottom: 7px;
    padding: 9px 4px;
}

</style>


