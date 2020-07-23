<template>
<!-- This is a layout page for the home page here all the components that required by the home page -->
  <div >
    <div>
      <!-- The navigational bar is used here at the top of the home page -->
    <app-navbar ></app-navbar>
    </div>
        <div>
    <HomaPageList2/>
    </div>
    <div>
    
      <!-- The featured story is the top story right now in the home page lay out after the navigational bar
    <app-featuredstory></app-featuredstory>-->
    </div>
    <div>
    <HomaPageList/>
    </div>
    <br/>
    <!--
    <div>
      The top story next to the featured story
     <app-topstory></app-topstory>
    </div>
     -->
    <div>
      <!-- The footer of the home page layout at the end of the page -->
    <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
// Imported component to be used in the view as well to create the reusable component in the model
import navbar from "../../components/navbar";
// import featuredstory from "./contents/featuredstory";
// import topstory from "./contents/topstory";
import footer from "../../components/footer";
import HomaPageList from '../../components/templates/home_page_view_template.vue';
import HomaPageList2 from '../../components/templates/text_ontop_of_image_template.vue';
export default {
    // Use to create reusable components
  components: {
    appNavbar: navbar,
    // appFeaturedstory: featuredstory,
    // appTopstory: topstory,
    appFooter: footer,
    HomaPageList:HomaPageList,
    HomaPageList2:HomaPageList2,
  }
};
</script>