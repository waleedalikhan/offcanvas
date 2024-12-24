<script setup lang="ts">
import { ref } from "vue";
import VariantOne from "./VariantOne.vue";
import SampleContentOne from "./SampleContentOne.vue";
import SampleContentTwo from "./SampleContentTwo.vue";

const v3ShowNext = ref<boolean>(false);

const navLinks: { to: string; title: string }[] = [
  {
    to: "/",
    title: "Variant 1",
  },
  {
    to: "/variant-2",
    title: "Variant 2",
  },
  {
    to: "/variant-3",
    title: "Variant 3",
  },
];
</script>

<template>
  <header class="border-b">
    <nav class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-4">
        <template v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-8 py-6 hover:bg-gray-200 transition-all ease-in-out duration-300"
            >{{ link.title }}</RouterLink
          >
        </template>
      </div>
      <div>
        <VariantOne
          :show-next="v3ShowNext"
          @prev-click="(val?: boolean) => (v3ShowNext = val!)"
          triggerer-text="Toggle variant 1 from header"
        >
          <SampleContentOne
            title="Remote content injected header version"
            :click="() => (v3ShowNext = true)"
          />
          <template v-slot:next-content>
            <SampleContentTwo />
          </template>
        </VariantOne>
      </div>
    </nav>
  </header>
</template>
