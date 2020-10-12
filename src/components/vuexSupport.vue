<template>
  <div class="container">
    <label class="typo__label">Vuex example.</label>
    <multiselect placeholder="Pick action" :value="value" :options="options" :searchable="false" @input="updateValueAction"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'vuexSupport',
  components: { Multiselect },
  data () {
    return {
      value: [
        { name: 'Javascript', code: 'js' }
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ]
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.container {
  width: 600px;
  margin: auto auto;
}
.container pre {
  padding: 10px;
  text-align: left;
  background-color: #e9e9e9;
}
.container .form__label {
  color: red;
}
</style>
