<template>
  <LoadingCom />
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/filter">filter</router-link> |
    <router-link to="/lightbox">lightbox</router-link> |
    <router-link to="/ButtonsView">ButtonsView</router-link>
  </nav> -->
  <router-view />
</template>

<script>
import LoadingCom from "@/components/loadingpage/LoadingCom.vue";
export default {
  name: "HeaderCom",
  components: { LoadingCom },
};
</script>
<style lang="scss"></style>
