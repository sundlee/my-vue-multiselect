<template>
  <div class="container">
    <label class="typo__label">Single select</label>
    <multiselect
      v-model="selected"
      :options="options"
      :searchable="false"
      :close-on-select="true"
      :show-labels="false"
      placeholder="Pick a value"
    />
    <p>selected: {{selected}}</p>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'singleSelect',
  components: { Multiselect },
  data() {
    return {
      selected: null,
      options: ['list', 'of', 'options']
    };
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.container {
  width: 600px;
  /* background-color: red; */
  margin: auto auto;
}
</style>
