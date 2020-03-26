<template>
  <div>
    <div>
      <app-navbar></app-navbar> 
    </div>

    <div>
    <div class="row">
      <div class="col-lg-8 col-md-7 text">
        <font>
          <p  id="key_word">{{ story.slugline}}</p>
        </font>
        <font>
          <h1 class="headline">
            <b>{{ story.headline}}</b>
          </h1>
        </font>
        <font class="abstract">
          <p
            class="mt-lg-3"
          >{{ story.abstract}}</p>
        </font>
        <font>
          <p v-html=" story.byline" class="byline">  </p>
        </font>
        <div class="date mb-md-5">
          <font>{{ story.dateline}}</font>
        </div>
      </div>
    </div>
    <div>
      <div class="col-lg-10 col-md-10 imagess " >
            <div v-html="story.body"></div>
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
  props:['story'],
      data(){
        return{      
     
        }
      }
  
};
</script>
<style src='../../assets/css/detailunscoped.css'>
 
</style>
<style src='../../assets/css/detailpage.css' scoped>

</style>