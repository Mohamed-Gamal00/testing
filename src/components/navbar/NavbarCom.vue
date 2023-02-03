<template>
  <div>
    <!-- Navbar & Hero Start -->
    <div class="container-xxl position-relative p-0">
      <nav
        class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
      >
        <a href="" class="navbar-brand p-0">
          <h1 class="m-0">SEO<span class="fs-5">logo</span></h1>
          <!-- <img src="img/logo.png" alt="Logo"> -->
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav mx-auto py-0">
            <nav>
              <ul class="navbar-nav nav mx-auto mb-2 mb-lg-0 p-0">
                <router-link class="m-2 navstyle" :to="{ name: 'home' }">
                  الرئيسية
                </router-link>
                <router-link class="m-2" :to="{ name: 'about' }">
                  من نحن
                </router-link>
                <router-link class="m-2" :to="{ name: 'services' }"
                  >الخدمات</router-link
                >
                <router-link class="m-2" :to="{ name: 'works' }">
                  الاعمال
                </router-link>
                <router-link class="m-2" :to="{ name: 'contact' }">
                  تواصل معنا
                </router-link>
                <!-- <router-link class="m-2" :to="{ name: 'filter' }">
                  filter
                </router-link> -->
              </ul>
            </nav>
          </div>
          <butaton
            type="button"
            class="btn text-secondary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            ><i class="fa fa-search"></i
          ></butaton>
          <a
            href="#"
            class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
            >اسم المؤسسة</a
          >
        </div>
      </nav>
    </div>
    <!-- Navbar & Hero End -->
  </div>
</template>

<script>
export default {
  name: "NavbarCom",
};
</script>

<style scoped lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #f7f7f7;

    &.router-link-exact-active {
      color: #000000;
      border-bottom: 3px solid rgb(0, 0, 0);
    }
  }
}
</style>
