<template>
    <div class="content mx-lg-2">
        <figure >
            <video class="photoImage" width="100%" controls>
                <source :src="dataPassed.url" type="video/mp4">
                    Can not show video!!
            </video>
            <figcaption> 
                <div class="mx-lg-5">
                    <div class="mx-lg-5 font-weight-bold my-lg-3" v-html="dataPassed.title">
                    </div>
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