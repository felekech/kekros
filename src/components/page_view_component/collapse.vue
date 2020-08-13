<template>
  <div class="mx-lg-5">
    <ul
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      class="list-group mx-lg-5 rounded-0"
      @click="visible = !visible"
    >
      <li class="list-group-item border-right-0 border-left-0 rounded-0">
        <span class="font-weight-bold"
          >{{ dataValues.title }}
          <i
            v-if="visible == true"
            class="fa fa-angle-up font-weight-bold"
            aria-hidden="true"
          ></i>
          <i
            v-else
            class="fa fa-angle-down font-weight-bold"
            aria-hidden="true"
          ></i>
        </span>
        <span class="float-right">{{ dataValues.subtitle }}</span>
      </li>
    </ul>
    <b-collapse id="collapse-4" v-model="visible" class="mx-lg-5">
      <DataListView :datas="dataValues.lists" />
    </b-collapse>
  </div>
</template>

<script>
import DataListView from "./data_list.vue";
export default {
  props: {
    dataValues: Object,
    visible: Object,
  },
  components: {
    DataListView,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style></style>
