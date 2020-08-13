<template>
  <div class="mx-lg-5">
    <div class="m-2">
      <div class="row">
        <div class="col-3" v-for="(data, index) in datas" :key="index">
          <b-img
            :src="data.img_src"
            fluid
            class="rounded mb-2"
            alt="Fluid image"
            v-b-popover.hover.top="data.text"
            :title="data.caption"
          ></b-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          img_src:
            "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",
          text:
            "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
          caption: "Camera and Time attendance",
        },
        {
          img_src:
            "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",
          text:
            "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
          caption: "Camera and Time attendance",
        },
        {
          img_src:
            "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",
          text:
            "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
          caption: "Camera and Time attendance",
        },

        {
          img_src:
            "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",
          text:
            "Nulla vitassse elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
          caption: "Camera and Time attendance",
        },
        {
          img_src:
            "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",
          text:
            "Nulla vitae elitsss libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
          caption: "Camera and Time attendance",
        },
      ],
    };
  },
  methods: {},
};
</script>
