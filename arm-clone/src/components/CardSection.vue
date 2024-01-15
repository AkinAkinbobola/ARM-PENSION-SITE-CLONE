<script setup>
import image from '../assets/images/info.jpg';
</script>

<template>
    <div class="my-10">
        <h1 class="text-4xl text-blue-900 font-serif ml-10">Hi, how may we assist you today?</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mx-14">
            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold mb-4">Card Title 1</h2>
                        <p class="text-lg">Description or additional text goes here.</p>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold mb-4">Card Title 1</h2>
                        <p class="text-lg">Description or additional text goes here.</p>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold mb-4">Card Title 1</h2>
                        <p class="text-lg">Description or additional text goes here.</p>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold mb-4">Card Title 1</h2>
                        <p class="text-lg">Description or additional text goes here.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  