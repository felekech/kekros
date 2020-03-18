<template>
  <div class="all-text">
    <div v-for="(story,index) in stories" :key="index">
    <div class="border-style" >
      <div @click="edit(index)">
        <div class="big-img" v-html="story.body" v-if="index%3==0" >
          <!-- <img :src="cardimagesrc" width="100%" height="100%" /> -->
        </div>
        <div>
          <div class="card shadow p-md-3 mb-5 mx-md-4 position-relative home-card">
            <div>
              <div class="ml-lg-5 mx-md-4 story">
                <!-- v-for=" story in story" :key="story.id" -->
                <router-link to="/detail" class="decor">
                  <font class="co-slug">{{story.slugline}}</font>
                  <font>
                    <h2 class="co-header">{{story.headline}}</h2>
                  </font>
                  <div class="row">
                    <div class="col-xl-8 col-lg-9">
                      <font class="co-abstract">{{story.abstract}}</font>
                    </div>
                  </div>
                  <div class="mt-2">
                    <!-- <font class="co-byline">{{story.top_story_byline}}</font> -->
                  </div>
                </router-link>
              </div>
            </div>
          </div>

          <div class="row mt-3 mx-lg-4" >
            <div  class="col-lg-6 col-md-6 col-sm-12" v-for="story in stories" :key="story.id">
              <!-- <div>
                <div class="card" v-html="story.body">
                  <img :src="story.src" alt width="auto" />
                </div>
                <div class="mt-md-3 de-abstracts">
                  <font class="de-slug">{{story.slugline}}</font>
                  <font>
                    <h3 class="de-header">{{story.headline}}</h3>
                  </font>
                  <font class="de-abstract">{{story.abstract}}</font>
                  <font>
                    <p class="de-byline mt-3">{{story.byline}}</p>
                  </font>
                </div>
              </div> -->
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
         filterText:'',
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
      imageDataValue: []
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
      });
  },
   methods: {
    edit(index) {
      this.story = this.stories[index];
      //  alert(this.story.headline);
      console.log(index);
      this.$router.push({
        path: "/detail",
        query: { story: this.story }
      });
    },
  },

};
</script>
<style>
.big-img .image > img{
width: 100%;
}
.big-img p{
   display: none;
}

</style>
<style src='../../../assets/css/featuredstory.css' scoped>
</style>