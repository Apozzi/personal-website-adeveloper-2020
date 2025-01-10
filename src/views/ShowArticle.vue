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
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Menu
  }
})
export default class ShowArticle extends Vue {
  article = {
    id: '',
    title: '',
    content: '',
    img: ''
  };
  renderedArticle = '';
  async mounted() {
    const renderer = new marked.Renderer();
    
    renderer.text = (text) => {
      let processed = text;
      const inlineMathRegex = /\$([^\$]+)\$/g;
      
      processed = processed.replace(inlineMathRegex, (match, latex) => {
        try {
          return katex.renderToString(latex, { displayMode: false });
        } catch (err) {
          console.error('Erro ao renderizar LaTeX:', err);
          return match;
        }
      });
      
      return processed;
    };

    renderer.paragraph = (text) => {
      const blockMathRegex = /\$\$([^\$]+)\$\$/g;
      
      if (text.match(blockMathRegex)) {
        const processed = text.replace(blockMathRegex, (match, latex) => {
          try {
            return katex.renderToString(latex, { displayMode: true });
          } catch (err) {
            console.error('Erro ao renderizar LaTeX:', err);
            return match;
          }
        });
        return `<div>${processed}</div>`;
      }
      
      return `<p>${text}</p>`;
    };

    marked.setOptions({
      renderer: renderer,
      breaks: true,
      gfm: true,
      smartypants: true
    });

    try {
      const articleId = this.$route.params.id;
      const db = firebase.firestore();
      const doc = await db.collection("articles").doc(articleId).get();
      
      if (doc.exists) {
        this.article = { id: doc.id, ...doc.data() };
        const sanitizedContent = this.article.content
          .replace(/\\n/g, '\n')
          .replace(/\\\$/g, '\\$')
          .replace(/\\/g, '');
        
        this.renderedArticle = marked(sanitizedContent);
      } else {
        this.$router.push('/'); // Redirect to home if article not found
      }
    } catch (error) {
      console.error("Error loading article:", error);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss">
.markdown-content {
  background: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
  line-height: 1.6;
  
  * {
    text-align: left;
  }
  
  // Estilos existentes...
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

  .katex-display {
    margin: 1em 0;
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
      height: 3px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 3px;
    }
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