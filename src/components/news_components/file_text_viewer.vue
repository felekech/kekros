<template>
  <div class="content">
    <div>
        <figure class="mr-4 pt-2 figureClass">
            <img alt="Trulli" class="centerImage" :src="dataPassed.url">
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