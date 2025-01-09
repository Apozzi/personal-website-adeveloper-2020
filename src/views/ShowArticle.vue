<template>
  <div id="show-article" key="show-article">
    <Menu />
    <article class="show-article markdown-content" v-html="renderedArticle"></article>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import { marked } from "marked";
import * as firebase from 'firebase/app';

export default {
  name: "ShowArticle",
  components: {
    Menu
  },
  data() {
    return {
      article: {
        title: "",
        content: ""
      },
      renderedArticle: ""
    };
  },
  mounted() {
    marked.setOptions({
      breaks: true,
      gfm: true,
      smartypants: true
    });

    const db = firebase.firestore();
    db.collection("articles").doc("exampleArticle")
      .get()
      .then(doc => {
        if (doc.exists) {
          this.article = doc.data();
          const sanitizedContent = this.article.content
            .replace(/\\n/g, '\n')
            .replace(/\\/g, '');
          
          this.renderedArticle = marked(sanitizedContent);
        }
      })
      .catch(error => {
        console.error("Erro ao carregar o artigo:", error);
      });
  }
};
</script>

<style lang="scss">
.markdown-content {
  background: white;
  max-width: 800px;
  margin: 0 auto; // Mantém o container centralizado
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
  line-height: 1.6;
  
  // Todo o conteúdo dentro do container será alinhado à esquerda
  * {
    text-align: left;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.5em;
    margin-bottom: 0.8em;
    font-weight: 600;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }

  p {
    margin-bottom: 1.2em;
  }

  ul, ol {
    margin: 1em 0;
    padding-left: 2em;
  }

  li {
    margin: 0.5em 0;
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: monospace;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1em 0;

    code {
      padding: 0;
      background-color: transparent;
    }
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 1em;
    margin: 1em 0;
    color: #666;
  }

  hr {
    border: 0;
    border-top: 1px solid #eee;
    margin: 2em 0;
  }

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 700px) {
  .markdown-content {
    padding: 15px;
    
    h1 { font-size: 1.8em; }
    h2 { font-size: 1.3em; }
    h3 { font-size: 1.1em; }
  }
}
</style>