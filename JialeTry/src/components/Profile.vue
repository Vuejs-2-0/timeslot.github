<template>
  <section class="w-full sticky top-0 bg-background1 p-3">
    <div class="container mx-auto mt-5 relative overflow-hidden shadow-lg rounded-lg bg-white">
      <div class="absolute inset-0 bg-profile h-1/3"></div>
      <div class="absolute inset-x-0 bottom-0 h-2/3 bg-white"></div>
      <div class="relative z-10 flex items-center justify-between p-4">
        <div>
          <img :src="shopImage" alt="Shop Image" class="w-24 h-24 mr-4 border-4 border-white rounded-lg">
          <h1 class="font-bold text-2xl">{{ shopName }}</h1>
          <div class="flex flex-col mt-2">
            <p class="flex items-center text-sm">
            <svg class="h-6 w-6 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 64 80" enable-background="new 0 0 64 64" xml:space="preserve"><g><path fill="#000000" d="M62.47,52.893c-0.266-0.534-0.634-0.999-1.074-1.296c-0.262-0.175-0.552-0.309-0.855-0.393   c-0.652-0.184-1.347-0.146-2.003,0.001c-0.678,0.153-1.357,0.303-2.035,0.454c-1.434,0.32-2.866,0.645-4.291,0.999   c-0.64,0.16-0.947,0-1.272-0.56c-1.701-2.934-3.45-5.841-5.178-8.759c-0.235-0.398-0.5-0.759-0.793-1.087   c-0.011-0.008-0.023-0.018-0.034-0.028c-1.054-0.889-2.389-1.881-3.657-1.973c-1.748-0.127-3.555,0.587-5.327,0.917   c-4.233,0.788-8.386,0.94-12.678,0.93c-1.879-0.005-3.782,0.162-5.65-0.098c-3.581-0.499-7.22-0.854-10.763-1.579   c-1.888-0.386-3.015,0.566-3.031,2.506c-0.004,0.483-0.007,0.964-0.007,1.446c-0.001,0.911,0.003,1.824,0.006,2.736   c0.001,0.723-0.044,1.453-0.018,2.174c0.01,0.265,0.03,0.528,0.064,0.79c0.267,2.013,1.824,2.876,4.652,2.797   c4.805-0.136,9.61-0.272,14.416-0.327c3.592-0.042,7.184-0.03,10.775-0.023c1.354,0.003,2.708,0.006,4.061,0.008   c0.617,0.001,1.234,0.002,1.851,0.003c0.371,0,0.825,0.068,1.183-0.106c0.406-0.197,0.596-0.644,1.033-0.834   c0.524-0.228,1.031-0.07,1.304,0.429c0.364,0.665,0.737,1.333,1.124,1.99c0.852,1.444,1.716,2.881,2.585,4.315   c0.808,1.333,2.093,1.885,3.622,1.555c3.08-0.667,6.147-1.398,9.232-2.037c0.991-0.205,1.804-0.582,2.41-1.223   c0.3-0.317,0.548-0.699,0.742-1.158c0.001-0.008,0.004-0.016,0.006-0.024C63.044,54.673,62.874,53.705,62.47,52.893z"/><path fill="#000000" d="M34.314,32.346C34.009,32.2,22.731,25.388,20.077,20.79c-1.104-1.911-4.241-2.511-5.975-1.152   c-2.084,1.633-3.315,6.408-4.063,8.833c-0.763,2.472-1.177,5.096-1.739,7.621c-0.129,0.582-0.137,0.506-0.209,1.099   c-0.113,0.929,0.719,1.244,1.474,1.343c0.705,0.092,1.415,0.149,2.124,0.202c1.753,0.131,3.512,0.221,5.27,0.263   c5.084,0.12,1.474-9.987,5.402-7.964c0.047,0.024,0.095,0.05,0.143,0.076c2.682,1.495,5.065,2.705,7.29,3.704   c1.098,0.494,2.349,0.689,3.558,0.877l0.218,0.035c0.184,0.028,0.361,0.042,0.526,0.042c0.62,0,1.403-0.211,1.613-1.217   C35.836,33.953,35.828,33.07,34.314,32.346z"/><path fill="#000000" d="M30.321,12.563c0.966-1.753,0.974-3.522-0.225-5.285c-0.535-0.784-1.217-1.432-1.991-1.972   c-0.787-0.523-1.639-0.919-2.565-1.129c-2.08-0.468-3.722,0.188-4.999,1.73c-0.188,0.228-0.333,0.479-0.499,0.723   c-1.152,1.722-1.855,3.628-2.215,5.678c-0.176,1.025-0.107,2.051,0.108,3.081c0.222,1.067,0.822,1.914,1.651,2.434   c0.787,0.58,1.795,0.828,2.869,0.643c1.037-0.178,2.017-0.49,2.906-1.03c1.776-1.087,3.291-2.44,4.47-4.143   C29.997,13.048,30.178,12.822,30.321,12.563z"/><path fill="#000000" d="M58.269,36.674c0.984-1.779,1.005-3.567-0.187-5.34c-0.532-0.789-1.212-1.439-1.987-1.979   c-0.787-0.523-1.641-0.917-2.57-1.122c-2.087-0.458-3.742,0.217-5.036,1.785c-0.191,0.232-0.338,0.487-0.506,0.734   c-1.17,1.749-1.89,3.681-2.267,5.756c-0.185,1.037-0.122,2.074,0.086,3.114c0.216,1.077,0.812,1.928,1.641,2.448   c0.787,0.581,1.798,0.823,2.879,0.629c1.043-0.188,2.031-0.51,2.928-1.062c1.792-1.112,3.325-2.491,4.523-4.221   C57.94,37.167,58.124,36.937,58.269,36.674z"/><path fill="#000000" d="M42.384,55.637c-0.239-0.433-0.529-0.549-1-0.549c-15.917,0.011-21.927,0.005-37.844,0.032   c-0.002,0-0.004,0-0.006,0.001H3.256c-1.212,0-2.194,0.998-2.194,2.23c0,1.232,0.982,2.23,2.194,2.23h0.283   c0.094,0.006,0.189,0.008,0.286,0.008c15.092-0.01,20.277-0.008,35.368-0.008c1.781,0,3.562,0,5.472,0   C43.859,58.195,43.097,56.929,42.384,55.637z"/></g></svg>
            {{ shopType }}
          </p>
          </div>
          <div class="flex flex-col">
            <p class="flex items-center text-gray-500 text-xs">
              <svg class="h-6 w-6 text-zinc-500 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
            {{ shopAddress }}
          </p>
          </div>
        </div>
        <div class="absolute bottom-4 right-4 flex flex-col">
          <button class="bg-spring-green-500 px-3 py-1 rounded-full mb-2 text-black flex items-center text-sm">
            <svg class="h-4 w-4 text-black mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Contact
          </button>
          <button class="bg-transparent pr-2 pl-3 py-1 rounded-full text-sm border-none underline text-right">Navigate</button>
        </div>
      </div>
    </div>
    <p class="container mx-auto px-1 mt-5 text-base font-bold">Upcoming with Top Mirage: </p>
    <div class="container mx-auto px-4 mt-5 mb-2 bg-black text-white rounded-lg">
      <div class="appointment-info flex items-center justify-between p-2">
        <div class="left-section flex items-center">
          <span class="status-indicator bg-yellow-500 w-2.5 h-2.5 rounded-full inline-block mr-1.5"></span>
          <p class="text-sm">Pending</p>
        </div>
        <h3 class="middle-section text-2xl flex-grow ml-7">Man's Haircut</h3>
        <div class="time-section text-right flex flex-col items-end">
          <p class="text-sm">12:00pm</p>
          <p class="text-sm">1st February</p>
        </div>
      </div>
    </div>
  </section>
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
    shopAddress() {
      return this.$route.query.address;
    },
    shopImage() {
      return "../" + this.$route.query.img;
    }
  }
}
</script>

<style scoped>
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

body {
  background: #D4D4D4;
}
</style>