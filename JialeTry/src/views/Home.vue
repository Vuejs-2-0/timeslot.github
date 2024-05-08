<template>
    <div class="container mx-auto px-4 mt-5">
      <Logo />
      <div>
        <p class="left-align text-black">Welcome, Chan</p>
        <p class="left-align text-black text-2xl font-bold mb-5">Need a timeslot?</p>
      </div>
      <SearchBar />
      <Favorites />
      <Schedule />
    </div>
  </template>
  
  <script>
  import Logo from '../components/Logo.vue'
  import SearchBar from '../components/SearchBar.vue'
  import Favorites from '../components/Favorites.vue'
  import Schedule from '../components/Schedule.vue'
  
  export default {
    name: 'Home',
    components: {
      Logo,
      SearchBar,
      Favorites,
      Schedule
    }
  }
  </script>
  
  
  <style>
  body {
    background-color: #E8E8E8;
  }
  .left-align {
    text-align: left;
  }
  </style>