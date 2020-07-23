<template>
    <div>
        <div class="mx-sm-3" v-for="(dataValue, index1) in titles" :key="index1">
              <TextViewer :dataPassed="dataValue"  :class="dataValue.type" />
        </div>
        <ImageViewer  :dataPassed="image.image" :class="'mx-lg-5'"/>
        <StoryListView :stories="stories"/>
    </div>
</template>
<script>
import StoryListView from '../page_view_component/story_list.vue';
import ImageViewer from '../image_component/image_viewer3.vue';
import TextViewer from '../text_component/text_viewer3.vue';
export default {
    components: {
      StoryListView,
      ImageViewer,
      TextViewer,
    
  },
  data() {
    return {
        stories: [
        {
          id: 1,
          img_src:
            "https://img.zeit.de/politik/ausland/2020-03/afghanistan-usa-soldaten-abzug/wide__350x197__desktop",
          keyword: "Coronavirus",
          headline: "RKI President expects medication to be used Soon",
          abstract:
            "According to the Robert Koch Institute, there will soon be therapeutic agents for the sick. There is the 12th case in Berlin. Acruise ship was stopped off the US coast. The news blog",
          byline: "By Andrea Buhtz, Karin Geil, Anne Schwedt u. a."
        },
        {
          id: 2,
          img_src:
            "https://img.zeit.de/sport/2020-03/fussball-fans-coronavirus/wide__350x197__desktop",
          keyword: "Gangelt",
          headline: '"Many feel helpless and let down by politics"',
          abstract:
            "Nowhere in Germany are there more corona cases than in Gangelt. Family doctor Christian Hoppe fears that health care in the district will collapse.",
          byline: "Interview: Christian Parth."
        },
        {
          id: 3,
          img_src:
            "https://img.zeit.de/politik/ausland/2020-03/adonis-georgiadis-griechenland-asylpolitik-eu-aussengrenze-bild/wide__350x197__desktop",
          keyword: "Adonis Georgiadis",
          headline: '"No one will get through to Greece through Greece"',
          abstract: "The policy of closed borders is working, says the Greek minister Adonis Georgiadis. If you have no right to asylum, you want to hold on for life.",
          byline: " Interview: Zacharias Zacharakis ."
        }
      ],
        titles:[
                {
            text:"Rechtsterrorismus",
            type:"type",
         
        },
        {
            text:"Ein unschmeichelhafter Spitzenplatz",
            type:"header",
        },
        ],
        image:{
            type:"image",
            
            image:{
                url:"https://img.zeit.de/wirtschaft/2020-07/fleischbetrieb-toennies-coronavirus-infektionsfaelle-fleischpreis-bild/cinema__1000x428",
                caption:"The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images",
                caption2: "The brother of one"
            },
           
        },
    };
  },
 
    methods: {
   
    }
}
</script>

<style >

</style>