<template>
  <div class="container">
    <label class="typo__label">Open console to see logs.</label>
    <multiselect
      placeholder="Pick action"
      :options="actions"
      :searchable="false"
      :reset-after="true"
      @select="dispatchAction"
    >
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'actionDispatcher',
  components: { Multiselect },
  data () {
    return {
      actions: ['alert', 'console.log', 'scrollTop']
    }
  },
  methods: {
    dispatchAction (actionName) {
      switch (actionName) {
        case 'alert':
          window.alert('You just dispatched "alert" action!')
          break
        case 'console.log':
          console.log('You just dispatched "console.log" action!')
          break
        case 'scrollTop':
          window.scrollTo(0, 0)
          break
      }
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
