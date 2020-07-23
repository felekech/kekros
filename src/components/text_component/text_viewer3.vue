<template>
    <div class="content">
        <div>
            <div class="h4 font-weight-bold" v-html="dataPassed.title">
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