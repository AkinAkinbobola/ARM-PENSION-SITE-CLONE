<script setup>
import logo from "../assets/images/arm_logo.jpg"
</script>

<template>
    <div class="ml-10 w-11/12 mt-4 flex justify-between items-center">
        <img :src="logo" alt="ARM Pension Logo" class="w-28">
        <div class="md:hidden">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
        <div class="hidden md:flex">
            <a href="#" class="border-b-2 border-transparent hover:border-primary transition">ABOUT US</a>
            <span class="border-b-2 border-transparent hover:border-primary transition">
                <a href="#">
                    RETIREMENT PLANS
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']" />
            </span>
    
            <a href="#" class="border-b-2 border-transparent hover:border-primary transition">MULTI FUND STRUCTURE</a>
            <span class="border-b-2 border-transparent hover:border-primary transition">
                <a href="#">
                    PORTALS
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']" />
            </span>
            <span class="border-b-2 border-transparent hover:border-primary transition">
                <a href="#">
                    MEDIA
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']" />
            </span>
            <span class="border-b-2 border-transparent hover:border-primary transition">
                <a href="#">
                    CONTACT
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']" />
            </span> <a href="#" class="border-b-2 border-transparent hover:border-primary transition">FEEDBACK</a>
            <a href="#" class="border-b-2 border-transparent hover:border-primary transition">CAREERS</a>
        </div>
        
    </div>
    <div class="border-b mt-1"></div>
</template>
  