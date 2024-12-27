<script setup lang="ts">
// Necessary imports
import { ref, onMounted, watch } from "vue";
import { OnClickOutside } from "@vueuse/components";

// Event responsible for closing popup on ESC key click, cross button icon click or click outside the offcanvas drawer
const emit = defineEmits<{
  (e: "closePopup", value?: boolean): void;
}>();

// Properties that are necessary to use this component. Note: in html, they will work in kebab-case format, e.g. isOpen = is-open, hasToggler = has-toggler etc. Same goes for the events such as closePopup = @close-popup.
const {
  // This property is responsible for triggering the popup
  isOpen,
  // This property is responsible if you want the toggle button inside the component or not
  hasToggler,
  // This property is responsible if you want this component to behave as variant 2
  isBackgroundVisible,
  // This property is responsible if you want this component to behave as variant 3
  isResizeable,
  // This property is responsible if you want to change the styles of overlay further by using tailwindCSS classes
  overlayClasses,
  // This property is responsible if you want to change the styles of the inner modal by using tailwindCSS classes
  modalClasses,
  // This property is responsible for adding styles to the cross button using tailwindCSS classes
  btnClass,
} = defineProps<{
  isOpen?: boolean;
  hasToggler?: boolean;
  isBackgroundVisible?: boolean;
  isResizeable?: boolean;
  overlayClasses?: string;
  modalClasses?: string;
  btnClass?: string;
}>();

// This state variable will only be used if you want to use this component with the built-in toggle button
const isCanvasOpen = ref<boolean>(isOpen);

// Function responsible for closing the component on click outside
const close = () => {
  isCanvasOpen.value = false;
  emit("closePopup", false);
};

onMounted(() => {
  // Event responsible for closing the component on ESC key click
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
      isCanvasOpen.value = false;
      emit("closePopup", false);
    }
  });

  // Code responsible for stopping the background scrolling when the modal is open
  if (!isBackgroundVisible && !isResizeable) {
    if (isCanvasOpen.value || isOpen)
      document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  }
});

// Watcher to tell if the component is opened or closed (built-in toggle button)
watch(
  () => isCanvasOpen.value,
  (newVal) => {
    // Code responsible for stopping the background scrolling when the modal is open
    if (!isBackgroundVisible) {
      if (newVal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    }
  }
);

// Watcher to tell if the component is opened or closed (toggle button form outside)
watch(
  () => isOpen,
  (newVal) => {
    // Code responsible for stopping the background scrolling when the modal is open
    if (!isBackgroundVisible && !isResizeable) {
      if (newVal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    }
  }
);
</script>

<!-- 
  Before reading the template code below, just consider all directives that are being used with 'v' letter as Alpine's 'x' so v-if is x-if, v-for is x-for. This way you will understand better how the code below is working!
-->

<template>
  <template v-if="hasToggler">
    <button
      type="button"
      class="base-btn"
      @click="isCanvasOpen = !isCanvasOpen"
    >
      <slot name="trigger-text">Toggle Variant 1</slot>
    </button>
  </template>
  <template v-if="!isResizeable">
    <Transition name="offcanvas">
      <template v-if="isOpen || isCanvasOpen">
        <aside
          class="p-5 flex justify-end"
          :class="[
            isBackgroundVisible
              ? 'right-0 top-0 h-full fixed z-[999]'
              : 'inset-0 bg-black/50 backdrop-blur-sm fixed z-[999]',
            overlayClasses,
          ]"
        >
          <OnClickOutside @trigger="close">
            <div
              class="bg-white h-full rounded-2xl px-5 space-y-8 pb-10 lg:w-auto w-full inner relative overflow-x-hidden overflow-y-auto shadow-xl"
              :class="modalClasses"
            >
              <button
                type="button"
                class="btn-without-outline absolute right-5 top-5 z-10"
                :class="btnClass"
                @click="
                  () => {
                    isCanvasOpen = false;
                    $emit('closePopup', isCanvasOpen);
                  }
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <div>
                <!-- 
                  This <slot></slot> tag is the place where the content we'll add in our custom <off-canvas></off-canvas> opening and closing tags will show up 
                -->
                <slot></slot>
              </div>
            </div>
          </OnClickOutside>
        </aside>
      </template>
    </Transition>
  </template>
  <template v-else>
    <Transition name="offcanvas-resize">
      <template v-if="isOpen || isCanvasOpen">
        <aside
          class="p-5 flex justify-end xl:static xl:backdrop-blur-0 xl:bg-transparent inset-0 bg-black/50 backdrop-blur-sm z-[999] relative"
          :class="overlayClasses"
        >
          <OnClickOutside @trigger="close">
            <div
              class="bg-white h-full rounded-2xl px-5 space-y-8 pb-10 lg:w-auto w-full inner relative overflow-x-hidden overflow-y-auto shadow-xl"
              :class="modalClasses"
            >
              <button
                type="button"
                class="btn-without-outline absolute right-5 top-5 z-10"
                :class="btnClass"
                @click="
                  () => {
                    isCanvasOpen = false;
                    $emit('closePopup', isCanvasOpen);
                  }
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <div>
                <!-- 
                  This <slot></slot> tag is the place where the content we'll add in our custom <off-canvas></off-canvas> opening and closing tags will show up 
                -->
                <slot></slot>
              </div>
            </div>
          </OnClickOutside>
        </aside>
      </template>
    </Transition>
  </template>
</template>

<style>
/* These are necessary to add in order for the component to work with Tailwind classes */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-without-outline {
    @apply outline-none focus:outline-none cursor-pointer;
  }
  .base-btn {
    @apply btn-without-outline bg-white text-black rounded-lg px-4 py-2 border;
  }
}

/* Following are the animation classes that are responsible for animating the off-canvas */

.offcanvas-enter-active,
.offcanvas-leave-active,
.offcanvas-resize-enter-active,
.offcanvas-resize-leave-active,
.offcanvas-enter-active .inner,
.offcanvas-leave-active .inner {
  transition: all 0.6s ease;
}

.offcanvas-enter-active .inner {
  transition-delay: 0.25s;
}

.offcanvas-resize-leave-active .inner {
  transition-delay: 0.25s;
}

.offcanvas-enter-from,
.offcanvas-leave-to {
  opacity: 0;
}

.offcanvas-enter-from .inner,
.offcanvas-leave-to .inner {
  transform: translateX(20%);
  opacity: 0;
}
.offcanvas-resize-enter-from,
.offcanvas-resize-enter-from .inner {
  width: 0;
  transform: translateX(20%);
  opacity: 0;
}

.offcanvas-resize-leave-to,
.offcanvas-resize-leave-to .inner {
  transform: translateX(20%);
  opacity: 0;
}
</style>
