import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./style.css";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import uInput from "./components/input.vue";
import uSelect from "./components/select.vue";

const app = createApp(App);

app.component("uInput", uInput).component("uSelect", uSelect);

app.use(router);
app.use(ElementPlus);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
