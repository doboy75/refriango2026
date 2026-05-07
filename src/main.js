import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import store from "./store";
import router from "./router";

createApp(App).use(router).use(store).mount("#app");
