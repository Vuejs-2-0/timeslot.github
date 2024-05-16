<template>
    <main class="w-full bg-white h-full sm:h-auto sm:min-h-0 minh-screen max-h-screen overflow-hidden overflow-y-scroll">
      
      <section class="w-full sticky top-0 bg-zinc-100">
        <div class="w-full justify-between items-center p-4">
          <Logo></Logo>
        </div>
      

      <div class="text-zinc-900 p-4 px-5">
        <p>Welcome, Chan</p>
        <h1 class="text-2xl font-bold">Need a timeslot?</h1>
      </div>

      <div class="p-4">
        <SearchBar />
      </div>

      <div class="text-zinc-900 p-4">

        <div class="w-full flex justify-between items-center mb-4">
          <h2 class="font-bold text-lg">Your Favorites</h2>
          <button class="underline text-sm">View more</button>
        </div>

        <div class="w-max flex overflow-hidden justify-start items-center space-x-2">
          <Favorites />
        </div>
        
      </div>
    </section>

      <div class="w-full z-50 relative bg-white">
        <Schedules />
      </div>
    </main>
  </template>
  
  <script>
  import Logo from '../components/Logo.vue'
  import SearchBar from '../components/SearchBar.vue'
  import Favorites from '../components/Favorites.vue'
  import Schedules from '../components/Schedules.vue'
  
  export default {
    name: 'Home',
    components: {
      Logo,
      SearchBar,
      Favorites,
      Schedules
    },
  }
  </script>