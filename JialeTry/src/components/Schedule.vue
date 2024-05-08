<template>
    <div class="mt-4 bg-white p-4">
      <h3 class="text-2xl font-bold mb-2">Your Schedule</h3>
    <div class="flex space-x-2 mb-4">
      <button class="px-4 py-2 rounded-2xl text-xs" :class="{'Green text-white': currentFilter === 'All'}" @click="setFilter('All')">All</button>
      <button class="px-4 py-2 rounded-2xl text-xs" :class="{'Green text-white': currentFilter === 'Confirmed'}" @click="setFilter('Confirmed')">Confirmed</button>
      <button class="px-4 py-2 rounded-2xl text-xs" :class="{'Green text-white': currentFilter === 'Pending'}" @click="setFilter('Pending')">Pending</button>
    </div>
      <div v-for="appointment in filteredAppointments" :key="appointment.id" class="p-4 mb-2 mt-2 shadow-lg rounded-lg grid-cols-2 grid-rows-3">
        <div class="flex justify-between items-center grid-cols-2 grid-rows-3">
          <div class="grid grid-cols-2 gap-2">
            <div>
              <div class="flex items-center">
                <span class="status-indicator" :class="{'bg-yellow-400': appointment.status === 'Pending', 'bg-green-500': appointment.status === 'Confirmed'}"></span>
                <h3 class="text-xs font-semibold">{{ appointment.status }}</h3>
              </div>
              <h3 class="text-lg font-bold">{{ appointment.title }}</h3>
              <h3 class="text-xs">{{ appointment.name }}</h3>
            </div>
            <div>
              <p class="right text-xs">tap to view or edit</p>
              <p class="right text-lg font-semibold">{{ formatDate(appointment.date) }}</p>
              <p class="right text-xs font-semibold">{{ appointment.nearestDate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Schedule',
    data() {
      return {
        appointments: [
          { id: 1, title: 'Man\'s Haircut', date: '2023-02-01T12:00:00', status: 'Pending', name: 'Top Mirage', nearestDate: 'in 2 days'},
          { id: 2, title: 'Descaling', date: '2023-02-02T12:00:00', status: 'Confirmed', name: 'Beta Dental', nearestDate: 'in 3 days'},
        ],
        currentFilter: 'All'
      }
    },
    computed: {
    filteredAppointments() {
      if (this.currentFilter === 'All') {
          return this.appointments;
        } else {
          return this.appointments.filter(app => app.status === this.currentFilter);
        }
      }
    },
    methods: {
      setFilter(filter) {
        this.currentFilter = filter;
      },
      formatDate(value) {
        const date = new Date(value);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedDay = day + (day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th');
        const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;

        return `${formattedDay} ${month} ${formattedTime}`;
      }
    }
  }
  </script>
  
  <style scoped>
  .Green{
    background-color: #00FF95;
  }
  button:focus {
    outline: none;
    background-color: #00FF95;
  }
  button {
    background: #E8E8E8;
  }
  h3{
    text-align: left;
  }
  .right{
    text-align: right;
  }
  .status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}
  </style>