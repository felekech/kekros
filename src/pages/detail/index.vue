<template>
  <div>
  {{id}}
    <FeatureTemplate :storyData="storyData" />
  </div>
</template>
<script>
import FeatureTemplate from "../../components/templates/feature_template.vue";

export default {
  components: {
    FeatureTemplate,
  },
  props: {
    id: Object
  },
  data() {
    return {
      storyData: {
        tableContent: {
          type: "tableOfContent",
          title: "ይዘት",
          subtitle: "በአንዱ ገጽ ላይ ያንብቡ",
          page: "ገጽ",
          lists: [
            {
              name: "ገጽ 1",
              detail: "የህዳሴ ግድብ ድርድር",
              url: "",
            },
         
          ],
        },
        titles: [
          {
            text: "ኢትዮጵያ",
            type: "type",
          },
          {
            text: "በህዳሴ ግድብ ድርድር ላይ የተሰጡ አስተያየቶች",
            type: "header",
          },
        ],
        headers: [
          [
            {
              text:
                "ኢትዮጵያ ያላትን የውሀ ሀብት ለመጠቀም ከሁሉም የተፋሰሱ አገሮች ጋር የጋራ ስምምነት ማድረግ እንደሚገባት ምሁራን አስታወቁ፣ ታላቁ የኢትዮጵያየህዳሴ ግድብ ዛሬ የደረሰበት ደረጃ አገሪቱ በምስራቅ አፍሪቃ ያላትን ተሰሚነት እንደሚጨምረውም አመልክተዋል፡፡",
              type: "title",
            },
            {
              text:
                'በ <a href="" style="color:black;"><b>ዓለምነው መኮንን</b></a> እና <a href="" style="color:black;"><b>ኂሩት መለሰ</b></a>',
              type: "contributors",
            },
            {
              text: "20. July 2020, 13:33 hr    /    449 comments",
              type: "comments",
            },

            {
              type: "image",

              image: {
                url:
                  "https://ichef.bbci.co.uk/news/800/cpsprodpb/16BE5/production/_113575139_edhgnwfxoaec3xn.jpg",
                caption:
                  "ገድቡ ውሃ መያዝ ከጀመረ በኋላ ደግሞ ይህን ይመስላል",
              },
            },
          ],
          [
            {
              text: "Seite 2/2: Harte Lektionen",
              type: "title",
            },
          ],
        ],

        data: {
          articles: [
            [
              {
                type: "newsText",
                text:
                  "ኢትዮጵያ ያላትን የውሀ ሀብት ለመጠቀም ከሁሉም የተፋሰሱ አገሮች ጋር የጋራ ስምምነት ማድረግ እንደሚገባት ምሁራን አስታወቁ፣ ታላቁ የኢትዮጵያ ኤሌክትሪክ ኃይል ማመንጫ ግድብ ዛሬ የደረሰበት ደረጃ አገሪቱ በምስራቅ አፍሪቃ ያላትን ተሰሚነት እንደሚጨምረውም አመልክተዋል፡፡ የኢትዮጵያ መንግስት ባልተጠበቀ ሁኔታ ትናንት የታላቁ የኢትዮጵያ የህዳሴ ግድብ የመጀመሪያ የውሀ ሙሌት መጠናቀቅን ማስታወቁን ተከትሎ ኢትዮጵያውያን አስተያየቶችን እየሰጡ ነው፡፡ ",
              },
          
              {
                type: "imageAndText",

                image_and_text: {
                  url:
                    "https://ichef.bbci.co.uk/news/800/cpsprodpb/DD47/production/_113574665_edhf5kwxkaipvoa.jpg",
                  caption:
                    "ስለሺ (ዶ/ር፤ ኢ/ር) ያጋሩት ግድቡ ውሃ ከመያዙ በፊት የነበረው ገጽታ",
                  text:
                    'ትናንት ምሽት የተደረገው የመሪዎች ውይይት "የሰከነና ጥሩ ነበር” ያሉት የውሃ፣ መስኖ እና ኢነርጂ ሚንስትሩ፤ “ስምምነት ባልተደረሰባቸው የቴክኒክና የሕግ ጉዳዮች ላይ ውይይት በማድረግ በቀጣይ ጉዳዮች አካሄድ ስምምነት ተደርጓል” ብለዋል። በዚህም መሰረት፤ “የሁሉም ደረጃ ውሃ ሙሊት ጉዳይ በአጭር ጊዜ ሙሉ በሙሉ ስምምነት እንዲደረስ ዘላቂና ሁሉን አቀፍ የሆነ ስምምነት፤ የወደፊት የውሃ አጠቃቀምን ጨምሮ በወደፊት ድርድሮች እንዲቋጩ መሪዎቹ ወስነዋል” ብለዋል።',
                },
              },

              {
                text:
                  "አስተያየታቸውን ከሰጡን መካከል የ3ኛ ዲግሪ ተማሪውና በባሕርዳር ዩኒቨርሲቲ የፖለቲካል ሳይንስና ዓለምአቀፍ ግንኙነት መምህሩ አቶ ቻላቸው ታረቀኝ ኢትዮጵያ ግድቡን ገንብታ የመጀመሪያ ውሀ ሙሌት ማጠናቀቅ መቻሏ በቀጠናው ያላትን ተሰሚነት በእጅጉ ያሳድገዋል ብለዋል፡፡",
                type: "newsText",
              },
              
                {
                type: "video",

                video: {
                  title: 'የታላቁ የሕዳሴ ግድብ የመጀመሪያ ዙር የውሃ ሙሊት"',
                  url:
                    "https://dlmultimedia.esa.int/download/public/videos/2017/10/046/1710_046_AR_EN.mp4",
                  caption:
                    "ስለ ታላቁ የኅዳሴ ግድብ ሙሌት",
                },
              },
              {
                title: "ሚኒስትሩ የእንኳን ደስ ያለን መልዕክታቸው",
                text:
                  'አቶ ቻላቸው አያይዘውም ኢትዮጵያ በቀጣይ ወንዞቿን አልምታ መጠቀም የምትችለው ከታችኞቹ ሁሉም ተፋሰስ አገሮች ጋር በመወያየትና የጋራ ግንዛቤ በመያዝ እንደሆነም አመልክተዋል፡፡ ',
                type: "newsText",
              },
            ],
            
          ],
        },
      },
    };
  },

  methods: {},
};
</script>

<style></style>
