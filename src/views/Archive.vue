<template>
  <div id="archive" key="archive">
    <Menu ref="menu"/>
    <div class="archive">
      <div class="archive-item" v-for="(archive, index) in archives" :key="archive.id || index">
        <div class="archive-selling-tag-box" v-if="archive.isSelling">
          <div class="archive-selling-tag">For Sale</div>
        </div>
        <a class="archive-link" :href="archive.link">
          <div class="archive-img-wrapper">
            <div class="archive-img-loader" v-if="!imageLoaded[index]">
              <div class="spinner"></div>
            </div>
            <img
              class="archive-img"
              loading="lazy"
              :src="archive.img"
              @load="onImageLoad(index)"
              :class="{ 'loaded': imageLoaded[index] }"
              alt="Archive image"
            >
          </div>
          <div class="archive-title">{{ archive.title }}</div>
          <div class="archive-subtitle">
            <span v-for="(line, lineNumber) in archive.description.split('\\n')" 
                  :key="lineNumber">
              {{ line }}<br/>
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
import { trackPageVisit } from '@/utils/trackPageVisit';

export default {
  name: "Archive",
  components: { Menu },
  data() {
    return {
      archives: [],
      imageLoaded: []
    };
  },
  mounted() {
    //trackPageVisit(`archive`);
    const db = firebase.firestore();
    db.collection("archive").get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = doc.data();
          this.archives.push({
            id: doc.id,
            img: data.img,
            title: data.title,
            description: data.description,
            link: data.link,
            isSelling: data.isSelling || false,
            order: data.order || null
          });
          this.imageLoaded.push(false);
        });
        this.archives.sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
      });
  },
  methods: {
    onImageLoad(index) {
      this.$set(this.imageLoaded, index, true);
    }
  },
  beforeRouteLeave(to, from, next) {
    const menu = this.$refs.menu || this.$children.find(child => child.$options.name === 'Menu');
    if (menu) {
      menu.leave(() => next());
    } else {
      next();
    }
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
  position: relative;
  &:hover {
    cursor: pointer;
    background: #ffffff1a;
  }
  border-bottom: solid 1px #616161;
}

.archive-img-wrapper {
  position: relative;
  float: left;
  width: 322px;
  height: 218px;
  margin: 40px;
  background: #2a2a2a;
  overflow: hidden;
}

.archive-img {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.4s ease;
  &.loaded {
    opacity: 1;
  }
}

.archive-img-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left-color: #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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

.archive-link {
  text-decoration: none;
  display: block;
  overflow: hidden;
}

@media screen and (max-width: 700px) {
  .archive {
    margin-left: 0;
    margin-right: 0;
  }
  
  .archive-img-wrapper {
    margin: 20px auto;
    float: none;
  }
  
  .archive-title {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>