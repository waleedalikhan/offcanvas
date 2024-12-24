<script setup lang="ts">
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
    <nav class="container mx-auto">
      <div class="flex items-center gap-4">
        <template v-for="link in navLinks" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-8 py-6 hover:bg-gray-200 transition-all ease-in-out duration-300"
            >{{ link.title }}</RouterLink
          >
        </template>
      </div>
    </nav>
  </header>
</template>
