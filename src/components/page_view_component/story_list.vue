<template>
  <div class="mx-lg-5">
    <div v-for="story in storyLead" :key="story.id">
      <div class="row mx-lg-5 mx-md-2 story" @click="displaydetails(storyLead.id)">
        <div class="col-lg-5 col-md-6 col-sm-12 mt-5">
          <div class="card" style="width:auto">
            <img :src="story.img_src" alt />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
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
    },
  },
};
</script>
<style src="../../assets/css/topstory.css" scoped></style>
