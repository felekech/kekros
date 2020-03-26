<template>
  <div>
    <div>
       <div>
      <app-navbar></app-navbar>
    </div>
    </div>
<app-story></app-story>
 <div>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import navbar from "../../components/navbar";
import footer from "../../components/footer";
import storydesk from '../../components/storydesk'
export default {
  components:{
    appStory:storydesk,
    appNavbar: navbar,
    appFooter: footer
  }
}
</script>