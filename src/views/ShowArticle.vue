<template>
  <div id="show-article" key="show-article">
    <Menu />
    <div class="show-article" v-html="renderedContent"></div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import * as firebase from "firebase/app";
import "firebase/firestore";
import marked from "marked";
import katex from "katex";
import "katex/dist/katex.min.css";

export default {
  name: "ShowArticle",
  components: {
    Menu,
  },
  data() {
    return {
      archives: [],
      content: "",
    };
  },
  computed: {
    renderedContent() {
      const markdownWithLatex = marked(this.content, {
        breaks: true,
        highlight: function (code, lang) {
          return require("highlight.js").highlightAuto(code).value;
        },
      });

      return markdownWithLatex.replace(
        /\$\$([^$]+)\$\$|\$([^$]+)\$/g,
        (_, blockMath, inlineMath) =>
          katex.renderToString(blockMath || inlineMath, {
            throwOnError: false,
          })
      );
    },
  },
  mounted() {
    const db = firebase.firestore();
    db.collection("articles")
      .doc("exampleArticle")
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.content = doc.data().content;
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar artigo:", error);
      });
  },
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}

@media screen and (max-width: 700px) {
  /* Estilos responsivos */
}
</style>