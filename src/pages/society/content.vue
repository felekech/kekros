<template>
  <div>
    <div>
      <app-navbar></app-navbar>
    </div>
    <div id="flex" v-for="news in storys" :key="news.index">
      <div class="row title">
        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-md-3">
          <font class="slugline">{{news.slugline}}</font>
          <font>
            <h1 class="head h1 mt-2">
              <b>{{news.headline}}</b>
            </h1>
          </font>
        </div>
      </div>
      <div class="mx-md-3 imgs">
        <img :src="news.src" alt width="100%" />
      </div>
      <div class="col-lg-9 col-md-10 abstract mx-1">
        <font>{{news.abstract}}</font>
      </div>
    </div>
    <div v-for="story in news" :key="story.index">
      <div class="row mt-5 mx-lg-5 mx-md-3 px-xl-5 txt-img">
        <div class="col-lg-5 col-md-6 col-sm-12">
          <div>
            <img :src="story.src" alt width="100%" />
          </div>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-12">
          <div class="txt">
            <font class="keyword">{{story.slugline}}</font>
            <font>
              <h1 class="headline">
                <b>{{story.headline}}</b>
              </h1>
            </font>
            <font>{{story.abstract}}</font>
            <font>
              <p>{{story.byline}}</p>
            </font>
          </div>
        </div>
      </div>
    </div>
    <div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/navbar";
import footer from "../../components/footer";
export default {
  components: {
    appNavbar: navbar,
    appFooter: footer,
  },
  data() {
    return {
      storys: [
        {
          id: 1,
          src:
            "https://img.zeit.de/gesellschaft/2020-03/usa-kalifornien-waldbraende-stromversorger-fahrlaessige-toetung-schuld-bil/cinema__980x420",
          slugline: "Forest fires",
          headline: "Electricity supplier pleads guilty to negligent homicide",
          abstract:
            " The US energy provider PG&E is responsible for the forest fires in California in 2018. Broken power lines triggered the fire, 84 people died."
        }
      ],
      news: [
        {
          id: 1,
          src:
            "https://img.zeit.de/gesellschaft/2020-03/germanwings-absturz-gedenken-flug-9525/wide__350x197__desktop",
          slugline: "Lessons from the Corona Crisis",
          headline: "We will have to reorganize the world",
          abstract:
            "After the Corona crisis, not everything can simply become the same as before. And until then, all we can do is exercise solidarity and treat each other with decency.",
          byline: "By Simone Gaul"
        },
        {
          id: 2,
          src:
            "https://img.zeit.de/gesellschaft/zeitgeschehen/2020-03/lektionen-corona-krise-globalisierung-outsourcing-5vor8-2/wide__350x197__desktop",
          slugline: "Lessons from the Corona Crisis",
          headline: "We will have to reorganize the world",
          abstract:
            "After the Corona crisis, not everything can simply become the same as before. And until then, all we can do is exercise solidarity and treat each other with decency.",
          byline: "By Simone Gaul"
        }
      ]
    };
  }
};
</script>
<style src='../../assets/css/society.css' scoped>
</style>