<template>
    <h3 class="font-bold mt-5">Your Favorite</h3>
    <div class="grid grid-cols-3 gap-3">
      <!-- Dummy data used here, you should fetch real data -->
      <div v-for="favorite in shops" :key="favorite.id" @click="goToFavorite(favorite)">
        <div>
          <img :src="favorite.img" alt="Shops">
          <p class="text-sm font-bold mt-2">{{ favorite.name }}</p>
          <p class="text-xs">{{favorite.type}}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Favorites',
    data() {
      return {
        shops: [
          { id: 1, name: 'Top Mirage', img: 'src/assets/haircut.jpeg', type: 'Haircut' },
          { id: 2, name: 'Beta Dental', img: 'src/assets/dental.webp', type: 'Dental' },
          { id: 3, name: 'Herbylife', img: 'src/assets/spa.jpg', type: 'Spa' }
        ]
      }
    },
    methods: {
      goToFavorite(favorite) {
        this.$router.push({
          name: 'ShopDetails',
          params: { id: favorite.id },
          query: {
            name: favorite.name,
            type: favorite.type,
            img: favorite.img
          }
        });
      }
    }
  }
  </script>
  <style scoped>
  img{
    height: 75px;
    width: 75px;
  }
  h3{
    text-align: left;
  }
  p{
    text-align: left;
  }
  </style>
  