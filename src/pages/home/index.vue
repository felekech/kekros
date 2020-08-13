<template>
  <div>
    <Slider class="mx-3 mb-5 containers" />
    <MainPageLister :dataValues="dataValues1" :visible="'true'" />
    <MainPageLister :dataValues="dataValues2" :visible="false" />
    <MainPageLister :dataValues="dataValues3" :visible="false" />
    <div class="mx-lg-5">
      <div class="mx-lg-2">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        ></b-embed>
      </div>
    </div>
    <PopOver />
  </div>
</template>
<script>
import MainPageLister from "../../components/templates/home_page_view_template.vue";
import Slider from "../../components/page_view_component/slider_view.vue";
import PopOver from "../../components/page_view_component/pop_over_view.vue";
export default {
  props: {
    type: Object,
  },
  components: {
    MainPageLister,
    Slider,
    PopOver,
  },
  data() {
    return {
      dataValues1: {
        title: "Camera",
        subtitle: "IP and Analog Cameras",
        lists: [
          {
            img_src:
              "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",

            name: "የኮቪድ 19 ወረርሽኝ በአፍሪቃ",
            detail:
              "ደቡብ አፍሪቃ ውስጥ በኮቪድ 19 የሚያዘው ሰው ቁጥር በፍጥነት እየጨመረ ነው። በየቀኑም ከ10,000 የሚበልጡ በተሐዋሲው የተያዙ ሰዎች መገኘታቸው መመዝገቡ በአፍሪቃ አኅጉር ግንባር ቀደም አድርጓታል። የዓለም የጤና ድርጅትም የደቡብ አፍሪቃ ይዞታ ወረርሽኙ በመላው የአፍሪቃ አኅጉር ሊስፋፋ የመቻሉ ማመላከቻ እንደሆነ አሳስቧል።",
          },
          {
            img_src:
              "https://africanews.space/wp-content/uploads/2019/07/Sudan-National-Space-Programme.png",

            name: "አዲሱ የሱዳን የህግ ማሻሻያና የቲምቡክቱ የጦር ወንጀል ክስ",
            detail:
              "ለሶስት አስርተ አመታት ሱዳንን ያስተዳደሩት ኦማር አልበሽር በጎርጎሮሳዊው ሚያዚያ 2019ዓ/ም  በህዝባዊ አመፅ ከስልጣን ከተወገዱ ወዲህ ሰሞኑን በሀገሪቱ   የተደረገው የህግ ማሻሻያ እንደ ሁለተኛ አብዮት የሚቆጥሩት ብዙዎች ናቸው።ሀገሪቱን የሚያስተዳድረው የሱዳን ሉአላዊ ምክር ቤት ያፀደቀው የህግ ማሻሻያ የሴት ልጅ ግርዛትን የሚከለክል ነው።",
          },
        ],
      },
      dataValues2: {
        title: "Time attendance",
        subtitle: "For Offices",

        lists: [
          {
            img_src:
              "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",

            name: "የኮቪድ 19 ወረርሽኝ በአፍሪቃ",
            detail:
              "ደቡብ አፍሪቃ ውስጥ በኮቪድ 19 የሚያዘው ሰው ቁጥር በፍጥነት እየጨመረ ነው። በየቀኑም ከ10,000 የሚበልጡ በተሐዋሲው የተያዙ ሰዎች መገኘታቸው መመዝገቡ በአፍሪቃ አኅጉር ግንባር ቀደም አድርጓታል። የዓለም የጤና ድርጅትም የደቡብ አፍሪቃ ይዞታ ወረርሽኙ በመላው የአፍሪቃ አኅጉር ሊስፋፋ የመቻሉ ማመላከቻ እንደሆነ አሳስቧል።",
          },
          {
            img_src:
              "https://africanews.space/wp-content/uploads/2019/07/Sudan-National-Space-Programme.png",

            name: "አዲሱ የሱዳን የህግ ማሻሻያና የቲምቡክቱ የጦር ወንጀል ክስ",
            detail:
              "ለሶስት አስርተ አመታት ሱዳንን ያስተዳደሩት ኦማር አልበሽር በጎርጎሮሳዊው ሚያዚያ 2019ዓ/ም  በህዝባዊ አመፅ ከስልጣን ከተወገዱ ወዲህ ሰሞኑን በሀገሪቱ   የተደረገው የህግ ማሻሻያ እንደ ሁለተኛ አብዮት የሚቆጥሩት ብዙዎች ናቸው።ሀገሪቱን የሚያስተዳድረው የሱዳን ሉአላዊ ምክር ቤት ያፀደቀው የህግ ማሻሻያ የሴት ልጅ ግርዛትን የሚከለክል ነው።",
          },
        ],
      },
      dataValues3: {
        title: "Alarm System",
        subtitle: "House alerm system",
        lists: [
          {
            img_src:
              "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",

            name: "የኮቪድ 19 ወረርሽኝ በአፍሪቃ",
            detail:
              "ደቡብ አፍሪቃ ውስጥ በኮቪድ 19 የሚያዘው ሰው ቁጥር በፍጥነት እየጨመረ ነው። በየቀኑም ከ10,000 የሚበልጡ በተሐዋሲው የተያዙ ሰዎች መገኘታቸው መመዝገቡ በአፍሪቃ አኅጉር ግንባር ቀደም አድርጓታል። የዓለም የጤና ድርጅትም የደቡብ አፍሪቃ ይዞታ ወረርሽኙ በመላው የአፍሪቃ አኅጉር ሊስፋፋ የመቻሉ ማመላከቻ እንደሆነ አሳስቧል።",
          },
          {
            img_src:
              "https://africanews.space/wp-content/uploads/2019/07/Sudan-National-Space-Programme.png",

            name: "አዲሱ የሱዳን የህግ ማሻሻያና የቲምቡክቱ የጦር ወንጀል ክስ",
            detail:
              "ለሶስት አስርተ አመታት ሱዳንን ያስተዳደሩት ኦማር አልበሽር በጎርጎሮሳዊው ሚያዚያ 2019ዓ/ም  በህዝባዊ አመፅ ከስልጣን ከተወገዱ ወዲህ ሰሞኑን በሀገሪቱ   የተደረገው የህግ ማሻሻያ እንደ ሁለተኛ አብዮት የሚቆጥሩት ብዙዎች ናቸው።ሀገሪቱን የሚያስተዳድረው የሱዳን ሉአላዊ ምክር ቤት ያፀደቀው የህግ ማሻሻያ የሴት ልጅ ግርዛትን የሚከለክል ነው።",
          },
        ],
      },
    };
  },
};
</script>
