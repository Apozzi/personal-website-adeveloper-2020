<template>
  <div id="archive" key="archive">
    <Menu />
    <div class="archive">
      <div class="archive-item" v-for="archive in archives" :key="archive">
        <div class="archive-selling-tag-box" v-if="archive.isSelling">
          <div class="archive-selling-tag">For Sale</div>
        </div>
        <a v-bind:href="archive.link">
        <img class="archive-img" :src="archive.img">
        <div class="archive-title">{{archive.title}}</div>
        <div class="archive-subtitle">
          <span v-for="(line,lineNumber) of archive.description.split('\\n')" 
            v-bind:key="lineNumber" >{{ line }}<br/>
          </span>
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
              link: data.link,
              isSelling: data.isSelling,
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
  margin-bottom: 5px;
}

.archive-subtitle {
  color: white;
  text-align: left;
  margin-right: 40px;
  height: 100%;
  word-break: break-word;
}

.archive-selling-tag {
  position: absolute;
  right: 56px;
  margin-top: 23px;
  background: #c91e43;
  font-size: 15px;
  font-weight: 800;
  padding: 8px 27px;
  color: white;
  border-radius: 12px;
}

.archive-selling-tag-box {
  height: 0;
  width: 0;
  display: grid;
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