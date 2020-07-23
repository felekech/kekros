<template>
  <div>
    <HomaPageList1
      :titles="list1.titles"
      :storyLead="list1.storyLead"
      :image="list1.image"
    />
    <HomaPageList2
      :titles="list2.titles"
      :storyLead="list2.storyLead"
      :image="list2.image"
    />
  </div>
</template>
<script>
import HomaPageList2 from "../../components/templates/home_page_view_template.vue";
import HomaPageList1 from "../../components/templates/text_ontop_of_image_template.vue";
export default {
  components: {
    HomaPageList2: HomaPageList2,
    HomaPageList1: HomaPageList1,
  },
  data() {
    return {
      list1: {
        storyLead: [
          {
            id: 2,
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
            text: "Bundeswehr",
            type: "title",
          },
          {
            text: "Soldaten, die den Umsturz planen",
            type: "header",
          },
          {
            text:
              "Aktive und ehemalige Soldaten haben in einer bisher unbekannten Chatgruppe rechtsextreme Hetze verbreitet. Mit im Chat: eine mutmaßliche Terrorunterstützerin.",
            type: "title",
          },
          {
            text: "Von Christian Fuchs",
            type: "title",
          },
        ],
        image: {
          type: "image",

          image: {
            url:
              "https://img.zeit.de/politik/deutschland/2020-07/bundeswehr-rechtsextremismus-chat/cinema__980x420",
            caption:
              "The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images The brother of one of those killed in Hanau laid flowers to commemorate. © Thomas Lohnes / Getty Images",
            caption2: "The brother of one",
          },
        },
      },
      list2: {
        storyLead: [
          {
            id: 1,
            img_src:
              "https://img.zeit.de/politik/ausland/2020-03/afghanistan-usa-soldaten-abzug/wide__350x197__desktop",
            keyword: "Coronavirus",
            headline: "RKI President expects medication to be used Soon",
            abstract:
              "According to the Robert Koch Institute, there will soon be therapeutic agents for the sick. There is the 12th case in Berlin. Acruise ship was stopped off the US coast. The news blog",
            byline: "By Andrea Buhtz, Karin Geil, Anne Schwedt u. a.",
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
      },
    };
  },
};
</script>
