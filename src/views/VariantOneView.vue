<script setup lang="ts">
import { ref } from "vue";
import Offcanvas from "../components/Offcanvas.ce.vue";
import { tableDataOne } from "../constants";
import Timeline from "../components/Timeline.ce.vue";

const tableHeaders = ref<string[]>(["Name", "Description", "Email", "Actions"]);
const selectedRow = ref<(typeof tableDataOne)[0]>(tableDataOne[0]);
const showModal = ref<boolean>(false);
const updateSelectedRow = (row: typeof selectedRow.value) => {
  selectedRow.value = row;
  showModal.value = true;
};
</script>

<template>
  <div>
    <div class="sm:px-6 w-full">
      <div class="bg-white">
        <div class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr>
                <template v-for="heading in tableHeaders" :key="heading">
                  <td class="pl-5 py-5 last:flex last:justify-end">
                    {{ heading }}
                  </td>
                </template>
              </tr>
            </thead>
            <tbody>
              <template v-for="item in tableDataOne" :key="item.name">
                <tr
                  tabindex="0"
                  class="focus:outline-none border border-gray-100 rounded cursor-pointer h-20"
                  @click="updateSelectedRow(item)"
                >
                  <td class="pl-5">
                    <div class="flex items-center gap-4">
                      <div class="w-10 h-10 overflow-hidden">
                        <img
                          :src="item.userImg"
                          alt=""
                          class="rounded-full object-cover h-full w-full"
                        />
                      </div>
                      <p
                        class="text-base font-medium leading-none text-gray-700 mr-2"
                      >
                        {{ item.name }}
                      </p>
                    </div>
                  </td>
                  <td class="pl-5">
                    <p class="text-sm leading-none text-gray-600 ml-2">
                      {{ item.description }}
                    </p>
                  </td>
                  <td class="pl-5">
                    <p class="text-sm leading-none text-gray-600 ml-2">
                      {{ item.email }}
                    </p>
                  </td>
                  <td class="pl-5">
                    <button type="button" class="base-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </template>
              <tr class="h-3"></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Offcanvas :is-open="showModal" @close-popup="(val) => (showModal = val!)">
      <div class="space-y-8 lg:w-[50rem] w-full">
        <div class="flex items-end gap-4 pb-8 border-b justify-between">
          <div class="flex items-center gap-4">
            <div class="w-20 h-20">
              <img
                :src="selectedRow.userImg"
                alt=""
                class="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <p class="text-xl font-semibold">{{ selectedRow.name }}</p>
              <p class="text-base">{{ selectedRow.description }}</p>
            </div>
          </div>
          <div
            class="px-6 py-2 rounded-full text-white font-semibold"
            :class="[selectedRow.isActive ? 'bg-green-500' : 'bg-red-500']"
          >
            {{ selectedRow.isActive ? "Active" : "In active" }}
          </div>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-8 border-b pb-5">
          <div class="flex items-center gap-2">
            <p class="font-semibold">Name:</p>
            <p>{{ selectedRow.name }}</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="font-semibold">Description:</p>
            <p>{{ selectedRow.description }}</p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-8 border-b pb-5">
          <div class="flex items-center gap-2">
            <p class="font-semibold">Email:</p>
            <p>{{ selectedRow.email }}</p>
          </div>
          <div class="flex items-center gap-2">
            <p class="font-semibold">Status:</p>
            <p>{{ selectedRow.isActive ? "Active" : "In active" }}</p>
          </div>
        </div>
        <div class="lg:px-0 px-6">
          <Timeline />
        </div>
      </div>
    </Offcanvas>
  </div>
</template>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
