<template>
    <div class="content">
        <figure >
            <img :src="dataPassed.url" alt="Trulli" width="100%">
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