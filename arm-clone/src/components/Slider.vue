<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const sliderImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];
</script>

<template>
    <Splide :options="{ rewind: true }">
        <SplideSlide v-for="image in sliderImages"  class="h-[60vh] w-full object-cover">
            <img :src="`src/assets/images/slider_images/${image}`">
        </SplideSlide>
    </Splide>
</template>