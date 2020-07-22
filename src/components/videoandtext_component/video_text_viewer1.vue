<template>
  <div class="content mx-lg-2">
    <div>
        
 <figure class="mr-sm-4 mb-md-5  pt-3 figureClass">
            <video class="centerImage d-block m-auto" controls>
                <source :src="dataPassed.url" type="video/mp4">
                    Can not show video!!
            </video>
        <figcaption >
                <i style="opacity:0.7;">{{dataPassed.caption}}</i>
                </figcaption>
        </figure>
        
        <TextViewer  :dataPassed="dataPassed"  class="newsText"/>
    </div>
    </div>
</template>

<script>
import TextViewer from '../text_component/text_viewer1.vue';

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