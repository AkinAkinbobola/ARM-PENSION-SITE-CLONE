<script setup>
import image from '../assets/images/info.jpg';
</script>

<template>
    <div class="my-10">
        <h1 class="text-4xl text-blueText font-serif ml-10">Hi, how may we assist you today?</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mx-14">
            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex flex-col justify-end items-start text-white">
                    <div class="mb-8 ml-4">
                        <h2 class="text-lg font-bold mb-4">Benefit Payment</h2>
                        <div class="flex items-center">
                            <p class="text-lg font-semibold">Learn More</p>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                        </div>

                    </div>
                </div>
            </div>


            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex flex-col justify-end items-start text-white">
                    <div class="mb-8 ml-4">
                        <h2 class="text-lg font-bold mb-4">Voluntary Contributions</h2>
                        <div class="flex items-center">
                            <p class="text-lg font-semibold">Learn More</p>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex flex-col justify-end items-start text-white">
                    <div class="mb-8 ml-4">
                        <h2 class="text-lg font-bold mb-4">Account Maintenance</h2>
                        <div class="flex items-center">
                            <p class="text-lg font-semibold">Learn More</p>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative bg-cover bg-center h-[70vh]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div class="absolute inset-0 flex flex-col justify-end items-start text-white">
                    <div class="mb-8 ml-4">
                        <h2 class="text-lg font-bold mb-1">Price History</h2>
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
                            <p class="text-lg font-semibold">Learn More</p>
                            <font-awesome-icon :icon="['fas', 'arrow-right']" class="pl-2" />
                          </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
  