import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AppButton from "./components/AppButton.vue";
import AppSidebar from "./components/AppSidebar.vue";
import AppInput from "./components/AppInput.vue";
import AppHeader from "./components/AppHeader.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("app-button", AppButton)
  .component("app-sidebar", AppSidebar)
  .component("app-input", AppInput)
  .component("app-header", AppHeader)
  .mount("#app");
