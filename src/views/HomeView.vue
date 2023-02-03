<template>
  <div class="home">
    <NavbarCom />
    <HeaderCom />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarCom from "@/components/navbar/NavbarCom.vue";
import HeaderCom from "@/components/home/HeaderCom.vue";

export default {
  name: "HomeView",
  components: {
    NavbarCom,
    HeaderCom,
  },
};
</script>
