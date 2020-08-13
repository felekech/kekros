<template>
  <div class="mx-lg-5">
    <div v-for="(dataValue, index) in datas" :key="index">
      <div class="row story my-3" id="cursor">
        <div class="col-lg-5 col-md-6 mt-2" v-if="dataValue.img_src != null">
          <div>
            <img
              class="photoImage"
              :src="dataValue.img_src"
              alt="Image File not found"
              width="100%"
            />
          </div>
        </div>
        <div class="col-lg-6 col-md-5 mt-2">
          <div>
            <font>
              <h2 class="headline">{{ dataValue.name }}</h2>
            </font>
            <font class="abstract">{{ dataValue.detail }}</font>
          </div>
        </div>
        <div class="col-1"></div>
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
