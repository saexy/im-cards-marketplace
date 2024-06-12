import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppButton from "./components/AppButton.vue";
import AppSidebar from "./components/AppSidebar.vue";
import AppInput from "./components/AppInput.vue";
import AppHeader from "./components/AppHeader.vue";
import AppModal from "./components/AppModal.vue";
import AppSelect from "./components/AppSelect.vue";
import VueSelect from "vue-select";

createApp(App)
  .use(store)
  .use(router)
  .component("app-button", AppButton)
  .component("app-sidebar", AppSidebar)
  .component("app-input", AppInput)
  .component("app-modal", AppModal)
  .component("app-select", AppSelect)
  .component("app-header", AppHeader)
  .component("v-select", VueSelect)
  .mount("#app");
