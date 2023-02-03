<template>
  <div class="home">
    <NavbarCom />
    <WorksCom />
  </div>
</template>

<script>
import NavbarCom from "@/components/navbar/NavbarCom.vue";
import WorksCom from "@/components/works/WorksCom.vue";

export default {
  name: "WorksView",
  components: {
    NavbarCom,
    WorksCom,
  },
};
</script>
