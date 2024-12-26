import { defineCustomElement } from "vue";
import Alpine from "alpinejs";
import "./style.css";
import Offcanvas from "./components/Offcanvas.ce.vue";
import Timeline from "./components/Timeline.ce.vue";
import { xDataOne, xDataTwo } from "./alpine/global";
import Header from "./components/Header.ce.vue";

window.Alpine = Alpine;
Alpine.data("xDataOne", () => xDataOne());
Alpine.data("xDataTwo", () => xDataTwo());
Alpine.start();

// Converting Vue components into web components
const offCanvas = defineCustomElement(Offcanvas);
const header = defineCustomElement(Header);
const timelineEl = defineCustomElement(Timeline);
customElements.define("off-canvas", offCanvas);
customElements.define("header-component", header);
customElements.define("timeline-component", timelineEl);
