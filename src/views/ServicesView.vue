<template>
  <div class="home">
    <NavbarCom />
    <ServicesCom />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarCom from "@/components/navbar/NavbarCom.vue";
import ServicesCom from "@/components/servicse/ServicesCom.vue";

export default {
  name: "ServicesView",
  components: {
    NavbarCom,
    ServicesCom,
  },
};
</script>
