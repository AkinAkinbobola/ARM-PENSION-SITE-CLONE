<script setup>
import image from '../assets/images/info.jpg';
</script>

<template>
    <div class="my-10">
        <h1 class="text-4xl text-blueText font-serif md:mx-16 text-center md:text-left mx-10">
            Hi, how may we assist you today?
        </h1>

        <div class="flex flex-wrap mt-4 items-center justify-center md:flex-nowrap mx-4 md:mx-16">

            <div class="bg-cover bg-center w-4/12 h-80 mr-4 mb-4 md:h-96 md:w-2/4 flex flex-col justify-end relative"
                :style="{ backgroundImage: `url(${image})` }">
                <div class="bg-black bg-opacity-50 absolute inset-0"></div>
                <div class="text-white ml-3 mb-8 absolute">
                    <h2 class="text-md font-bold mb-2">Benefit Payment</h2>
                    <div class="flex items-center">
                        <p class="text-md font-semibold">Learn More</p>
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                    </div>
                </div>
            </div>

            <div class="bg-cover bg-center w-4/12 h-80 mb-4 md:h-96 md:w-2/4 md:mr-4 flex flex-col justify-end relative"
                :style="{ backgroundImage: `url(${image})` }">
                <div class="bg-black bg-opacity-50 absolute inset-0"></div>
                <div class="text-white ml-3 mb-8 absolute">
                    <h2 class="text-sm font-bold mb-4">Voluntary Contributions</h2>
                    <div class="flex items-center">
                        <p class="text-sm font-semibold">Learn More</p>
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                    </div>
                </div>
            </div>

            <div class="bg-cover bg-center  w-4/12 h-80 mr-4 mb-4 md:h-96 md:w-2/4 flex flex-col justify-end relative"
                :style="{ backgroundImage: `url(${image})` }">
                <div class="bg-black bg-opacity-50 absolute inset-0"></div>
                <div class="text-white ml-3 mb-8 absolute">
                    <h2 class="text-sm font-bold mb-4">Account Maintenance</h2>
                    <div class="flex items-center">
                        <p class="text-sm font-semibold">Learn More</p>
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                    </div>
                </div>
            </div>

            <div class="bg-cover bg-center  w-4/12 h-80 mb-4 md:h-96 md:w-2/4 flex flex-col justify-end relative"
                :style="{ backgroundImage: `url(${image})` }">
                <div class="bg-black bg-opacity-50 absolute inset-0"></div>
                <div class="text-white ml-3 mb-8 absolute">
                    <h2 class="text-sm font-bold mb-1">Price History</h2>
                    <p class="text-xs mt-1 mb-1">
                        January 10, 2024
                    </p>
                    <p class="text-xs mt-1 mb-1">
                        RSA Fund I: <span class="font-bold">1.8732</span>
                    </p>
                    <p class="text-xs mt-1 mb-1">
                        RSA Fund II: <span class="font-bold">7.1425</span>
                    </p>
                    <p class="text-xs mt-1 mb-1">
                        RSA Fund III: <span class="font-bold">1.8084</span>
                    </p>
                    <p class="text-xs mt-1 mb-1">
                        RSA Fund IV: <span class="font-bold">5.7166</span>
                    </p>
                    <p class="text-xs mt-1 mb-1">
                        RSA Fund V: <span class="font-bold">1.3933</span>
                    </p>
                    <p class="text-xs mt-1 mb-1">
                        RSA Fund VI Active: <span class="font-bold">1.2936</span>
                    </p>
                    <p class="text-xs mt-1 mb-1">
                        RSA Fund VI Retiree: <span class="font-bold">1.2053</span>
                    </p>
                    <div class="flex items-center">
                        <p class="text-sm font-semibold">Learn More</p>
                        <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  