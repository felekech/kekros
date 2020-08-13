<template>
  <div>
    <div class="mx-3 containers">
      <DataListView :dataValues="dataValues" :visible="visible"/>
    </div>
  </div>
</template>
<script>
import DataListView from "../page_view_component/collapse.vue";
export default {
  components: {
    DataListView,
  },
  props: {
    dataValues: Object,
    visible: Boolean,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style></style>
