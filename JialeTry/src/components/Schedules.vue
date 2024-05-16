<template>
    <div class="w-full flex justify-center ote,s-center py-2">
      <div class="h-1.5 w-[100px] bg-zinc-200/70 rounded-full"></div>
    </div>
  
    <div class="p-4 text-zinc-900 sticky top-0 bg-white border-b border-zinc-200">
      <h2 class="text-2xl font-bold mb-4">Your Schedule</h2>
      <div class="flex justify-start items-center space-x-2">
        <button @click="selectTab(tab)" v-for="tab in tabs" :class="['p-1 px-4 rounded-full text-sm uppercase font-medium duration-300', tab.selected?'bg-spring-green-500':'bg-transparent']" :key="tab.count">{{ tab.name }}<span v-if="tab.count > 0">({{tab.count}})</span></button>
      </div>
    </div>

    <div>
        <div v-for="event in selectedSchedule" class="w-full grid grid-cols-2 p-4 px-5 text-zinc-900 border-y border-t-0" :key="event.name">
            
            <div class="flex justify-start items-center space-x-2">
                <div v-if="event.status == 'Pending'" class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div v-if="event.status == 'Confirmed'" class="w-2 h-2 bg-green-500 rounded-full"></div>
                <p>{{ event.status }}</p>
            </div>

            <div class="w-full text-right">
                <p class="text-sm text-zinc-400">tap to view or edit</p>
            </div>

            <div class="w-full">
                <p class="font-bold">{{ event.name }}</p>
            </div>

            <div class="w-full text-right">
                <p>{{ event.date }}</p>
            </div>

            <p class="text-sm text-zinc-400">Top Mirage</p>
            <p class="text-sm text-zinc-600 w-full text-right">in 2 days</p>
        
        </div>
    </div>

</template>
    
<script setup>
import {computed, ref} from 'vue';

const tabs = ref([
    { name: 'All', selected: true, count: 0 },
    { name: 'Confirmed', selected: false, count: 1 },
    { name: 'Pending', selected: false, count: 4 },
]);

const selectTab = (tab) => {
    for (let t of tabs.value){
        t.selected = t.name === tab.name;
    }
}

const statuses = ['pending', 'confirmed']
const items = ['Man\'s Haircut', 'Descaling', 'Deep Cleansing Facial', 'Destress Package A']

const schedule = ref({
    'confirmed': [],
    'pending': []
})

// generate random schedule

for( let i = 0; i < 10; i++){
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const item = items[Math.floor(Math.random() * items.length)]
    let date = new Date(Date.now() + Math.floor(Math.random() * 10000000000))
    
    //format date into 1st February 12:00 pm format

    date = `${date.getDate()}th ${date.toLocaleString("default", {month: "long"})} ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? "pm" : "am"}`

    schedule.value[status].push({
        status: String(status).charAt(0).toUpperCase() + String(status).slice(1), // capitalize first letter (pending => Pending)
        name: item,
        date
    })
}

const allSchedule = computed(() => {
    // collect all schedule from both confirmed and pending
    return [...schedule.value.confirmed, ...schedule.value.pending]
})

const selectedSchedule = computed(() => {
    if(tabs.value[0].selected){
        return allSchedule.value
    } else if(tabs.value[1].selected){
        return schedule.value.confirmed
    } else {
        return schedule.value.pending
    }
})

</script>