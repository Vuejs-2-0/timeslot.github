<template>
    <div>
      <div class="container shadow mx-auto px-4 mt-5">
        <img :src="shopImage" alt="Shop Image">
        <h1 class="font-bold text-2xl">{{ shopName }}</h1>
        <p>{{ shopType }}</p>
      </div>
      <p class="container mx-auto px-4 mt-5 text-base font-bold">Upcoming with Top Mirage: </p>
      <div class="container mx-auto px-4 mt-5 black">
        <div class="appointment-info">
          <div class="left-section">
            <span class="status-indicator"></span>
            <p class="text-sm">Pending</p>
          </div>
          <h3 class="middle-section text-2xl">Man's Haircut</h3>
          <div class="time-section">
            <p class="text-sm">12:00pm</p>
            <p class="text-sm">1st February</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'Profile',
  computed: {
    shopId() {
      return this.$route.params.id;
    },
    shopName() {
      return this.$route.query.name;
    },
    shopType() {
      return this.$route.query.type;
    },
    shopImage() {
      return "../" + this.$route.query.img;
    }
  }
}
</script>

<style scoped>
.container #black {
  position: relative;
  display: grid; /* Use grid layout */
  grid-template-columns: repeat(3, 1fr); /* Create three columns */
  grid-column-gap: 20px; /* Adjust the gap between columns */
}

.container::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: #D9D9D9;
}

.container::after {
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: white;
}

.container.shadow {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
}

body{
  background: #D4D4D4;
}

img{
  width: 100px;
  height: 100px;
}
.black {
  background: black;
  color: white;
}

.column {
  padding: 10px;
}

.appointment-info {
  display: flex; /* Enables Flexbox */
  align-items: center; /* Vertically centers the flex items */
  justify-content: space-between; /* Distributes space between and around content items */
  padding: 10px;
}
.status-indicator {
  background: yellow;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
}

.time-section {
  text-align: right; /* Right-aligns the time text */
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Ensures the contents are aligned to the right */
}

.middle-section {
  flex-grow: 1; /* Allows this section to grow and take available space */
  margin-left: 30px; /* Adjust this value as needed to move closer to Pending */
}

.left-section {
  display: flex;
  align-items: center;
}

</style>