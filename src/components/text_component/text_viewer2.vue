<template>
    <div class="content mx-lg-2">
        <div>
            <div class="h4 font-weight-bold mt-lg-4" v-html="dataPassed.title">
            </div>
            <div v-html="dataPassed.text">
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