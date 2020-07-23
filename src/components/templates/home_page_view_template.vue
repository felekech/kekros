<template>
  <div>
    <div @click="displaydetails(image.id)">
      <div v-for="(dataValue, index1) in titles" :key="index1">
        <TextViewer :dataPassed="dataValue" :class="dataValue.type" />
      </div>
      <ImageViewer :dataPassed="image.image" :class="'mx-lg-5'" />
    </div>
    <StoryListView :storyLead="storyLead" />
  </div>
</template>
<script>
import StoryListView from "../page_view_component/story_list.vue";
import ImageViewer from "../image_component/image_viewer3.vue";
import TextViewer from "../text_component/text_viewer3.vue";
export default {
  components: {
    StoryListView,
    ImageViewer,
    TextViewer,
  },
  props: {
    storyLead: Object,
    titles: Object,
    image: Object,
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

<style></style>
