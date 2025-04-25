import { Carousel } from "../components/Carousel"

export const GiftCards: React.FC = () => {
    return (
        <main className="py-2">
            <h1 className="text-[1.75rem] leading-[2.256rem] md:text-4xl font-bold md:pt-14 px-4 pt-2 md:pr-6 md:pl-[6.188rem] lg:pl-[8.188rem] lg:pr-10">Gift cards</h1>

            <section className="pt-4">
                <div className="flex items-center justify-between px-4 pt-2 md:pt-4 md:pr-6 md:pl-[6.188rem] lg:pl-[8.188rem] lg:pr-10">
                    <h2 className="uppercase text-[0.813rem] md:text-base font-bold tracking-wider">Featured</h2>

                    <span className="py-[7px] px-4 text-sm md:text-base text-[#00754a] font-semibold">See all</span>
                </div>

                <Carousel>
                    <img
                        className="w-[30%] md:w-[31%] lg:w-[23%] xl:w-[22%] mr-2 xl:mr-4 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/SpringSeasonalFY25.png"
                        alt="Gift card image: A field of yellow, blue and purple flowers sit in front of a purple cloudy sky. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyMothersDayFY25.png"
                        alt="Gift card image: Happy Mother's Day is written on a light green background, surrounded by colorful spring flowers. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/MakeLearningFunFY25.png"
                        alt="Gift card image: You make learning fun is written across the pages of an open book surrounded by foliage on a green and orange patterned background. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HealthcareHeroFY25.png"
                        alt="Gift card image: For a healthcare hero is written inside a heart-shaped stethoscope surrounded by medical supplies on a light green background. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/LoveYouMomFY25.png"
                        alt="Gift card image: Love You, Mom is written on a light background, surrounded by a breakfast buffet of flowers, coffee and breakfast foods. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyBirthdayFY25.png"
                        alt="Gift card image: A sliced birthday cake sits on top of a blue table with the words Happy Birthday curved across the design in dark green. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/ThankYouFY25.png"
                        alt="Gift card image: Thank You is written in shuffled letters on a blue and green multi-colored geometric background with black stars. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/YouAreAwesomeFY25.png"
                        alt="Gift card image: You are Awesome is written in punched out purple and red letters on an orange splattered background. "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/CelebrationFY25.png"
                        alt="Gift card image: An iced Starbucks cup exploding with multi-colored confetti sits in front of a dark green background.  "
                    />

                    <img
                        className="gift-card-carousel-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg"
                        alt="Gift card image: A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You."
                    />
                </Carousel>

                <div className="flex items-center gap-4 bg-[#edebe9] rounded-lg p-4 mx-4 md:mr-6 mt-2 md:ml-[6.188rem] lg:ml-[8.188rem] lg:mr-10">
                    <img
                        src="https://www.starbucks.com/weblx/images/gift/group-gift-cards.png"
                        alt="Three Starbucks cards one behind the other."
                        width={58.66}
                    />

                    <p className="text-sm md:text-base font-medium">
                        Effortlessly send up to 10 eGifts per purchase. Select a design to start!
                    </p>
                </div>

                <div className="bg-[#d4e9e2] my-4 pt-8 pb-2 px-4 md:pl-[6.188rem] lg:pl-[8.188rem] lg:pr-10">
                    <div className="lg:flex items-center gap-4">
                        <p className="font-semibold text-[1.188rem] md:text-2xl">
                            Received a gift card?
                        </p>

                        <div className="md:flex md:items-center gap-6">

                            <p className="lg:hidden max-md:pb-2 text-[#59625f] md:text-[1.188rem] md:leading-6 font-medium">
                                Earns 2★Stars per $1
                            </p>
                            <p className="max-lg:hidden max-md:pb-2 text-[#59625f] md:text-[1.188rem] md:leading-6 font-medium">
                                Earns 2★ per $1
                            </p>

                            <div className="my-2 flex gap-4 text-sm md:text-base">
                                <button className="rounded-3xl py-[7px] px-4 border hover:bg-[#245a481c] transition-colors duration-300 ease-in-out border-black font-semibold ">Add to Reload</button>

                                <button className="py-[7px] px-4 font-semibold bg-black hover:bg-[#0000009d] transition-colors duration-300 ease-in-out text-white rounded-3xl">Check balance</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end py-2 text-sm md:text-base text-[#006241] font-semibold">
                        <p className="cursor-pointer">
                            Card Terms & Conditions
                        </p>

                        <svg
                            className="inline w-[18px] h-[18px] overflow-visible fill-[#006441] mx-[2px]"
                            aria-hidden="true"
                            focusable="false"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.5003 3.30018C14.0861 3.30021 13.7503 3.63602 13.7504 4.05024C13.7504 4.46445 14.0862 4.80021 14.5004 4.80018L17.7958 4.79994L11.2981 11.2976C11.0052 11.5905 11.0052 12.0654 11.2981 12.3583C11.591 12.6512 12.0659 12.6512 12.3588 12.3583L18.8566 5.86046V8.99966C18.8566 9.41388 19.1924 9.74966 19.6066 9.74966C20.0208 9.74966 20.3566 9.41388 20.3566 8.99966V4.0498C20.3566 3.85088 20.2776 3.66011 20.1369 3.51945C19.9963 3.3788 19.8055 3.29979 19.6065 3.2998L14.5003 3.30018Z"></path>
                            <path d="M6 3.99966H12V5.49966H6C5.72386 5.49966 5.5 5.72352 5.5 5.99966V17.9997C5.5 18.2758 5.72386 18.4997 6 18.4997H18C18.2761 18.4997 18.5 18.2758 18.5 17.9997V11.2497H20V17.9997C20 19.1042 19.1046 19.9997 18 19.9997H6C4.89543 19.9997 4 19.1042 4 17.9997V5.99966C4 4.89509 4.89543 3.99966 6 3.99966Z"></path>
                        </svg>
                    </div>
                </div>
            </section>

            <div className="px-4 md:pl-[6.188rem] md:pr-16 lg:pl-[8.188rem]">
                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Mother's day | 5/12</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyMothersDayFY25.png"
                            alt="Gift card image: Happy Mother's Day is written on a light green background, surrounded by colorful spring flowers. "
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/LoveYouMomFY25.png"
                            alt="Gift card image: Love You, Mom is written on a light background, surrounded by a breakfast buffet of flowers, coffee and breakfast foods. "
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Teacher Appreciation</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/MakeLearningFunFY25.png"
                            alt="Gift card image: You make learning fun is written across the pages of an open book surrounded by foliage on a green and orange patterned background."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy23/AbsolutelyAmazingTeacherFY23.jpg" alt="Gift card image: A pencil, a ruler, a pen and a book are stacked against a green background in the center of this card, with “Absolutely Amazing Teacher” written across the ruler, the pen and the book."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Nurse Appreciation</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HealthcareHeroFY25.png"
                            alt="Gift card image: For a healthcare hero is written inside a heart-shaped stethoscope surrounded by medical supplies on a light green background."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy24/WorldOfThanksFY24.png"
                            alt="Gift card image: A nurse in green scrubs with a red stethoscope around their neck is holding a hot Starbucks cup and from the steam of the cup, A World Of Thanks is written in green with a blue and yellow background."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Birthday</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HolidayBirthdayFY25.png"
                            alt="Gift card image: Happy Birthday is written on a vibrant pink and red birthday cake with candles sitting on a green party table."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyBirthdayFY25.png"
                            alt="Gift card image: A sliced birthday cake sits on top of a blue table with the words Happy Birthday curved across the design in dark green."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Thank You</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/ThankYouFY25.png"
                            alt="Gift card image: Thank You is written in shuffled letters on a blue and green multi-colored geometric background with black stars."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy24/MyTreatFY24.jpg"
                            alt="Gift card image: A hand extends from the right holding a steaming Starbucks beverage, with My Treat written in green letters above it against a shaded green and white background."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg"
                            alt="Gift card image: A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Celebration</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/CelebrationFY25.png"
                            alt="Gift card image: An iced Starbucks cup exploding with multi-colored confetti sits in front of a dark green background."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Appreciation</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/YouAreAwesomeFY25.png"
                            alt="Gift card image: You are Awesome is written in punched out purple and red letters on an orange splattered background."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/CouldntDoItWithoutYouFY25.png"
                            alt="Gift card image: Couldn't Do It Without You is written in a wavy within a light green cloud surrounded by multi-colored shapes on a green striped background."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Spring</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/SpringSeasonalFY25.png"
                            alt="Gift card image: A field of yellow, blue and purple flowers sit in front of a purple cloudy sky."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy24/SpringTulipsFY24.png"
                            alt="Gift card image: A field of multi-colored tulips covers the foreground, while a grassy hill and two windmills are seen in the background."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Encouragement</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy24/YouGotThisFY24.png"
                            alt="Gift card image: You Got This is written in wavy orange letters and centered against a background of puffy white clouds in a light blue sky."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy22/GoodVibesFY22.jpg"
                            alt="Gift card image: A rainbow stretches across with a white cloud at each end against a green background, with the words Sending Good Vibes under the rainbow."
                        />
                    </div>
                </section>

                <section className="pt-1 md:pt-4 pb-2">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Workplace</h2>

                    <div className="flex py-4 pr-16">
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy24/AboveBeyondFY24.png"
                            alt="Gift card image: Above plus Beyond equals You is written in green letters across a wavy background texture of purple, blue, green, and yellow background with a few white stars."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy23/GreatWorkDeservesCoffeeFY23.jpg"
                            alt="Gift card image: Two hands meet in a high five against a background with Great Work arched over the top of the hands and Deserves Coffee across the bottom."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy25/CouldntDoItWithoutYouFY25.png"
                            alt="Gift card image: Couldn't Do It Without You is written in a wavy within a light green cloud surrounded by multi-colored shapes on a green striped background."
                        />
                    </div>
                </section>
            </div>

            <section className="pl-4 pb-2 md:pl-[6.188rem] lg:pl-[8.188rem] lg:pr-16 ">
                <div className="flex items-center justify-between">
                    <h2 className="uppercase text-[0.813rem] md:text-sm md:mb-2 font-bold tracking-widest">Anytime</h2>

                    <button className="py-[7px] px-4 mr-4 text-sm md:text-base font-semibold text-[#00754a] cursor-pointer lg:hidden" aria-label="Click to see all images.">See all</button>
                </div>

                <div className="-ml-4 pt-2 md:-ml-[6.188rem] lg:hidden">
                    <Carousel
                        bgWidth="w-6"
                    >
                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy23/YayForCoffeeFY24.png"
                            alt="Gift card image: Two hands hold up Starbucks beverages from the bottom of this card with the words Yay for Coffee arched over them against a pink background covered in confetti."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy20/BrailleFY20.jpg"
                            alt="Gift card image: A close up of a white Siren covers the left half of this Starbucks green card."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy24/CoffeeOClockFY24.png"
                            alt="Gift card image: An orange digital clock with the word “coffee” written across the face sits in the center of an off-white background surrounded by green stars, with the word It’s written above and OClock written below the clock."
                        />

                        <img
                            className="gift-card-commemoration-img"
                            src="https://globalassets.starbucks.com/digitalassets/cards/fy23/HeritageMultipackFY23.jpg"
                            alt="Gift card image: Three Starbucks Siren logos are shown, including the brown Siren, the black and white Siren and the free-floating Siren."
                        />
                    </Carousel>
                </div>

                <div className="max-lg:hidden flex pb-4 pr-16 pt-2">
                    <img
                        className="gift-card-commemoration-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy23/YayForCoffeeFY24.png"
                        alt="Gift card image: Two hands hold up Starbucks beverages from the bottom of this card with the words Yay for Coffee arched over them against a pink background covered in confetti."
                    />

                    <img
                        className="gift-card-commemoration-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy20/BrailleFY20.jpg"
                        alt="Gift card image: A close up of a white Siren covers the left half of this Starbucks green card."
                    />

                    <img
                        className="gift-card-commemoration-img"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy24/CoffeeOClockFY24.png"
                        alt="Gift card image: An orange digital clock with the word “coffee” written across the face sits in the center of an off-white background surrounded by green stars, with the word It’s written above and OClock written below the clock."
                    />

                    <img
                        className="w-[33%] lg:w-[26%] xl:w-[24%] rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy23/HeritageMultipackFY23.jpg"
                        alt="Gift card image: Three Starbucks Siren logos are shown, including the brown Siren, the black and white Siren and the free-floating Siren."
                    />
                </div>
            </section>

            <section className="bg-[#f9f9f9]">
                <div className="pt-10 md:pt-14 px-4 md:pr-6 lg:pr-10  pb-8 md:pb-14 md:pl-[6.188rem] lg:pl-[8.188rem] md:flex">
                    <img
                        className="block md:mr-10 self-center"
                        src="https://www.starbucks.com/weblx/images/gift/bulk-gift-cards.jpg"
                        alt="A stack of Starbucks Cards being prepared as gifts"
                        width={375}
                    />

                    <div className="md:mr-8">
                        <h2 className="text-2xl pt-6 md:pt-0 pr-4 pb-2 font-medium">Business gifting — simplified</h2>

                        <p className="text-[#6b6c6b] text-sm md:text-base font-medium max-w-[42ch]">
                            Bulk send physical or digital Starbucks Cards to gift, reward, incentivize, or show appreciation towards your customers, clients and team members. Minimum 15 cards per order.
                        </p>

                        <button className="flex items-center text-sm md:text-base hover:bg-[#6b6c6b]/15 border border-black font-semibold py-[7px] px-4 mt-4 md:mt-10 rounded-3xl transition-colors duration-300 ease-in-out">
                            Shop now
                            <svg
                                className="inline ml-[3px] w-[18px]"
                                aria-hidden="true"
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.5003 3.30018C14.0861 3.30021 13.7503 3.63602 13.7504 4.05024C13.7504 4.46445 14.0862 4.80021 14.5004 4.80018L17.7958 4.79994L11.2981 11.2976C11.0052 11.5905 11.0052 12.0654 11.2981 12.3583C11.591 12.6512 12.0659 12.6512 12.3588 12.3583L18.8566 5.86046V8.99966C18.8566 9.41388 19.1924 9.74966 19.6066 9.74966C20.0208 9.74966 20.3566 9.41388 20.3566 8.99966V4.0498C20.3566 3.85088 20.2776 3.66011 20.1369 3.51945C19.9963 3.3788 19.8055 3.29979 19.6065 3.2998L14.5003 3.30018Z"></path>
                                <path d="M6 3.99966H12V5.49966H6C5.72386 5.49966 5.5 5.72352 5.5 5.99966V17.9997C5.5 18.2758 5.72386 18.4997 6 18.4997H18C18.2761 18.4997 18.5 18.2758 18.5 17.9997V11.2497H20V17.9997C20 19.1042 19.1046 19.9997 18 19.9997H6C4.89543 19.9997 4 19.1042 4 17.9997V5.99966C4 4.89509 4.89543 3.99966 6 3.99966Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#edebe9]">
                <div className="py-6 px-4 md:py-12 md:pr-6 md:pl-[6.188rem] md:flex lg:pr-10 lg:pl-[8.188rem]">
                    <div className="md:mr-14">
                        <div>
                            <h2 className="md:text-[1.188rem] md:leading-[1.781rem] font-semibold">
                                About eGift cards
                            </h2>

                            <p className="py-4 text-[0.813rem] leading-[1.219rem] md:text-sm font-medium">
                                A Starbucks eGift card (also known as an “eGift”) is a Starbucks Gift Card that is purchased and sent digitally.
                            </p>

                            <p className="text-[0.813rem] leading-[1.219rem] md:text-sm font-medium">
                                For Senders of an eGift, go to eGift History when signed in to view, send, or resend eGifts you’ve purchased — or, to directly contact Starbucks eGift Support for help with your order.
                            </p>
                        </div>

                        <div>
                            <h2 className="pt-6 md:text-[1.188rem] md:leading-[1.781rem] font-semibold">
                                Questions around eGift cards?
                            </h2>

                            <p className="py-4 text-[0.813rem] leading-[1.219rem] md:text-sm font-medium">
                                Check our Frequently Asked Questions — your question might already be answered. There, you’ll find answers for all Starbucks Gift Cards in general (including eGifts).
                            </p>

                            <button className="flex items-center hover:bg-stone-500/20 border border-black rounded-3xl font-semibold text-sm md:text-base py-[7px] px-4">
                                Card FAQs
                                <svg
                                    className="inline ml-[3px] w-[18px]"
                                    aria-hidden="true"
                                    focusable="false"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.5003 3.30018C14.0861 3.30021 13.7503 3.63602 13.7504 4.05024C13.7504 4.46445 14.0862 4.80021 14.5004 4.80018L17.7958 4.79994L11.2981 11.2976C11.0052 11.5905 11.0052 12.0654 11.2981 12.3583C11.591 12.6512 12.0659 12.6512 12.3588 12.3583L18.8566 5.86046V8.99966C18.8566 9.41388 19.1924 9.74966 19.6066 9.74966C20.0208 9.74966 20.3566 9.41388 20.3566 8.99966V4.0498C20.3566 3.85088 20.2776 3.66011 20.1369 3.51945C19.9963 3.3788 19.8055 3.29979 19.6065 3.2998L14.5003 3.30018Z"></path>
                                    <path d="M6 3.99966H12V5.49966H6C5.72386 5.49966 5.5 5.72352 5.5 5.99966V17.9997C5.5 18.2758 5.72386 18.4997 6 18.4997H18C18.2761 18.4997 18.5 18.2758 18.5 17.9997V11.2497H20V17.9997C20 19.1042 19.1046 19.9997 18 19.9997H6C4.89543 19.9997 4 19.1042 4 17.9997V5.99966C4 4.89509 4.89543 3.99966 6 3.99966Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h2 className="pt-6 md:text-[1.188rem] md:leading-[1.781rem] font-semibold">
                            About Starbucks Gift Cards in general
                        </h2>

                        <p className="py-4 text-[0.813rem] leading-[1.219rem] md:text-sm font-medium">
                            Starbucks Gift Cards, including eGifts, can be used to pay in a Starbucks store or to join Starbucks® Rewards.
                        </p>

                        <p className="text-[0.813rem] leading-[1.219rem] md:text-sm font-medium pb-4">
                            Register Gift Cards and eGifts to a Starbucks® Rewards account and earn 2★ per dollar every time you pay with that card. Those Stars quickly add up to free food, drinks, and more!
                        </p>

                        <button className="flex items-center hover:bg-stone-500/20 border border-black rounded-3xl font-semibold text-sm md:text-base py-[7px] px-4">
                            Card Terms & Conditions
                            <svg
                                className="inline ml-[3px] w-[18px]"
                                aria-hidden="true"
                                focusable="false"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.5003 3.30018C14.0861 3.30021 13.7503 3.63602 13.7504 4.05024C13.7504 4.46445 14.0862 4.80021 14.5004 4.80018L17.7958 4.79994L11.2981 11.2976C11.0052 11.5905 11.0052 12.0654 11.2981 12.3583C11.591 12.6512 12.0659 12.6512 12.3588 12.3583L18.8566 5.86046V8.99966C18.8566 9.41388 19.1924 9.74966 19.6066 9.74966C20.0208 9.74966 20.3566 9.41388 20.3566 8.99966V4.0498C20.3566 3.85088 20.2776 3.66011 20.1369 3.51945C19.9963 3.3788 19.8055 3.29979 19.6065 3.2998L14.5003 3.30018Z"></path>
                                <path d="M6 3.99966H12V5.49966H6C5.72386 5.49966 5.5 5.72352 5.5 5.99966V17.9997C5.5 18.2758 5.72386 18.4997 6 18.4997H18C18.2761 18.4997 18.5 18.2758 18.5 17.9997V11.2497H20V17.9997C20 19.1042 19.1046 19.9997 18 19.9997H6C4.89543 19.9997 4 19.1042 4 17.9997V5.99966C4 4.89509 4.89543 3.99966 6 3.99966Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
