<template>
  <div class="mx-lg-5">
    <div v-for="story in storyLead" :key="story.id">
      <div class="row story" @click="displaydetails(storyLead.id)" id="cursor">
        <div class="col-lg-5 col-md-6 mt-2">
          <div>
            <img class="photoImage" :src="story.img_src" alt="Image File not found" width="100%">
          </div>
        </div>
        <div class="col-lg-6 col-md-5 mt-2">
          <div>
            <font class="keyword" id="key_word">{{ story.keyword }}</font>
            <font>
              <h2 class="headline">{{ story.headline }}</h2>
            </font>
            <font class="abstract">{{ story.abstract }}</font>
            <br />
            <br />
            <font class="byline">{{ story.byline }}</font>
          </div>
        </div>
        <div class="col-1">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    storyLead: Object,
  },
  data() {
    return {};
  },
  methods: {
    displaydetails(id) {
      this.$router.push({ name: "details", params: { id: id } });
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
<style src="../../assets/css/topstory.css" scoped></style>
