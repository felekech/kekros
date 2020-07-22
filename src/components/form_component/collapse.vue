<template>
  <div class="mx-lg-5">
        <ul :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            class="list-group mx-lg-5 rounded-0"
            @click="visible = !visible">
            <li class="list-group-item border-right-0 border-left-0 rounded-0">
                <span class="font-weight-bold">{{dataPassed.title}} 
                <i v-if="visible==true" class="fa fa-angle-up font-weight-bold" aria-hidden="true"></i>
                <i v-else class="fa fa-angle-down font-weight-bold" aria-hidden="true"></i>
                </span>
                <span class="float-right">{{dataPassed.subtitle}}</span></li>

        </ul>
        <b-collapse id="collapse-4"  v-model="visible" class="mx-lg-5">
            <ul class="list-group" v-for="(dataValue, index) in dataPassed.lists" :key="index">
                <li @click="btnClickChange(index)" class="list-group-item border-top-0 border-right-0 border-left-0 rounded-0">
                   <a style="color:black;"> {{dataValue.name}}---{{dataValue.detail}}</a>
                </li>
            </ul>
        </b-collapse>
    </div>
</template>

<script>
  export default {
      props: {
        dataPassed: Object,
        btnClickChange: {
            type: Function
    },
    },
    data() {
      return {
        visible: false,

      }
    },
    methods: {

    }
  }
</script>