<template>
    <div class="content mx-lg-2">
        <figure class="mx-lg-5">
            <img class="photoImage mx-lg-5" :src="dataPassed.url" alt="Image File not found" width="90%">
            <figcaption> 
                <div >
                    <div class="mx-lg-5" v-html="dataPassed.caption">
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