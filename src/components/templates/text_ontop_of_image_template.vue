<template>
    <div>
    <div class="mx-3 containers">
    <div @click="displaydetails(image.id)">
      <ImageViewer :dataPassed="image.image" :titles="titles" />
    </div>
    <StoryListView :storyLead="storyLead" />
  </div>
  </div>
</template>
<script>
import StoryListView from "../page_view_component/story_list.vue";
import ImageViewer from "../image_component/image_viewer4.vue";
export default {
  components: {
    StoryListView,
    ImageViewer,
  },
  props: {
    image: Object,
    titles: Object,
    storyLead: Object,
  },
  methods: {
    displaydetails(id) {
      this.$router.push({ name: "details", params: { id: id } });
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style></style>
