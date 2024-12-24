<script setup lang="ts">
import { ref } from "vue";
import VariantOne from "../components/VariantOne.vue";
import SampleContentOne from "../components/SampleContentOne.vue";
import SampleContentTwo from "../components/SampleContentTwo.vue";

const v1ShowNext = ref<boolean>(false);

const v2ShowNext = ref<boolean>(false);
const openFromOutside = ref<boolean>(false);
</script>

<template>
  <div class="space-y-12 h-[90dvh] relative">
    <div>
      <p class="mb-4">With built in trigger button:</p>
      <VariantOne
        :show-next="v1ShowNext"
        @prev-click="(val?: boolean) => (v1ShowNext = val!)"
      >
        <SampleContentOne :click="() => (v1ShowNext = true)" />
        <template v-slot:next-content>
          <SampleContentTwo />
        </template>
      </VariantOne>
    </div>
    <div>
      <p class="mb-4">With trigger button outside component:</p>
      <button type="button" class="base-btn" @click="openFromOutside = true">
        Toggle variant 1 from outside component
      </button>
      <VariantOne
        :is-open="openFromOutside"
        :show-next="v2ShowNext"
        :has-toggler="false"
        @close-popup="(val?: boolean) => (openFromOutside = val!)"
        @prev-click="(val?: boolean) => (v2ShowNext = val!)"
        drawer-heading="Drawer from header"
      >
        <SampleContentOne
          title="Remote content injected click outside version"
          :click="() => (v2ShowNext = true)"
        />
        <template v-slot:next-content>
          <SampleContentTwo />
        </template>
      </VariantOne>
    </div>
  </div>
</template>
