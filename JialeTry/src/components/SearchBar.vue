<template>
  <div class="relative bg-spring-green-500 rounded-full flex items-center">
    <input class="bg-transparent p-3 pl-5 pr-10 w-full placeholder:text-spring-green-800/50 placeholder:font-semibold" type="text" placeholder="Search a store, a place, or a time...">
    <svg class="absolute right-5 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>