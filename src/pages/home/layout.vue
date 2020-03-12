<template>
  <div>
    <div>
    <app-navbar></app-navbar>
    </div>
    <div>
    <app-featuredstory></app-featuredstory>
    </div>
    <div>
     <app-topstory></app-topstory>
    </div>
    <div>
    <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import navbar from "../../components/navbar";
import featuredstory from "./contents/featuredstory";
import topstory from "./contents/topstory";
import footer from "../../components/footer";
export default {
  components: {
    appNavbar: navbar,
    appFeaturedstory: featuredstory,
    appTopstory: topstory,
    appFooter: footer
  }
};
</script>