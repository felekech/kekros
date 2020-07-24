<template>
  <div class="m-lg-5">
    <div class="mx-3 containers">
      <div v-for="(dataValue, index1) in storyData.titles" :key="index1">
        <TextViewer :dataPassed="dataValue" :class="dataValue.type" />
      </div>
      <div
        v-for="(dataValue2, index2) in storyData.headers[current]"
        :key="index2"
      >
        <ImageViewer
          :dataPassed="dataValue2.image"
          :class="dataValue2.type"
          v-if="dataValue2.type == 'image'"
        />
        <TextViewer :dataPassed="dataValue2" v-else :class="dataValue2.type" />
      </div>

      <TableOfContent
        :btnClickChange="this.changeSelection"
        :dataPassed="storyData.tableContent"
      />

      <div
        v-for="(dataValue, index3) in storyData.data.articles[current]"
        :key="index3"
      >
        <ImageViewer
          :dataPassed="dataValue.image"
          :class="dataValue.type"
          v-if="dataValue.type == 'image'"
        />

        <ImageTextViewer
          :dataPassed="dataValue.image_and_text"
          v-else-if="dataValue.type == 'imageAndText'"
        />

        <VideoTextViewer
          :dataPassed="dataValue.video_and_text"
          v-else-if="dataValue.type == 'videoAndText'"
        />

        <VideoViewer
          :dataPassed="dataValue.video"
          v-else-if="dataValue.type == 'video'"
        />

        <TextViewer :dataPassed="dataValue" v-else :class="dataValue.type" />
      </div>
      <Paggination
        :btnClickChange="this.changeSelection"
        :currentDataPassed="current"
        :dataPassed="storyData.data.articles"
        :tableContent="storyData.tableContent"
      />
    </div>
  </div>
</template>
<script>
import ImageViewer from "../../components/image_component/image_viewer1.vue";
import TextViewer from "../../components/text_component/text_viewer1.vue";
import VideoViewer from "../../components/video_component/video_viewer1.vue";
import ImageTextViewer from "../../components/imageandtext_component/image_text_viewer1.vue";
import VideoTextViewer from "../../components/videoandtext_component/video_text_viewer1.vue";
import TableOfContent from "../../components/form_component/collapse.vue";
import Paggination from "../../components/form_component/paggination.vue";

export default {
  components: {
    ImageViewer,
    TextViewer,
    ImageTextViewer,
    VideoViewer,
    VideoTextViewer,
    TableOfContent,
    Paggination,
  },
  props: {
    storyData: Object,
  },
  data() {
    return {
      current: 0,
      
    };
  },

  methods: {
    changeSelection: async function(index) {
      this.current = index;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style></style>
