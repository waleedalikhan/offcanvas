import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import "./assets/tailwind.css";
import VariantOneView from "./views/VariantOneView.vue";
import VariantTwoView from "./views/VariantTwoView.vue";
import VariantThreeView from "./views/VariantThreeView.vue";

const routes = [
  { path: "/", component: VariantOneView },
  { path: "/variant-2", component: VariantTwoView },
  { path: "/variant-3", component: VariantThreeView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
