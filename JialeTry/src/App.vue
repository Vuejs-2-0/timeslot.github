<template>
  <div class="sm:w-screen sm:h-screen sm:fixed 
  sm:top-0 sm:left-0 sm:bg-slate-200 sm:flex sm:justify-center sm:items-center">

    <main class="w-full sm:max-w-md sm:border 
    sm:border-black/10 sm:rounded-lg sm:aspect-[9/18] 
    sm:bg-white sm:shadow-md sm:overflow-hidden">
      <RouterView />
    </main>

  </div>
</template>

<style scoped>
</style>