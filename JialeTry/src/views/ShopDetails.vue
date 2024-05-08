<template>
  <div class="container mx-auto px-4 mt-5">
    <Profile />
    <Timeslot />
  </div>
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

