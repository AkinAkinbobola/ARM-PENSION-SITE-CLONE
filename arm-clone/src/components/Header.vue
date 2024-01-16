<script setup>
import Nav from './Nav.vue';
</script>

<template>
    <div class="sticky top-0 z-10 bg-white">
        <div class="flex justify-end w-11/12 items-center border-b border-gray-300 ml-10">
            <a href="#" class="text-primary mr-4 text-xs font-bold font-sans">Chat with us on Whatsapp</a>
            <span class="text-primary text-xs font-bold font-sans">
                <a href="#">01-2715000</a> or <a href="#">0700CALLARM</a>
            </span>
            <button class="py-2 px-8 text-white bg-primary ml-9 font-sans">
                Get Started
                <font-awesome-icon :icon="['fast', 'right-long']" /> 
            </button>
        </div>
        <Nav />
    </div>
</template>
  