<script setup lang="ts">
// import { ref } from "vue";
import VariantOne from "../components/VariantOne.vue";
// import type { Props } from "../interfaces";

// const toggleVersionOne = ref<Props>();
</script>

<template>
  <VariantOne :is-open="false">
    <div class="bg-gray-200 lg:w-[25rem] w-full h-[87dvh] p-5">
      <div class="flex flex-wrap">
        <div class="w-full">
          <h2 class=""></h2>
        </div>
      </div>
    </div>
    <template v-slot:next-content>
      <div class="bg-gray-200 lg:w-[60rem] w-full h-[87dvh]"></div>
    </template>
  </VariantOne>
</template>
