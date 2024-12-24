<script setup lang="ts">
import { ref, onMounted } from "vue";
import useClickOutside from "../composables/useClickOutside";
import DoubleArrowIcon from "./svgs/DoubleArrow.vue";
import CircleXIcon from "./svgs/CircleXIcon.vue";
import type { Props } from "../interfaces";

const {
  isOpen = false,
  hasToggler = true,
  showNext = false,
} = defineProps<Props>();

const componentRef = ref();
const excludeRef = ref();
const isCanvasOpen = ref<boolean>(isOpen);
const showNextContent = ref<boolean>(showNext);

useClickOutside(
  componentRef,
  () => {
    isCanvasOpen.value = false;
    showNextContent.value = false;
  },
  excludeRef
);

onMounted(() => {
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
      isCanvasOpen.value = false;
      showNextContent.value = false;
    }
  });
});
</script>

<template>
  <template v-if="hasToggler">
    <button
      ref="excludeRef"
      type="button"
      class="base-btn"
      @click="isCanvasOpen = !isCanvasOpen"
    >
      Trigger variant
    </button>
  </template>
  <Transition name="offcanvas">
    <template v-if="isCanvasOpen">
      <aside
        class="fixed z-[999] inset-0 p-5 bg-black/50 backdrop-blur-sm flex justify-end"
      >
        <div
          class="bg-white h-full rounded-2xl p-5 space-y-8 lg:w-auto w-full inner"
          ref="componentRef"
        >
          <div class="flex items-center gap-4 pb-4 border-b justify-between">
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="btn-without-outline transition-all ease-in-out disabled:cursor-not-allowed"
                  :class="[showNextContent ? '' : 'opacity-40']"
                  :disabled="!showNextContent"
                  @click="showNextContent = false"
                >
                  <DoubleArrowIcon />
                </button>
                <button
                  type="button"
                  class="btn-without-outline transition-all ease-in-out disabled:cursor-not-allowed transform rotate-180"
                  :class="[!showNextContent ? '' : 'opacity-40']"
                  :disabled="showNextContent"
                  @click="showNextContent = true"
                >
                  <DoubleArrowIcon />
                </button>
              </div>
              <div>
                <h2 class="text-xl font-semibold">Drawer heading</h2>
              </div>
            </div>
            <button
              type="button"
              class="btn-without-outline"
              @click="isCanvasOpen = false"
            >
              <CircleXIcon />
            </button>
          </div>
          <div>
            <Transition name="prev-content">
              <template v-if="!showNextContent">
                <slot></slot>
              </template>
            </Transition>
            <Transition name="next-content">
              <template v-if="showNextContent">
                <slot name="next-content"></slot>
              </template>
            </Transition>
          </div>
        </div>
      </aside>
    </template>
  </Transition>
</template>

<style scoped>
.offcanvas-enter-active,
.offcanvas-leave-active,
.offcanvas-enter-active .inner,
.offcanvas-leave-active .inner,
.prev-content-enter-active,
.prev-content-leave-active,
.next-content-enter-active,
.next-content-leave-active {
  transition: all 0.5s ease;
}

.offcanvas-enter-active .inner {
  transition-delay: 0.25s;
}

.next-content-enter-active {
  transition-delay: 0.25s;
}

.offcanvas-enter-from,
.offcanvas-leave-to {
  opacity: 0;
}

.prev-content-enter-from,
.prev-content-leave-to,
.next-content-enter-from,
.next-content-leave-to {
  opacity: 0;
  width: 0;
}

.offcanvas-enter-from .inner,
.offcanvas-leave-to .inner {
  transform: translateX(10rem);
  opacity: 0;
}
</style>
