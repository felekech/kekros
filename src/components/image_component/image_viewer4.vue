<template>

    <div class="imageContainer" >
            
            <img class="photoImage" :src="dataPassed.url" alt="Trulli" width="100%">
            <div class="row">
            <div class="bottom-left pt-2 col-lg-7">

            <div v-for="(dataValue, index) in titles" :key="index"> 
             
                <div :class="dataValue.type" >
                <p class="topText">{{dataValue.text}}</p>
                </div>


            </div>
           
             </div>
             <div class="col-lg-5">
             </div>
             </div>
    </div>
</template>


<script>
export default {
    
    props: {
        dataPassed: Object,
        titles: Object,
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
.imageContainer {
  position: relative;
  
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
  
}
.topText{
    color: white;
}


</style>