<template>
  <div id="app" appear>
    <transition name="slide" mode="out-in">
      <router-view class="view"/>
    </transition>
  </div>
</template>

<style lang="scss">
html {
  line-height: 1.5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  overflow-x: hidden;
  background-color: #272727;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}

.slide-enter-active,
.slide-leave-active
 {
  transition: transform 0.4s ease-in-out;
}
.slide-enter {
  transform: translateY(100%);

}
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
