<script setup>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import CardSection from './components/CardSection.vue'
import NoSolicitors from './components/NoSolicitors.vue'
import GridSection from './components/GridSection.vue'
import BenefitCalculator from './components/BenefitCalculator.vue'
import Download from './components/Download.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="none">
    <Header />
    <Slider />
    <CardSection />
    <NoSolicitors />
    <GridSection />
    <BenefitCalculator />
    <Download />
    <Footer />
    <div class="w-20 h-20 bg-primary rounded-full flex items-center justify-center fixed bottom-0 right-0 mr-4 mb-5">
      <font-awesome-icon :icon="['far', 'comments']" class="text-white text-3xl" />
    </div>
  </div>
</template>