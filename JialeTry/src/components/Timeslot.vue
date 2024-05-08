<template>
    <div class="mt-4 bg-white p-4">
      <h3 class="text-2xl font-bold mb-2">Book a timeslot</h3>
      <div class="flex space-x-2 mb-4">
        <button class="px-4 py-2 rounded-2xl text-xs" :class="{'Green text-white': currentFilter === 'Haircut'}" @click="setFilter('Haircut')">Haircut</button>
        <button class="px-4 py-2 rounded-2xl text-xs" :class="{'Green text-white': currentFilter === 'Perm'}" @click="setFilter('Perm')">Perm</button>
        <button class="px-4 py-2 rounded-2xl text-xs" :class="{'Green text-white': currentFilter === 'Wash'}" @click="setFilter('Wash')">Wash</button>
        <button class="px-4 py-2 rounded-2xl text-xs" :class="{'Green text-white': currentFilter === 'Dye'}" @click="setFilter('Dye')">Dye</button>
      </div>
      <h4 class="timeslot-type text-2xl font-bold ml-3 mb-2">{{ currentFilter }}</h4>
      <div v-for="timeslot in filteredTimeslots" :key="timeslot.id" class="timeslot-card">
        <div class="timeslot-info">
          <div class="title-time">
            <h3 class="text-lg font-bold">{{ timeslot.title }}</h3>
            <p class="text-xs">{{ timeslot.time }}</p>
          </div>
          <p class="text-lg font-semibold price">{{ timeslot.price }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Schedule',
    data() {
      return {
        timeslots: [
          { id: 1, title: 'Man\'s Haircut', time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 50'},
          { id: 2, title: 'Women\'s Haircut', time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 70'},
          { id: 3, title: 'Trimming', time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 30'},
          { id: 4, title: 'Director\'s Haircut', time: '1 hour 15 minutes', type: 'Haircut', price: 'RM 200'},
          { id: 5, title: 'Basic Perm', time: '2 hours', type: 'Perm', price: 'RM 120'},
          { id: 6, title: 'Special Perm', time: '2 hours 30 minutes', type: 'Perm', price: 'RM 180'},
          { id: 7, title: 'Wash - Basic', time: '45 minutes', type: 'Wash', price: 'RM 20'},
          { id: 8, title: 'Wash - Premium', time: '1 hour 15 minutes', type: 'Wash', price: 'RM 40'},
          { id: 9, title: 'Dye - Single Color', time: '1 hour', type: 'Dye', price: 'RM 80'},
          { id: 10, title: 'Dye - Highlights', time: '1 hour 30 minutes', type: 'Dye', price: 'RM 150'},
        ],
        currentFilter: 'Haircut'
      }
    },
    computed: {
    filteredTimeslots() {
          return this.timeslots.filter(app => app.type === this.currentFilter);
      }
    },
    methods: {
      setFilter(filter) {
        this.currentFilter = filter;
      }
    }
  }
  </script>
  
  <style scoped>
  .Green {
    background-color: #00FF95;
  }
  
  .button {
    padding: 8px 16px;
    background-color: #E8E8E8;
    border-radius: 20px;
    font-size: 12px;
  }
  
  .button:focus, .button:active {
    outline: none;
    background-color: #00FF95;
    color: white;
  }
  
  .timeslot-card {
    padding: 12px;
    margin-bottom: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
  }
  
  .timeslot-info {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;
    align-items: center;
    width: 100%;
  }
  
  .title-time {
    display: flex;
    flex-direction: column;
  }
  
  .price {
    text-align: right;
  }
  
  .status-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }
  .timeslot-type {
    color: #178556;
  }


  </style>