<template>
  <div id="archive" key="archive">
    <Menu />
    <div class="archive">
      <div class="archive-item" v-for="archive in archives" :key="archive">
        <a v-bind:href="archive.link">
        <img class="archive-img" :src="archive.img">
        <div class="archive-title">{{archive.title}}</div>
        <div class="archive-subtitle">
          {{archive.description}}
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import * as firebase from 'firebase/app';

export default {
  name: "Archive",
  components: {
    Menu
  },
  data() {
    return { 
      archives: []
    };
  },
  mounted() {
    const db = firebase.firestore();
    db.collection("archive").get()
    .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            this.archives.push({
              img: data.img,
              title: data.title,
              description: data.description,
              link: data.link
            });
        });
    });
  }
};
</script>

<style lang="scss">
.archive {
  margin-right: 40px;
  margin-left: 200px;
}

.archive-item {
  height: 309px;
  &:hover {
    cursor: pointer;
    background: #ffffff1a;
  }
  border-bottom: solid 1px #616161;
}

.archive-img {
  height: 218px;
  width: 322px;
  float: left;
  margin: 40px;
}

.archive-title {
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  float: left;
  width: calc(100% - 408px);
  margin-top: 65px;
}

.archive-subtitle {
  color: white;
  text-align: left;
  margin-right: 40px;
  height: 100%;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 700px) {
  .archive {
    margin-left: 0px;
  }
}


</style>