<template>
  <div>
    <b-carousel
      class="mx-lg-5"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      fade
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div v-for="(slider, index) in sliders" :key="index">
        <b-carousel-slide
          :caption="slider.caption"
          :text="slider.text"
          :img-src="slider.img_src"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      sliders: [
        {
          img_src: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/02/thumbs_b_c_d8c510086be51d3df80ec5f25335926e.jpg?v=173814",
          text:
            "Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.",
          caption: "Camera and Time attendance",
        },
      ],
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      this.slide = slide;
    },
  },
};
</script>
