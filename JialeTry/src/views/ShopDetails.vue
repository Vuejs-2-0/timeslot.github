<template>
  <main class="w-full bg-white h-full sm:h-auto sm:min-h-0 minh-screen max-h-screen overflow-hidden overflow-y-scroll">
    <section class="w-full sticky top-0 bg-zinc-100">
      <Profile />
    </section>
    <div class="w-full z-50 relative bg-white">
      <Timeslot />
    </div>
  </main>
</template>

<script>
import Profile from '../components/Profile.vue'
import Timeslot from '../components/Timeslot.vue'
  
export default {
  name: 'ShopDetails',
  components: {
    Profile,
    Timeslot
  }
}
</script>

