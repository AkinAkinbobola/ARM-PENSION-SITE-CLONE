<script setup>
import logo from "../assets/images/arm_logo.jpg"
</script>

<template>
    <div class="ml-10 w-11/12 mt-4 flex items-center justify-between">
        <img :src="logo" alt="ARM Pension Logo" class="w-28 mr-4">
        <div class="md:hidden mr-12 border border-hamburger py-2 px-5 rounded">
            <font-awesome-icon :icon="['fas', 'bars']" class="text-2xl text-burgerInner" />
        </div>
        <div class="hidden md:flex">
            <a href="#" class="border-b-2 border-transparent hover:border-primary transition mr-3">ABOUT US</a>
            <span class="border-b-2 border-transparent hover:border-primary transition flex">
                <a href="#" class="mr-1">
                    RETIREMENT PLANS
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']"  class="mr-1"/>
            </span>

            <a href="#" class="border-b-2 border-transparent hover:border-primary transition mr-3">MULTI FUND STRUCTURE</a>
            <span class="border-b-2 border-transparent hover:border-primary transition mr-3  flex">
                <a href="#" class="mr-1">
                    PORTALS
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']"  class="mr-1"/>
            </span>
            <span class="border-b-2 border-transparent hover:border-primary transition mr-3 flex">
                <a href="#" class="mr-1">
                    MEDIA
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']"  class="mr-1"/>
            </span>
            <span class="border-b-2 border-transparent hover:border-primary transition mr-3 flex">
                <a href="#" class="mr-1">
                    CONTACT
                </a>
                <font-awesome-icon :icon="['fas', 'caret-down']"  class="mr-1"/>
            </span> <a href="#" class="border-b-2 border-transparent hover:border-primary transition mr-3">FEEDBACK</a>
            <a href="#" class="border-b-2 border-transparent hover:border-primary transition mr-3">CAREERS</a>
        </div>

    </div>
    <div class="border-b mt-1"></div>
</template>
  