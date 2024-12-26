<script setup lang="ts">
const headerLinks: { title?: string; href?: string }[] = [
  {
    title: "Variant 1",
    href: "/index.html",
  },
  {
    title: "Variant 2",
    href: "/variant-2.html",
  },
  {
    title: "Variant 3",
    href: "/variant-3.html",
  },
];
</script>

<template>
  <header class="px-5">
    <nav class="container mx-auto">
      <div class="flex items-center gap-4">
        <template v-for="link in headerLinks" :key="link.title">
          <a
            :href="link.href"
            class="p-5 hover:bg-gray-200 transition-all ease-in-out duration-300 text-gray-500"
            >{{ link.title }}</a
          >
        </template>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
