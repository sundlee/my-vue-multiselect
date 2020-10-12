<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Single Select</router-link> |
      <router-link to="/single-object">Single Select (Object)</router-link> |
      <router-link to="/select-with-search">Select with search</router-link> |
      <router-link to="/multiple-select">Multiple Select</router-link> |
      <!-- <router-link to="/asynchronous-select">Asynchronous Select</router-link> | -->
      <router-link to="/tagging">Tagging</router-link> |
      <router-link to="/custom-option">Custom Option</router-link> |
      <router-link to="/option-groups">Option Groups</router-link> |
      <router-link to="/action-dispatcher">Action Dispatcher</router-link> |
      <router-link to="/custom-config">Custom Configuration</router-link>
      
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  margin-bottom: 60px;
}
</style>
