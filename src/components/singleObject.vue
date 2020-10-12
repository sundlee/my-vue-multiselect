<template>
  <div class="container">
    <label class="typo__label">Single select / dropdown</label>
    <multiselect
      v-model="selected"
      deselect-label="Can't remove this value"
      track-by="name"
      label="name"
      placeholder="Select one"
      :options="options"
      :searchable="false"
      :allow-empty="false"
    >
      <template
        slot="singleLabel"
        slot-scope="{ option }"
      >
        <strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong>
      </template>
    </multiselect>
    selected: <pre class="language-json"><code>{{ selected  }}</code></pre>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'singleObject',
  components: { Multiselect },
  data() {
    return {
      selected: null,
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true },
        { name: 'Phoenix', language: 'Elixir' }
      ],
    };
  },
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.container {
  width: 600px;
  margin: auto auto;
}
</style>
