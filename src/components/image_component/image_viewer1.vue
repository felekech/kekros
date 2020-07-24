<template>
    <div class="content mx-lg-2">
        <figure >
            <img class="photoImage" :src="dataPassed.url" alt="Image File not found" width="100%">
            <figcaption> 
                <div class="mx-lg-5">
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