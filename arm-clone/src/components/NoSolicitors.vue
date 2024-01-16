<template>
    <div class="bg-yellow flex items-center justify-center flex-col md:flex-row py-20">
      <img src="../assets/images/soliciting.png" class="w-28" />
  
      <div class="ml-8 flex flex-col items-center md:items-baseline">
        <div class="flex items-center">
          <h1 class="text-4xl text-blueText font-serif my-4 md:my-0">No Soliciting</h1>
          <font-awesome-icon :icon="['fas', 'circle-xmark']" class="ml-2 hidden md:block" />
        </div>
  
        <p class="w-96 text-justify mt-4 md:ml-16">
          ARM Pension Managers (PFA) Limited does not solicit nor request for payment as a condition to processing your
          retirement benefits or providing you with information in relation to your retirement savings account with us.
          Please disregard any request for cash or gift from any employee or agent or organization as a condition for
          accessing your benefits.
        </p>
        <p class="text-lg font-sans text-blueText underline font-semibold mt-10 md:hidden">Close Caveat</p>
      </div>
    </div>
  </template>
  