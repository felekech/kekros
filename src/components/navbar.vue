<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/">
        <img :src="img_src" width="100%" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>

    <b-navbar toggleable="lg">
      <b-collapse id="nav-collapse" is-nav class="horizontalLine">
        <b-navbar-nav v-for="(link, index) in links" :key="index">
          <b-nav-item
            @click="changeSelection(index)"
            :to="link.link"
            :class="selectedItem == index ? 'activedNav' : ''"
          >
            {{ link.title }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  data: () => {
    return {
      selectedItem: -1,
      type: "",
      img_src: "https://www.miltolabs.com/assets/milto.svg",
      // img_src: require("../assets/zeit-online-logo.png"),

      links: [
        { title: "ፖለቲካ", link: "/politics" },
        { title: "ህብረተሰብ", link: "/society" },
        { title: "ስፖርት", link: "/sport" },
        { title: "ጤና", link: "/health" },
        { title: "ኢኮኖሚ", link: "/economy" },
        { title: "ቴክኖሎጂ", link: "/technology" },
        { title: "ጠፈር", link: "/space" },
        { title: "ግብርና", link: "/agriculture" },
      ],
    };
  },
  methods: {
    changeSelection: async function(index) {
      this.selectedItem = index;
    },
  },
};
</script>
<style src="../assets/css/navbar.css" scoped>

}
</style>
