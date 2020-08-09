<template>
  <div id="button" class="button" ref="button">
    {{label}}
  </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() private label!: string;

  mounted() {
    // Button
  }

}
</script>

<style scoped lang="scss">
  .button {
    background-color: #484848;
    color: #ffffff !important;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 4px;
    border: 0;
    color: #ffffff !important;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    line-height: 3.25em;
    padding: 0 2.2em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    &:hover {
      color: #efefef !important;
      background-color: dimgrey;
    }
  }
</style>


