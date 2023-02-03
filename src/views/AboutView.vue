<template>
  <div class="home">
    <NavbarCom />
    <AboutCom />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarCom from "@/components/navbar/NavbarCom.vue";
import AboutCom from "@/components/about/AboutCom.vue";

export default {
  name: "AboutView",
  components: {
    NavbarCom,
    AboutCom,
  },
};
</script>
