<template>
  <div>
    <div>
      <app-navbar></app-navbar>
    </div>
    <div v-for="(story,index) in stories" :key="story.id">
      <div v-if="index==0" id="flex" >
        <div class="row title" @click="edit(index==0)">
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-md-3">
            <font class="slugline">{{story.slugline}}</font>
            <font>
              <h1 class="head h1 mt-2 mb-lg-4">
                <b>{{story.headline}}</b>
              </h1>
            </font>
          </div>
        </div>
        <div class="mx-md-3 imgs " v-html="story.body">
        </div>
        <div class="col-lg-9 col-md-10 abstract mx-1">
          <font>{{story.abstract}}</font>
        </div>
      </div>
    </div>
    <div>
      <div
        class="row mt-5 mx-lg-5 mx-md-3 px-xl-5 txt-img"
        v-for="(story,index) in stories.slice(1)"
        :key="story.id"
      >
        <div class="col-lg-5 col-md-6 col-sm-12" @click="edit(index)">
          <div v-html="story.body"></div>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12">
          <div class="txt">
            <font class="keyword">{{story.slugline}}</font>
            <font>
              <h1 class="headline">
                <b>{{story.headline}}</b>
              </h1>
            </font>
            <font>{{story.abstract}}</font>
            <font>
              <p>{{story.byline}}</p>
            </font>
          </div>
        </div>
      </div>
    </div>
    <div>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<style >
.imgs p {
  display: none;
}
.txt-img p {
  display: none;
}
.txt-img ul li {
  display: none;
}
.txt-img h2 {
  display: none;
}
.imgs .image > img {
  width: 100%;
}
.txt-img .image > img {
  width: 100%;
}
</style>

<script>
import db from "../../firebase_config/firebaseInit";
/* eslint-disable no-console */
import navbar from "../../components/navbar";
import footer from "../../components/footer";
export default {
  components: {
    appNavbar: navbar,
    appFooter: footer
  },
  
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
      .doc("sport")
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
      // this.story = this.testStory[index];
      console.log(index);
      this.$router.push({
        path: "/detail",
        query: { story: this.story }
      });
    },
  }
};
</script>
<style src='../../assets/css/society.css' scoped>
</style>
