<template>
  <div id="articles" class="articles">
    <svg data-v-115b8bed="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1e3 42.18354" style=""><g data-v-115b8bed=""><path data-v-115b8bed="" d="M.003 22.694 1e3 2.928v4.393l-.008-.054L0 42.184" style="fill: rgb(35 35 35);"></path><path data-v-115b8bed="" d="M.003.0H1e3v5.124-.022L.003 22.694" style="fill: rgb(39 39 39);"></path></g></svg>
    <div class="content">
      <div>
        <h2 class="title">Articles</h2>
        <div class="carousel__wrapper">
          <carousel :navigationEnabled="true" :config="config">
            <slide v-for="article in articles" :key="article.id">
              <div class="slide-content" @click="navigateToArticle(article.id)">
                <div class="title-article">{{ article.title }}</div>
                <img class="slide-image" :src="article.img" :alt="article.title">
              </div>
            </slide>
          </carousel>
        </div>
    </div>
  </div>
</div>
  
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as firebase from 'firebase/app';

@Component
export default class Articles extends Vue {
  articles: any[] = [];
  
  config = {
    itemsToShow: 2.5,
    gap: 5,
    wrapAround: true,
  };

  async mounted() {
    try {
      const db = firebase.firestore();
      const snapshot = await db.collection('articles').orderBy("id", "desc").get();
      this.articles = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error loading articles:', error);
    }
  }

  navigateToArticle(id: string) {
    this.$router.push(`/articles/${id}`);
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

  .slide-content {
    cursor: pointer;
    position: relative;
    border: 4px solid #232323;
    height: 316px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 10px;
  }

  .slide-image{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .VueCarousel-slide:hover {
    filter: brightness(0.5)
  }

  @media screen and (max-width: 1200px) {
    .profile {
      display: none;
    }

    .about-txt {
        padding-left: 10vw;
        width: 80vw;
    }
  }

  .articles {
      background: #1c1c1c;
      height: 660px;
  }

  .title-article {
    color: white;
    font-size: 25px;
    top: 241px;
    background: #00000091;
    width: calc(100% - 30px);
    height: 100px;
    position: absolute;
    padding-top: 20px;
    display: inline-flex
;
    padding-left: 30px;
    font-family: Inter, BlinkMacSystemFont, Segoe UI, -apple-system;
  }

  .title {
    display: flex;
    font-size: 1.6em;
  }

</style>

<style>
  .VueCarousel-navigation-button {
    color: white !important;
    font-size: 36px;
    margin-top: -40px;
  }
  .VueCarousel-navigation-button:focus {
    outline: none !important;
  }
  
</style>


