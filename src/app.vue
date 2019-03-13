<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col"></div>
      <div class="col-10 d-flex flex-column justify-content-center align-items-center">
        <h2>{{title}}</h2>
        <img class="m-auto" height="100" width="100" src="./assets/vue.png">
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    title(): string {
      return this.$store.state.title;
    }
  }
});
</script>

<style>
h2 {
  font-family: "Fira Code";
}
</style>


