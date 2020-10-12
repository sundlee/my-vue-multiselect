<template>
  <div class="container">
    <div :class="{ 'invalid': isInvalid }">
      <label class="typo__label">Customized multiselect</label>
      <multiselect
        placeholder="Pick at least one"
        select-label="Enter doesn’t work here!"
        :value="value"
        :options="options"
        :multiple="true"
        :searchable="true"
        :allow-empty="false"
        :hide-selected="true"
        :max-height="150"
        :max="3"
        :disabled="isDisabled"
        :block-keys="['Tab', 'Enter']"
        @input="onChange"
        @close="onTouch"
        @select="onSelect"
      >
        <template slot="maxElements" slot-scope="props">
          최대인 3개의 옵션이 선택되었습니다. 다른 선택을 위해서 먼저 선택한 옵션중 하나를 삭제해주세요.
        </template>
      </multiselect>
      <label class="typo__label form__label" v-show="isInvalid">Must have at least one value</label>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'multipleSelect',
  components: { Multiselect },
  data () {
    return {
      isDisabled: false,
      isTouched: false,
      value: [],
      options: ['Select option', 'Disable me!', 'Reset me!', 'mulitple', 'label', 'searchable']
    }
  },
  computed: {
    isInvalid () {
      return this.isTouched && this.value.length === 0
    }
  },
  methods: {
    onChange (value) {
      this.value = value
      if (value.indexOf('Reset me!') !== -1) this.value = []
    },
    onSelect (option) {
      if (option === 'Disable me!') this.isDisabled = true
    },
    onTouch () {
      this.isTouched = true
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
