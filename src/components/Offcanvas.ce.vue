<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import useClickOutside from "../composables/useClickOutside";
import CircleXIcon from "./svgs/CircleXIcon.vue";
import type { Props } from "../interfaces";

const emit = defineEmits<{
  (e: "prevClick", value?: boolean): void;
  (e: "closePopup", value?: boolean): void;
}>();

const { isOpen, hasToggler } = defineProps<Props>();

const componentRef = ref();
const excludeRef = ref();
const isCanvasOpen = ref<boolean>(isOpen);

// Function responsible for closing the component on click outside
useClickOutside(
  componentRef,
  () => {
    isCanvasOpen.value = false;
    console.log("clicked outside");
    // if (isOpen) emit("closePopup", false);
  },
  excludeRef
);

onMounted(() => {
  // Event responsible for closing the component on ESC key click
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
      isCanvasOpen.value = false;
      emit("closePopup", false);
    }
  });

  if (isCanvasOpen.value || isOpen)
    document.documentElement.style.overflow = "hidden";
  else document.documentElement.style.overflow = "auto";
});

watch(
  () => isCanvasOpen.value,
  (newVal) => {
    if (newVal) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  }
);

watch(
  () => isOpen,
  (newVal) => {
    if (newVal) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  }
);
</script>

<template>
  <template v-if="hasToggler">
    <button
      ref="excludeRef"
      type="button"
      class="base-btn"
      @click="isCanvasOpen = !isCanvasOpen"
    >
      <slot name="trigger-text">Toggle Variant 1</slot>
    </button>
  </template>
  <Transition name="offcanvas">
    <template v-if="isOpen || isCanvasOpen">
      <aside
        class="fixed z-[999] inset-0 p-5 bg-black/50 backdrop-blur-sm flex justify-end"
      >
        <div
          class="bg-white h-full rounded-2xl px-5 space-y-8 pb-10 lg:w-auto w-full inner relative overflow-x-hidden overflow-y-auto"
          ref="componentRef"
          id="offcanvas"
        >
          <button
            type="button"
            class="btn-without-outline absolute right-5 top-5 z-10"
            @click="
              () => {
                isCanvasOpen = false;
                $emit('closePopup', isCanvasOpen);
              }
            "
          >
            <CircleXIcon />
          </button>
          <div>
            <slot></slot>
          </div>
        </div>
      </aside>
    </template>
  </Transition>
</template>

<style>
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

.offcanvas-enter-active,
.offcanvas-leave-active,
.offcanvas-enter-active .inner,
.offcanvas-leave-active .inner {
  transition: all 0.5s ease;
}

.offcanvas-enter-active .inner {
  transition-delay: 0.25s;
}

.offcanvas-enter-from,
.offcanvas-leave-to {
  opacity: 0;
}

.offcanvas-enter-from .inner,
.offcanvas-leave-to .inner {
  transform: translateX(10rem);
  opacity: 0;
}
</style>
