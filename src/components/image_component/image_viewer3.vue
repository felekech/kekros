<template>
    <div class="content mx-lg-2">
        <figure>
            <img class="photoImage" :src="dataPassed.url" alt="Image File not found" width="100%">
            <figcaption> 
                <div class="mt-md-3">
                <div class="row">

                    
                    <div :class="dataPassed.caption2!=null? 'col-md-8': 'col-md-11'" v-html="dataPassed.caption">

                    </div>
                   
                    <div class="col-md-3" style="border-left: 1px solid #ccc; color: #888;" v-html="dataPassed.caption2">

                    </div>
                </div>
                </div>
            </figcaption>
        </figure>
    </div>
</template>


<script>
export default {
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