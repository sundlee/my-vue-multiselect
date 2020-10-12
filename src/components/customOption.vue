<template>
  <div class="container">
    <label class="typo__label">Custom option template</label>
    <multiselect
      v-model="value"
      placeholder="Fav No Man’s Sky path"
      label="title"
      track-by="title"
      :options="options"
      :option-height="104"
      :custom-label="customLabel"
      :show-labels="false"
    >
      <template slot="singleLabel" slot-scope="props">
        <img class="option__image" :src="props.option.img" height="100" :alt="props.option.desc">
        <span class="option__desc">
          <span class="option__title">
            {{ props.option.title }}
          </span>
        </span>
      </template>
      <template slot="option" slot-scope="props">
        <img class="option__image" :src="props.option.img" height="100" :alt="props.option.desc">
        <div class="option__desc">
          <span class="option__title">
            {{ props.option.title }}
          </span>
          <span class="option__small">
            {{ props.option.desc }}
          </span>
        </div>
      </template>
    </multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'customOption',
  components: { Multiselect },
  data () {
    return {
      value: { title: 'Explorer', desc: 'Discovering new species!', img: require('../assets/creatures.png') },
      options: [
        { title: 'Space Pirate', desc: 'More space battles!', img: require('../assets/fleet.png') },
        { title: 'Merchant', desc: 'PROFIT!', img: require('../assets/trading_post.png') },
        { title: 'Explorer', desc: 'Discovering new species!', img: require('../assets/creatures.png') },
        { title: 'Miner', desc: 'We need to go deeper!', img: require('../assets/resource_lab.png') },
      ]
    }
  },
  methods: {
    customLabel ({ title, desc }) {
      return `${title} – ${desc}`
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
