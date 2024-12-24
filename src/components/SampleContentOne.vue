<script setup lang="ts">
const { click, title = "Remote content injected" } = defineProps<{
  click?: () => void;
  title?: string;
}>();
</script>

<template>
  <div class="bg-gray-200 lg:w-[25rem] w-full h-[87dvh] p-5 overflow-hidden">
    <div class="flex flex-wrap gap-5">
      <div class="w-full">
        <h2 class="text-2xl font-semibold">
          {{ title }}
        </h2>
      </div>
      <div class="w-full space-y-2">
        <button type="button" class="base-btn" @click="click">
          Next content view using dynamic html
        </button>
        <p class="w-80">
          would change content in this drawer, and could also prompt drawer to
          resize to wider version
        </p>
      </div>
    </div>
  </div>
</template>
