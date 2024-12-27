<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { OnClickOutside } from "@vueuse/components";
import CircleXIcon from "./svgs/CircleXIcon.vue";
import type { Props } from "../interfaces";

const emit = defineEmits<{
  (e: "prevClick", value?: boolean): void;
  (e: "closePopup", value?: boolean): void;
}>();

const {
  isOpen,
  hasToggler,
  isBackgroundVisible,
  isResizeable,
  overlayClasses,
  modalClasses,
  btnClass,
} = defineProps<Props>();

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

  if (!isBackgroundVisible && !isResizeable) {
    if (isCanvasOpen.value || isOpen)
      document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "auto";
  }
});

watch(
  () => isCanvasOpen.value,
  (newVal) => {
    if (!isBackgroundVisible) {
      if (newVal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    }
  }
);

watch(
  () => isOpen,
  (newVal) => {
    if (!isBackgroundVisible && !isResizeable) {
      if (newVal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    }
  }
);
</script>

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
                <CircleXIcon />
              </button>
              <div>
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
                <CircleXIcon />
              </button>
              <div>
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
