<template>
  <div class="box mx-lg-5 mx-md-3">
  <div class="row">
  <div class="col-lg-11">
  <div class="topic mt-lg-5 mb-lg-5">
  <div class>
  <font>
  <p class="h1 top_key">Virus</p>
  </font>
  <font>
  <h1 class="header">What you should Know about the pathogen</h1>
  </font>
  </div>
  </div>
  </div>
  </div>
  <div v-for="story in stories" :key="story.id">
  <div class="row mx-lg-5 mx-md-2 story">
  <div class="col-lg-5 col-md-6 col-sm-12 mt-5">
  <div class="card" style="width:auto">
  <img :src="story.img_src" alt />
  </div>
  </div>
  <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
  <div>
  <font class="keyword">{{story.keyword}}</font>
  <font>
  <h2 class="headline">{{story.headline}}</h2>
  </font>
  <font class="abstract">{{story.abstract}}</font>
  <br />
  <br />
  <font class="byline">{{story.byline}}</font>
  </div>
  </div>
  </div>
  </div>
  <hr width="95%">
  <div class="d-flex justify-content-center">
  <p class="link">
  <a href="#">More about Covid19
          <i class="fa fa-arrow-right"></i>
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
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
          abstract:
            "The policy of closed borders is working, says the Greek minister Adonis Georgiadis. If you have no right to asylum, you want to hold on for life.",
          byline: "    Interview: Zacharias Zacharakis ."
        }
      ]
    };
  }
};
</script>
<style scoped>
.link a {
  color: black;
}
.link a:hover {
  color: brown;
}
.keyword {
  color: brown;
}
.topic {
  text-align: center;
}
@media (min-width: 1024px) {
  .header {
    text-align: center;
    font-size: 2.99rem;
  }
  .headline {
    font-size: 1.4rem;
  }
}
@media (max-width: 768px) {
  .headline {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .abstract {
    font-size: 0.8rem;
  }
  .byline {
    font-size: 0.8rem;
  }
}
@media (max-width: 540px) {
  .box {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .story {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .byline {
    font-size: 0.8rem;
  }
  .header {
    font-size: 1.8rem;
  }
  .top_key {
    font-size: 1.8rem;
  }
}
.box {
  border-left: 0.5rem solid rgb(240, 238, 238);
  border-right: 0.5rem solid rgb(240, 238, 238);
  border-bottom: 0.5rem solid rgb(240, 238, 238);
  border-top: 0.5rem solid rgb(240, 238, 238);
}
</style>