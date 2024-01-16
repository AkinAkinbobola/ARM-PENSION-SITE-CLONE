<script setup>
import Nav from './Nav.vue';
</script>

<template>
    <div class="sticky top-0 z-10 bg-white">
        <div class="justify-end w-11/12 items-center border-b border-gray-300 ml-10 hidden md:flex">
            <a href="#" class="text-primary mr-4 text-xs font-bold font-sans hover:underline hover:text-blue-400">Chat with
                us on Whatsapp</a>
            <span class="text-primary text-xs font-bold font-sans">
                <a href="#" class="hover:underline hover:text-blue-400">01-2715000</a>
                <span> or </span>
                <a href="#" class="hover:underline hover:text-blue-400">0700CALLARM</a>
            </span>
            <button class="py-2 px-4 text-white bg-primary ml-9 font-sans">
                Get Started
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-1" />
            </button>
        </div>
        <Nav />
    </div>
</template>
  