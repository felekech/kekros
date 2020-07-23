<template>
  <div>
    <MainStoryLister :titles="titles" :storyLead="storyLead" :image="image" />
  </div>
</template>
<script>
import MainStoryLister from "../../components/templates/home_page_view_template.vue";
export default {
  props: {
    type: Object,
  },
  components: {
    MainStoryLister,
  },
  data() {
    return {
      storyLead: [
        
        {
          id: 1,
          img_src:
            "https://img.zeit.de/sport/2020-03/fussball-fans-coronavirus/wide__350x197__desktop",
          keyword: "Gangelt",
          headline: '"Many feel helpless and let down by politics"',
          abstract:
            "Nowhere in Germany are there more corona cases than in Gangelt. Family doctor Christian Hoppe fears that health care in the district will collapse.",
          byline: "Interview: Christian Parth.",
        },
        
      ],
      titles: [
        {
          text: "Rechtsterrorismus",
          type: "type",
        },
        {
          text: "Ein unschmeichelhafter Spitzenplatz",
          type: "header",
        },
      ],
      image: {
        type: "image",

        image: {
          url:
            "https://img.zeit.de/wirtschaft/2020-07/fleischbetrieb-toennies-coronavirus-infektionsfaelle-fleischpreis-bild/cinema__1000x428",
          caption:
            "The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images",
          caption2: "The brother of one",
        },
      },
    };
  },
};
</script>
