import { FaAngleRight as Angle } from "react-icons/fa6";


export const GiftCards: React.FC = () => {
    return (
        <main className="px-4 pt-2">
            <h1 className="text-[1.75rem] leading-[2.256rem] md:text-4xl font-semibold pt-4">GiftCards</h1>

            <section className="pt-4">
                <div className="flex items-center justify-between">
                    <h2 className="uppercase text-[0.813rem] md:text-base font-bold">Featured</h2>

                    <span className="py-[7px] px-4 text-sm md:text-base text-[#00754a] font-semibold">See all</span>
                </div>

                <div className="relative z-40 flex py-4 pr-16 overflow-x-auto scroll-smooth">
                    <Angle className="absolute z-50 top-[35px] right-[10px] rounded-full bg-white border p-[11px] text-[40px] cursor-pointer" />

                    <img
                        className="w-[120px] mr-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/SpringSeasonalFY25.png"
                        alt="Gift card image: A field of yellow, blue and purple flowers sit in front of a purple cloudy sky. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyMothersDayFY25.png"
                        alt="Gift card image: Happy Mother's Day is written on a light green background, surrounded by colorful spring flowers. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/MakeLearningFunFY25.png"
                        alt="Gift card image: You make learning fun is written across the pages of an open book surrounded by foliage on a green and orange patterned background. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HealthcareHeroFY25.png"
                        alt="Gift card image: For a healthcare hero is written inside a heart-shaped stethoscope surrounded by medical supplies on a light green background. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/LoveYouMomFY25.png"
                        alt="Gift card image: Love You, Mom is written on a light background, surrounded by a breakfast buffet of flowers, coffee and breakfast foods. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyBirthdayFY25.png"
                        alt="Gift card image: A sliced birthday cake sits on top of a blue table with the words Happy Birthday curved across the design in dark green. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/ThankYouFY25.png"
                        alt="Gift card image: Thank You is written in shuffled letters on a blue and green multi-colored geometric background with black stars. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/YouAreAwesomeFY25.png"
                        alt="Gift card image: You are Awesome is written in punched out purple and red letters on an orange splattered background. "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/CelebrationFY25.png"
                        alt="Gift card image: An iced Starbucks cup exploding with multi-colored confetti sits in front of a dark green background.  "
                    />

                    <img
                        className="w-[120px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg"
                        alt="Gift card image: A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You."
                    />
                </div>
            </section>

        </main>
    )
}
