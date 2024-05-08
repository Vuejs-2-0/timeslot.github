<template>
  <div class="grid grid-cols-2 gap-16" id="wholeContainer">
    <div class="flex items-center rounded-md shadow-sm justify-items-start max-w-none">
      <p id="Logo" class="form-input w-full rounded-3xl border-0 p-4 text-xs text-white">timeslot.today</p>
    </div>
    <div class="flex rounded-md shadow-sm justify-items-end">
      <img src="../assets/logo.webp" alt="Logo">
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar'
  }
  </script>
  
  <style scoped>
  #wholeContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #Logo {
    background: black;
    max-width: 8rem;
  }

  img {
    max-height: 4rem;
    max-width: 4rem;
    border-radius: 50%;
  }
  </style>
  