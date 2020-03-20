<template>
  <div class="top">
    <div v-for="(story,index) in stories" :key="index">
      <div @click="edit(index)" v-if="index==0">
        <div>
          <div class="big-img">
            <div v-html="story.body"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="card shadow p-md-3 mb-5 mx-md-4 position-relative home-card">
      <div class="row">
        <div class="col-lg-12" v-for="(story,index) in stories" :key="index">
          <div v-if="index==0"  @click="edit(index)">
            <div class="p-md-3 mb-3  position-relative">
              <div class=" mx-md-4 story">
                <router-link to="/detail" class="decor">
                  <font class="co-slug">{{story.slugline}}</font>
                  <font>
                    <h2 class="co-header">{{story.headline}}</h2>
                  </font>

                  <div class="col-xl-8 col-lg-9 abstract-col">
                    <font class="co-abstract">{{story.abstract}}</font>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-3 mx-md-5 story-loop">
          <div
            class="col-lg-6 col-md-6 col-sm-12 "
            v-for="(story,index) in stories.slice(1)"
            :key="index" @click="edit(index)"
          >
            <div >
              <div>
                <img :src="story.imageDataValue.url" alt width="100%" />
              </div>
              <div class="mt-md-3 ">
                <font class="de-slug">{{story.slugline}}</font>
                <font>
                  <h3 class="de-header">{{story.headline}}</h3>
                </font>
                <font class="de-abstract">{{story.abstract}}</font>
                <font>
                  <p class="de-byline mt-3">{{story.byline}}</p>
                </font>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "../../../firebase_config/firebaseInit";
/* eslint-disable no-console */
export default {
  data() {
    return {
      story: {},
      user: {},
      slugline: "",
      headline: "",
      body: "",
      imageurl: "",
      url: {},
      audiourl: {},
      image: {},
      audioDataValue: {},

      audioid: {},
      videos: [],
      imageid: {},
      videoid: {},
      images: [],
      audios: [],
      stories: [],
      imageDataValue: [],
      testStory: []
    };
  },
  created() {
    db.collection("published_stories")
      .doc("entertainment")
      .collection("stories")
      .get()
      .catch(error => console.log(error))
      .then(querySnapshot => {
        console.log(querySnapshot);

        querySnapshot.forEach(doc => {
          console.log(doc.data());
          this.stories.push(doc.data());
        });
      })
      .finally(() => {
        this.testStory.push(this.stories[1]);
        this.testStory.push(this.stories[2]);
        console.log("stories", this.stories[1]);
      });

    console.log(this.testStory);
  },
  methods: {
    edit(index) {
      this.story = this.stories[index];
      console.log(index);
      this.$router.push({
        path: "/detail",
        query: { story: this.story }
      });
    }
  }
};
</script>
<style>
.cd p {
  display: none;
}
.big-img .image > img {
  width: 100%;
}
.big-img p {
  display: none;
}
</style>
<style src='../../../assets/css/featuredstory.css' scoped>
</style>