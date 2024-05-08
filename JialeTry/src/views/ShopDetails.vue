<template>
  <div>
    <div class="container shadow mx-auto px-4 mt-5">
      <img :src="shopImage" alt="Shop Image">
      <h1>{{ shopName }}</h1>
      <p>{{ shopType }}</p>
    </div>
    <p class="mx-auto px-4 mt-5">Upcoming with Top Mirage: </p>
    <div class="container mx-auto px-4 mt-5 grid-cols-3 black">
      <div class="column"> <!-- Wrap each column content in a div -->
        <h6>Pending</h6>
      </div>
      <div class="column">
        <h3>Man's Haircut</h3>
      </div>
      <div class="column">
        <p>12:00pm 1st February</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopDetails',
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
.container {
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
</style>