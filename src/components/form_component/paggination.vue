<template>
    <div class="content mx-lg-2">
        
                <div class="mx-lg-5">
                    <div class="mx-lg-5">
                    <span class="font-weight-bold">{{tableContent.page}} </span>
                    <span  v-for="(dataValue, index) in dataPassed" :key="index">
                    
                    <span v-if="index==currentDataPassed" style="opacity:0.5;"  class="mx-2">{{index+1}}</span>
                    <span v-else class="mx-2 font-weight-bold" @click="btnClickChange(index)">{{index+1}}</span>
                    
                    <span class="mx-2 font-weight-bold" style="opacity:0.5;">/</span>
                    </span>
                    
                    <span href="" class="mx-2" style="opacity:0.5;">{{tableContent.subtitle}}</span>
                  
                    </div>
                </div>
         
    </div>
</template>


<script>
export default {
    props: {
        tableContent: Object,
        dataPassed: Object,
        currentDataPassed: Object,
         btnClickChange: {
            type: Function
    },
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