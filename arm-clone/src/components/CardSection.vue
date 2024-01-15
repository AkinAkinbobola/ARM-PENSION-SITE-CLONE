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
                        <h2 class="text-4xl font-bold mb-4">Benefit Payment</h2>
                        <p class="text-lg">Learn More</p>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold mb-4">Voluntary Contributions</h2>
                        <p class="text-lg">Learn More</p>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold mb-4">Account Maintenance</h2>
                        <p class="text-lg">Learn More</p>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold mb-4">Price History</h2>
                        <p class="text-xs">
                            January 10, 2024
                        </p>
                        <p class="text-xs">
                            RSA Fund I: 1.8732
                        </p>
                        <p class="text-xs">
                            RSA Fund II: 7.1425
                        </p>
                        <p class="text-xs">
                            RSA Fund III: 1.8084
                        </p>
                        <p class="text-xs">
                            RSA Fund IV: 5.7166
                        </p>
                        <p class="text-xs">
                            RSA Fund V: 1.3933
                        </p>
                        <p class="text-xs">
                            RSA Fund VI Active: 1.2936
                        </p>
                        <p class="text-xs">
                            RSA Fund VI Retiree: 1.2053
                        </p>
                        <p class="text-xs">
                            Learn More
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  