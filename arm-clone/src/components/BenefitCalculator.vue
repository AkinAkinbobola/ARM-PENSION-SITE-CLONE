<template>
    <div class="flex mx-20 mt-14 mb-14 flex-col md:flex-row">
        <div class="flex flex-col md:w-5/12">
            <h1 class="text-blueText text-3xl font-serif font-bold mb-4">Plan your retirement with us</h1>
            <h1 class="text-2xl font-sans font-bold mb-2">Can I buy my dream house at retirement?</h1>
            <p class="text-justify">When you have accumulated enough money in your retirement savings account (RSA) during
                your working years,
                you
                can buy your dream house and enjoy a comfortable retirement with the ones you love.
            </p>
            <div class="border-b mt-5 mb-3"></div>
            <h1 class="text-2xl font-sans font-bold mb-2">Can I continue to pay my child's fees at retirement?
            </h1>
            <p class="text-justify">With the right plans in place, you can continue to pay child's school fees even at
                retirement. Talk to us
                today to make sure your pension plan lives up to the retirement you deserve.
            </p>
            <div class="border-b mt-5 mb-3"></div>
            <h1 class="text-2xl font-sans font-bold mb-2">Can I buy my dream car at retirement?
            </h1>
            <p class="mb-8 text-justify">Retirement is an adventure in itself and you can totally enjoy the ride in your
                brand-new dream car. With
                Voluntary Contributions made to your RSA today, your tomorrow will be filled with making your dreams come
                true.
            </p>
            <button class="py-2 px-4 text-white bg-pink-800 ml-0 font-sans rounded w-28 mb-12 md:mb-0">Start Now</button>
        </div>

        <div class="flex flex-col md:w-6/12 md:ml-40 bg-cream rounded pt-14 px-6 shadow-lg">
            <h1 class="text-blueText text-3xl font-serif font-bold mb-4">Retirement Benefit Calculator</h1>
            <h2 class="text-sm">TOTAL RETURNS</h2>
            <h1 class="text-4xl font-semibold mb-8">&#8358 0.00</h1>
            <form class="flex flex-col">
                <label for="rsaBalance" class="text-lg mb-2">Current RSA Balance</label>
                <input type="number" name="rsaBalance" class="h-8 mb-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 p-2">
                <label for="monthlyContrib" class="text-lg mb-2">Total Monthly Contribution (in Naira)*</label>
                <input type="number" name="monthlyContrib" class="h-8 mb-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 p-2">
                <label for="volunContrib" class="text-lg mb-2">Monthly Voluntary Contribution (in Naira)</label>
                <input type="number" name="volunContrib" class="h-8 mb-3 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 p-2">
                <label for="retireDt" class="text-lg mb-2">Expected Retirement Date*</label>
                <input type="date" name="retireDt" class="h-8 mb-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 p-2">
                <button class="py-2 px-4 text-white bg-pink-800 ml-0 font-sans rounded">Calculate</button>
            </form>
            <div class="text-base mt-12 mb-4">
                You will have <span class="font-bold text-blueText">N 0.00</span> at the time of retirement. Use our
                retirement planner to help you plan and
                achieve this
                goal
            </div>
            <div class="flex pb-4">
                <a href="#" class="text-primary mr-2 text-xs font-bold font-sans hover:underline hover:text-blue-400">Try
                    our advanced retirement planning tool
                </a>
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-primary" />
            </div>
        </div>
    </div>
</template>