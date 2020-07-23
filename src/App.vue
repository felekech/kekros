<template>
  <div class=" bg-white">
    <div>
    <app-navbar ></app-navbar>
    <router-view />
    <app-footer></app-footer>
     
    </div>
  </div>
</template>
<script>
import navbar from "./components/navbar";
import footer from "./components/footer";
export default {
  components: {
    appNavbar: navbar,
    appFooter: footer
  }
};
</script>

