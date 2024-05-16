<template>
  <Splide :options="splideOptions" class="custom-splide">
    <SplideSlide v-for="shop in shops" :key="shop.id" @click="goToFavorite(shop)">
      <div>
        <div class="w-[100px] h-[100px] aspect-square rounded-xl mb-4">
          <img :src="shop.img" alt="Shops" style="object-fit: cover; width: 100%; height: 100%;">
        </div>
        <div class="w-[80px] h-[80px]">
          <h3 class="font-bold">{{ shop.name }}</h3>
          <p class="text-xs">{{ shop.type }}</p>
        </div> 
      </div>
    </SplideSlide>
  </Splide>
</template>
  
<script>
import { Splide, SplideSlide } from '../../node_modules/@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  name: 'Favorites',
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      shops: [
        { id: 1, name: 'Top Mirage', img: 'src/assets/haircut.jpeg', type: 'Haircut', address: 'No 88, Jalan Putra, Putra Square, 23888'},
        { id: 2, name: 'Beta Dental', img: 'src/assets/dental.webp', type: 'Dental', address: 'No 88, Jalan Putra, Putra Square, 23888' },
        { id: 3, name: 'Herbylife', img: 'src/assets/spa.jpg', type: 'Spa', address: 'No 88, Jalan Putra, Putra Square, 23888' },
        { id: 4, name: 'Beta Dental', img: 'src/assets/dental.webp', type: 'Dental', address: 'No 88, Jalan Putra, Putra Square, 23888' },
        { id: 5, name: 'Top Mirage', img: 'src/assets/haircut.jpeg', type: 'Haircut', address: 'No 88, Jalan Putra, Putra Square, 23888' },
        { id: 6, name: 'Herbylife', img: 'src/assets/spa.jpg', type: 'Spa', address: 'No 88, Jalan Putra, Putra Square, 23888' },
        { id: 7, name: 'Top Mirage', img: 'src/assets/haircut.jpeg', type: 'Haircut', address: 'No 88, Jalan Putra, Putra Square, 23888' },
        { id: 8, name: 'Herbylife', img: 'src/assets/spa.jpg', type: 'Spa', address: 'No 88, Jalan Putra, Putra Square, 23888' }
      ],
      splideOptions: {
        type: 'loop',
        perPage: 3,
        rewind: true,
        arrows: false,
        pagination: false,
        breakpoints: {
          640: {
            perPage: 1,
            gap: '2px',  // Smaller gap for smaller screens
          },
          768: {
            perPage: 2,
            gap: '2px',  // Medium gap for medium screens
          },
          1024: {
            perPage: 3,
            gap: '2px',  // Larger gap for larger screens
          }
        }
      }
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
          img: favorite.img,
          address: favorite.address
        }
      });
    }
  }
}
</script>

<style scoped>
.custom-splide .splide__slide {
  width: calc(7% + 5px) !important;
}
</style>