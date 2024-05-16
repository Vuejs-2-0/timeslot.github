<template>
  <div class="w-full flex justify-center items-center py-2">
    <div class="h-1.5 w-[100px] bg-zinc-200/70 rounded-full"></div>
  </div>

  <div class="p-4 text-zinc-900 sticky top-0 bg-white">
    <h3 class="text-2xl font-bold mb-2">Book a timeslot</h3>
    <div class="flex justify-start items-center space-x-2">
      <button @click="changeTab(tab.name)" v-for="tab in tabs" :class="['p-1 px-4 rounded-full text-sm uppercase font-medium duration-300', tab.selected ? 'bg-spring-green-500' : 'bg-transparent']" :key="tab.id">{{ tab.name }}</button>
    </div>
  </div>

  <div v-for="types in uniqueTypes" :key="types" :id="types">
    <div class="p-4 text-zinc-900 bg-white border-b border-zinc-200">
      <h3 class="text-3xl font-bold mb-2 text-customGreen">{{ types }}</h3>
    </div>
    <div v-for="timeslot in timeslots.filter(t => t.type === types)" class="w-full grid grid-cols-2 p-4 px-5 text-zinc-900 border-y border-t-0" :key="timeslot.id">
      <div class="w-full">
        <p class="font-bold">{{ timeslot.title }}</p>
      </div>
      <div class="w-full text-right">
        <p class="font-semibold">{{ timeslot.price }}</p>
      </div>
      <p class="text-sm text-zinc-400 col-span-2">{{ timeslot.time }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const timeslots = ref([
  { id: 1, title: "Man's Haircut", time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 50' },
  { id: 2, title: "Women's Haircut", time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 70' },
  { id: 3, title: 'Trimming', time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 30' },
  { id: 4, title: "Director's Haircut", time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 200' },
  { id: 5, title: 'Basic Perm', time: '2 hours', type: 'Perm', price: 'RM 120' },
  { id: 6, title: 'Special Perm', time: '2 hours 30 minutes', type: 'Perm', price: 'RM 180' },
  { id: 7, title: 'Wash - Basic', time: '45 minutes', type: 'Wash', price: 'RM 20' },
  { id: 8, title: 'Wash - Premium', time: '1 hour 15 minutes', type: 'Wash', price: 'RM 40' },
  { id: 9, title: 'Dye - Single Color', time: '1 hour', type: 'Dye', price: 'RM 80' },
  { id: 10, title: 'Dye - Highlights', time: '1 hour 30 minutes', type: 'Dye', price: 'RM 150' },
]);

const tabs = ref([
  { id: '1', name: 'Haircut', selected: true },
  { id: '2', name: 'Perm', selected: false },
  { id: '3', name: 'Wash', selected: false },
  { id: '4', name: 'Dye', selected: false }
]);

const selectedTab = ref('Haircut');

const changeTab = (tabName) => {
  selectedTab.value = tabName;
  for (let t of tabs.value) {
    t.selected = t.name === tabName;
  }
  const element = document.getElementById(tabName);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const uniqueTypes = computed(() => {
  return [...new Set(timeslots.value.map(t => t.type))];
});
</script>