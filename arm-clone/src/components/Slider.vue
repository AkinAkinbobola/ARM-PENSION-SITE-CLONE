<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { ref } from "vue";
// const sliderImages = ref([
//     { img: "../assets/images/slider_images/1.jpg" },
//     { img: "../assets/images/slider_images/2.jpg" },
//     { img: "../assets/images/slider_images/3.jpg" }
// ]);
// const modules = [Pagination, Autoplay]
</script>

<template>
    <!-- <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" :autoplay="{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }">
        <swiper-slide v-for="image in sliderImages" :key="image">
            <img :src="image.img" alt="" srcset="">
        </swiper-slide>
    </swiper> -->
    <div class="mt-2">
        <img src="../assets/images/slider_images/2.jpg" class="h-[50vh] w-full object-cover">
    </div>
</template>