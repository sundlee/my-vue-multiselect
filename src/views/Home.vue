<template>
  <div class="home">
    <single-select />
  </div>
</template>

<script>
import singleSelect from '@/components/singleSelect.vue';

export default {
  name: 'Home',
  components: {
    singleSelect,
  },
};
</script>

<style>
.home {
  width: 600px;
  /* background-color: red; */
  margin: auto auto;
}
</style>
