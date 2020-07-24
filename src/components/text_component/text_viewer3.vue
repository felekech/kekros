<template>
    <div class="content mx-2">
        <div>
            <div class="h4 font-weight-bold" v-html="dataPassed.title">
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