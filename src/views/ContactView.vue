<template>
  <div class="home">
    <NavbarCom />
    <ContactCom />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarCom from "@/components/navbar/NavbarCom.vue";
import ContactCom from "@/components/contact/ContactCom.vue";

export default {
  name: "ContactView",
  components: {
    NavbarCom,
    ContactCom,
  },
};
</script>
