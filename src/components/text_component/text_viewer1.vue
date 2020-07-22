<template>
    <div class="content mx-lg-2">
        <div class="mx-lg-5">
            <div class="mx-lg-5 h4 font-weight-bold mt-lg-4" v-html="dataPassed.title">
            </div>
            <div class="mx-lg-5" v-html="dataPassed.text">
            </div>
        </div>
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