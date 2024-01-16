<template>
    <div class="flex mx-20 mt-14">
        <div class="flex flex-col w-5/12">
            <h1 class="text-blueText text-3xl font-serif font-bold mb-4">Plan your retirement with us</h1>
            <h1 class="text-2xl font-sans font-bold mb-2">Can I buy my dream house at retirement?</h1>
            <p class="text-justify">When you have accumulated enough money in your retirement savings account (RSA) during your working years,
                you
                can buy your dream house and enjoy a comfortable retirement with the ones you love.
            </p>
            <div class="border-b mt-5 mb-3"></div>
            <h1 class="text-2xl font-sans font-bold mb-2">Can I continue to pay my child's fees at retirement?
            </h1>
            <p class="text-justify">With the right plans in place, you can continue to pay child's school fees even at retirement. Talk to us
                today to make sure your pension plan lives up to the retirement you deserve.
            </p>
            <div class="border-b mt-5 mb-3"></div>
            <h1 class="text-2xl font-sans font-bold mb-2">Can I buy my dream car at retirement?
            </h1>
            <p class="mb-8 text-justify">Retirement is an adventure in itself and you can totally enjoy the ride in your brand-new dream car. With
                Voluntary Contributions made to your RSA today, your tomorrow will be filled with making your dreams come
                true.
            </p>
            <button class="py-2 px-4 text-white bg-pink-800 ml-0 font-sans rounded w-28">Start Now</button>
        </div>

        <div class="flex flex-col w-6/12 ml-40"> 
            <h1>Retirement Benefit Calculator</h1>
            <h2>TOTAL RETURNS</h2>
            <h1>$0.00</h1>
            <form>
                <label for="rsaBalance">CURRENT RSA BALANCE</label>
                <input type="text" name="rsaBalance">
                <label for="monthlyContrib">Total Monthly Contribution (in Naira)*</label>
                <input type="text" name="monthlyContrib">
                <label for="volunContrib">Monthly Voluntary Contribution (in Naira)</label>
                <input type="text" name="volunContrib">
                <label for="retireDt">Expected Retirement Date*</label>
                <input type="text" name="retireDt">
                <button class="py-2 px-4 text-white bg-pink-800 ml-0 font-sans rounded w-28">Calculate</button>
            </form>
            <div>
                You will have N 0.00 at the time of retirement. Use our retirement planner to help you plan and achieve this
                goal
            </div>
            <a href="#">Try our advanced retirement planning tool</a>
        </div>
    </div>
</template>