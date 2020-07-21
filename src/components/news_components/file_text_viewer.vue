<template>
  <div class="content mx-lg-2">
    <div>
        <figure  class="mr-4 pt-3 figureClass">
            <img alt="Image" class="centerImage d-block m-auto" :src="dataPassed.url">
            <figcaption >
               <i style="opacity:0.7;">{{dataPassed.caption}}</i>
             </figcaption>
        </figure>
        <TextViewer :dataPassed="dataPassed"  class="newsText"/>
    </div>
    </div>
</template>

<script>
import TextViewer from './text_viewer.vue';

export default {
    components: {
        TextViewer,
    },
    props: {
        dataPassed: Object,
    },
    data() {
        return {
        };
    },
 
    methods: {
   
    }
}
</script>

<style >


</style>