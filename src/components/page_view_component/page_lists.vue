<template>
  <div class="mx-lg-5">
    <div class="row story mx-lg-2" id="cursor">
      <div class="col-6 my-3" v-for="(dataValue, index) in datas" :key="index">
        <div>
          <font>
            <h2 class="headline">{{ dataValue.name }}</h2>
          </font>
          <font class="abstract">{{ dataValue.detail }}</font>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    datas: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style src="../../assets/css/topstory.css" scoped></style>
