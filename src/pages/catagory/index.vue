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
            "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",
          keyword: "አፍሪቃ",
          headline: "የኮቪድ 19 ወረርሽኝ በአፍሪቃ",
          abstract:
            "ደቡብ አፍሪቃ ውስጥ በኮቪድ 19 የሚያዘው ሰው ቁጥር በፍጥነት እየጨመረ ነው። በየቀኑም ከ10,000 የሚበልጡ በተሐዋሲው የተያዙ ሰዎች መገኘታቸው መመዝገቡ በአፍሪቃ አኅጉር ግንባር ቀደም አድርጓታል። የዓለም የጤና ድርጅትም የደቡብ አፍሪቃ ይዞታ ወረርሽኙ በመላው የአፍሪቃ አኅጉር ሊስፋፋ የመቻሉ ማመላከቻ እንደሆነ አሳስቧል።",
          byline: "በ ሸዋዬ ለገሠ/ያና ጌንዝ",
        },
        {
          id: 2,
          img_src:
            "https://africanews.space/wp-content/uploads/2019/07/Sudan-National-Space-Programme.png",
          keyword: "አፍሪቃ",
          headline: "አዲሱ የሱዳን የህግ ማሻሻያና የቲምቡክቱ የጦር ወንጀል ክስ",
          abstract:
            "ለሶስት አስርተ አመታት ሱዳንን ያስተዳደሩት ኦማር አልበሽር በጎርጎሮሳዊው ሚያዚያ 2019ዓ/ም  በህዝባዊ አመፅ ከስልጣን ከተወገዱ ወዲህ ሰሞኑን በሀገሪቱ   የተደረገው የህግ ማሻሻያ እንደ ሁለተኛ አብዮት የሚቆጥሩት ብዙዎች ናቸው።ሀገሪቱን የሚያስተዳድረው የሱዳን ሉአላዊ ምክር ቤት ያፀደቀው የህግ ማሻሻያ የሴት ልጅ ግርዛትን የሚከለክል ነው።",
          byline: "በ ሸዋዬ ለገሠ/ያና ጌንዝ",
        },
      ],
      titles: [
        {
          text: "አፍሪቃ",
          type: "type",
        },
        {
          text: "የኦማር ኧል-በሽር የፍርድ ቤት ዉሎ",
          type: "header",
        },
      ],
      image: {
        type: "image",

        image: {
          url: "https://www.dw.com/image/50078530_303.jpg",
          caption:
            "የቀድሞው የሱዳን ፕሬዝዳንት ኦማር ኧል-በሽር የዛሬ የፍርድ ቤት ዉሎ:: የ 76 ዓመቱ የቀድሞ የሱዳን ፕሬዚዳንት 1989 ዓመቱ መፈንቅለ መንግሥት ክስ ለፍርድ የሚቀርቡት ከበርካታ ተባባሪዎቻቸዉ ጋርም ነዉ። ከተከሳሾቹ መካከል የቀድሞ ምክትል ፕሬዚዳንት ፤ ሚኒስትሮች እና አገረ ገዥዎች ይገኙበታል።",
          caption2: "የፍርድ ቤት ዉሎ",
        },
      },
    };
  },
};
</script>
