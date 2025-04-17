export const Home: React.FC = () => {
   return (
      <main className="mt-8 max-w-[91rem] mx-auto">

         {/* 1º section */}
         <section className="md:flex md:flex-row-reverse bg-[#32462F] text-[#FFFCF8] font-semibold text-center mb-8">
            <div className="md:w-1/2">
               <img alt="Iced Lavender Cream Oatmilk Matcha next to the new Iced Cherry Chai on a textured surface with moody reflections." className="block" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97315.jpg"></img>
            </div>

            <div className="flex flex-col md:w-1/2 justify-center items-center py-7">
               <h2 className="text-[1.75rem] lg:text-[3.125rem]">The Spring Edit</h2>

               <p className="mt-5 mb-8 text-[1.375rem] lg:text-[1.5rem] font-medium">Fresh flavors, familiar joy.</p>

               <button className="border rounded-2xl py-1 px-3 hover:bg-[#243623] transition-colors duration-200 ease-in-out">View the menu</button>
            </div>
         </section>

         {/* 2º section */}
         <section className="md:flex bg-[#5F4633] text-[#FFFCF8] text-center mb-7">
            <div className="md:w-1/2 md:inline-flex">
               <img
                  className="block self-center lg:h-full"
                  alt="A tall glass of black coffee with cream against a close up shot of of coffee and cream."
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97352.jpg"></img>
            </div>

            <div className="md:flex flex-col md:w-1/2 items-center">
               <h2 className="text-[1.375rem] lg:text-[1.5rem] font-semibold mt-8 mb-2">It’s a great day for free coffee</h2>

               <p className="text-base lg:text-[1.188rem] font-semibold mt-5 mb-8 px-20 leading-8 tracking-wider md:max-w-[35ch] lg:max-w-[55ch]">
                  Start your Starbucks® Rewards journey with a coffee on us. Join now and enjoy a free handcrafted drink with a qualifying purchase during your first week.*
               </p>

               <button className="font-semibold border rounded-2xl py-1 px-3.5 mb-7 hover:bg-[#3a2a1e] transition-colors duration-200 ease-in-out">Join now</button>
            </div>
         </section>

         {/* 3º section */}
         <section className="md:flex md:flex-row-reverse bg-[#32462F] text-[#FFFCF8] font-semibold text-center mb-8">
            <div className="md:w-1/2">
               <img
                  className="block h-full"
                  alt="A Starbucks gift card with the words, “Happy Easter” displayed over an illustrated blue sky, green hills and a white bunny rabbit leaping over colorful flowers."
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97657.jpg"
               ></img>
            </div>

            <div className="flex flex-col md:w-1/2 justify-center items-center py-7">
               <h2 className="text-[1.75rem] lg:text-[3.125rem] px-12 md:max-w-[18ch]">Spread spring cheer</h2>

               <p className="mt-5 mb-8 text-[1.375rem] lg:text-[1.5rem] md:px-20">
                  Wish someone a Happy Easter and joyful spring with a Starbucks Card.
               </p>

               <button className="border rounded-2xl py-1 px-4 hover:bg-[#243623] transition-colors duration-200 ease-in-out">Send an eGift</button>
            </div>

         </section>

         {/* 4º section */}
         <section className="md:flex bg-[#32462F] text-[#FFFCF8] text-center mb-7">
            <div className="md:w-1/2 md:inline-flex">
               <img
                  className="block self-center"
                  alt="An iced coffee drink in a glass cup with swirls of milk throughout and a white ceramic mug holding a frothy coffee drink sit on a table."
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97469.jpg"></img>
            </div>

            <div className="md:flex flex-col md:w-1/2 items-center">
               <h2 className="text-[1.75rem] lg:text-[3.125rem] font-semibold mt-8 md:max-w-[13ch]">
                  Nondairy milk, no extra charge
               </h2>

               <p className="text-[1.375rem] lg:text-[1.5rem] mt-5 mb-8 px-11 md:px-20 leading-9 md:max-w-[35ch] lg:max-w-[55ch] font-semibold">
                  Customize your drink with your favorite nondairy milk—like soy, coconut, almond or oat—for no additional charge.
               </p>

               <button className="font-semibold border rounded-2xl py-1 px-3.5 mb-7 hover:bg-[#243623] transition-colors duration-200 ease-in-out">Order now</button>
            </div>
         </section>

         {/* 5º section */}
         <section className="md:flex md:flex-row-reverse bg-[#006242] text-[#FFFCF8] font-semibold text-center mb-8">
            <div className="md:w-1/2">
               <img
                  className="block"
                  alt="A split image showing a close-up of coffee and a barista wearing a green apron, hat and glasses while shaking a drink. There's a wordmark that reads The Starbucks Coffee Company."
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97463.jpg"></img>
            </div>

            <div className="flex flex-col md:w-1/2 justify-center items-center py-7">
               <h2 className="text-[1.75rem] lg:text-[3.125rem] tracking-wide leading-tight md:max-w-[15ch]">
                  More reasons to stay awhile
               </h2>

               <p className="mt-5 mb-8 text-[1.375rem] lg:text-[1.5rem] font-semibold px-1.5 md:px-20">
                  Mugs, glasses and the condiment bar are back—and get free refills of hot and iced brewed coffee or tea.**
               </p>

               <button className="border rounded-2xl py-1 px-3 hover:bg-[#104231] transition-colors duration-200 ease-in-out">Learn more</button>
            </div>
         </section>

         <p className="mx-auto text-center text-[0.813rem] md:text-sm px-6 font-medium tracking-wide mt-16 mb-24 max-w-[85ch]">
            *Valid for new Starbucks Rewards members for 7 days from sign up. Coupon will be available in the offers tab of your Starbucks app following sign up and may take up to 48 hours to arrive. Good at participating U.S. stores for a handcrafted menu-sized beverage with qualifying purchase ($8 max value). Qualifying purchase excludes alcohol, Starbucks Card and Card reloads. Limit one. Cannot be combined with other offers or discounts. Excludes delivery services. Sign up before 6/29/2025.
         </p>

         <p className="mx-auto text-center text-[0.813rem] md:text-sm px-6 font-medium tracking-wide mb-8 max-w-[85ch]">
            **Free refills of hot and iced brewed coffee or tea during same store visit. Excludes Cold Brew, Nitro Cold Brew, Iced Tea Lemonade, and flavored Iced Tea and Starbucks Refreshers® base. At participating stores. Visit <a
            href="https://about.starbucks.com/backtostarbucks/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline">http://starbucks.com/refills</a>  to learn more
         </p>
      </main>
   )
}
