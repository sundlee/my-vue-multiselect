<template>
  <div class="container">
    <label class="typo__label">Select with search</label>
    <multiselect
      v-model="value"
      :options="options"
      :custom-label="nameWithLang"
      placeholder="Select one"
      label="name"
      track-by="name"
    >
    </multiselect>
    <pre class="language-json"><code>{{ value  }}</code></pre>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'selectWithSearch',
  components: { Multiselect },
  data() {
    return {
      value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    };
  },
  methods: {
    nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    }
  }
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
</style>
