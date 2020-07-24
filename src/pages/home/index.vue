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
import HomaPageList1 from "../../components/templates/text_ontop_of_image_template.vue";
import HomaPageList2 from "../../components/templates/home_page_view_template.vue";
export default {
  components: {
    HomaPageList1: HomaPageList1,
    HomaPageList2: HomaPageList2,
    
  },
  data() {
    return {
      list1: {
        storyLead: [
          {
            id: 2,
            img_src:
              "https://kichuu.com/wp-content/uploads/2018/04/sidama-e1523019972538.jpg",
            keyword: "ኢትዮጵያ",
            headline: 'በኮንሶ ግጭት ከ10 በላይ ሰዎች መገደላቸውን የዐይን እማኝና ባለስልጣን ተናገሩ',
            abstract:
              "በደቡብ ክልል በኮንሶ ዞን እና በአሌ ልዩ ወረዳ አዋሳኝ ቀበሌዎች ካለፈው እሁድ ጀምሮ በተቀሰቀሰ ግጭት 13 ሰዎች መገደላቸውን፤በርካታ ሰዎች መቁሰላቸውን የአካባቢው ነዋሪ ለዶይቼ ቬለ ተናግረዋል። የኮሮሶ ዞን ሰላም እና ጸጥታ ጽህፈት ቤት ኃላፊ ግጭቱ መበርታቱን አረጋግጠው 11 ሰዎች ለመሞታቸው መረጃ እንዳላቸው ለዶይቼ ቬለ አስረድተዋል።",
            byline: "በ ሸዋንግዛዉ ወጋየሁ",
          },
        ],
        titles: [
          {
            text: "ኢትዮጵያ",
            type: "title",
          },
          {
            text: "የኢትዮጵያ ሞባይል ዳታ ሥራ ጀመረ",
            type: "header",
          },
          {
            text:
              "በኢትዮጵያ ለ23 ቀናት ተቋርጦ የቆየው የሞባይል ኢንተርኔት አገልግሎት ዛሬ ወደ ሥራ ተመልሷል። እንደ ሌሎች የኢንተርኔት አገልግሎቶች ሁሉ የኢትዮ ቴሌኮም ደንበኞች በተንቀሳቃሽ ስልኮቻቸው የሚያገኙት ይኸው ግልጋሎት የተቋረጠው ድምጻዊ ሐጫሉ ሁንዴሳ በተገደለ በማግሥቱ ሰኔ 23 ቀን 2012 ዓ.ም. ነበር።",
            type: "title",
          },
          {
            text: "በ ዮሐንስ ገብረእግዚዓብሔር",
            type: "contributors",
          },
        ],
        image: {
          type: "image",

          image: {
            url:
              "https://www.ifc.org/wps/wcm/connect/74cb0010-aa6a-4b36-8968-daafd91a5d53/gebeya-it-training-ethiopia-story-main-banner1-1920x960.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-74cb0010-aa6a-4b36-8968-daafd91a5d53-n6Ce12l",
            caption:
              "በኢትዮጵያ ለ23 ቀናት ተቋርጦ የቆየው የሞባይል ኢንተርኔት አገልግሎት",
            caption2: "የኢትዮጵያ ሞባይል ዳታ",
          },
        },
      },
      list2: {
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
            url:
              "https://www.dw.com/image/50078530_303.jpg",
            caption:
              "የቀድሞው የሱዳን ፕሬዝዳንት ኦማር ኧል-በሽር የዛሬ የፍርድ ቤት ዉሎ:: የ 76 ዓመቱ የቀድሞ የሱዳን ፕሬዚዳንት 1989 ዓመቱ መፈንቅለ መንግሥት ክስ ለፍርድ የሚቀርቡት ከበርካታ ተባባሪዎቻቸዉ ጋርም ነዉ። ከተከሳሾቹ መካከል የቀድሞ ምክትል ፕሬዚዳንት ፤ ሚኒስትሮች እና አገረ ገዥዎች ይገኙበታል።",
            caption2: "የፍርድ ቤት ዉሎ",
          },
        },
      },
    };
  },
};
</script>
