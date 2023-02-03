import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "../src/style.css";
/* sweet alert */
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
createApp(App)
  .use(store)
  //   .use(vue3PhotoPreview)
  //   .use(VueSilentbox)
  .use(VueViewer)
  .use(VueSweetalert2)
  .use(router)
  .mount("#app");
