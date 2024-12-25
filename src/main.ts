import { defineCustomElement } from "vue";
import Alpine from "alpinejs";
import "./style.css";
import Offcanvas from "./components/Offcanvas.ce.vue";
import Timeline from "./components/Timeline.ce.vue";
import { xDataOne } from "./alpine/global";

window.Alpine = Alpine;
Alpine.data("xDataOne", () => xDataOne());
Alpine.start();

// Converting Vue components into web components
const offCanvas = defineCustomElement(Offcanvas);
const timelineEl = defineCustomElement(Timeline);
customElements.define("off-canvas", offCanvas);
customElements.define("timeline-component", timelineEl);
