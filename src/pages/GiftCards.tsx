import { useEffect, useRef, useState } from "react";
import { FaAngleRight as Angle } from "react-icons/fa6";


export const GiftCards: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null)

    const [isAtEnd, setIsAtEnd] = useState(false)
    const [isAtStart, setIsAtStart] = useState(true)

    function handleCarouselRightClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        if (carouselRef.current) {
            const card = carouselRef.current.querySelector("img")
            if (card) {
                const cardWidth = card.clientWidth + 16
                const scrollAmount = cardWidth * 3
                carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
            }
        }
    }

    function handleCarouselLeftClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()

        if (carouselRef.current) {
            const card = carouselRef.current.querySelector("img")
            if (card) {
                const cardWidth = card.clientWidth + 16
                const scrollAmount = cardWidth * 3
                carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
            }
        }
    }

    useEffect(() => {
        const carousel = carouselRef.current
        if (!carousel) return

        function handleScroll() {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

                setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
                setIsAtStart(scrollLeft <= 10)
            }
        }
        handleScroll()

        carousel.addEventListener("scroll", handleScroll)
        return () => {
            carousel.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <main className="pt-2">
            <h1 className="text-[1.75rem] leading-[2.256rem] md:text-4xl font-bold md:pt-14 px-4 pt-2 md:pr-6 md:pl-[6.188rem] lg:pl-[8.188rem] lg:pr-10">Gift cards</h1>

            <section className="pt-4">
                <div className="flex items-center justify-between px-4 pt-2 md:pr-6 md:pl-[6.188rem] lg:pl-[8.188rem] lg:pr-10">
                    <h2 className="uppercase text-[0.813rem] md:text-base font-bold tracking-wider">Featured</h2>

                    <span className="py-[7px] px-4 text-sm md:text-base text-[#00754a] font-semibold">See all</span>
                </div>

                <div ref={carouselRef} className="hide-scrollbar relative z-40 flex pb-4 pr-16 overflow-x-auto scroll-smooth px-4 pt-2 md:pr-6 md:pl-[6.188rem] lg:pl-[8.188rem] lg:pr-10">
                    {!isAtEnd && <button
                        className="fixed z-50 top-[14rem] md:top-[19.063rem] right-[25px] rounded-full bg-white border p-[12px] cursor-pointer"
                        onClick={(event) => handleCarouselRightClick(event)}
                    >
                        <Angle />
                    </button>}

                    {!isAtStart && <button
                        className="fixed z-50 top-[14rem] md:top-[19.063rem] left-[15px] rounded-full bg-white border p-[12px] cursor-pointer"
                        onClick={(event) => handleCarouselLeftClick(event)}
                    >
                        <Angle className="rotate-180" />
                    </button>}

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mr-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/SpringSeasonalFY25.png"
                        alt="Gift card image: A field of yellow, blue and purple flowers sit in front of a purple cloudy sky. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyMothersDayFY25.png"
                        alt="Gift card image: Happy Mother's Day is written on a light green background, surrounded by colorful spring flowers. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/MakeLearningFunFY25.png"
                        alt="Gift card image: You make learning fun is written across the pages of an open book surrounded by foliage on a green and orange patterned background. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HealthcareHeroFY25.png"
                        alt="Gift card image: For a healthcare hero is written inside a heart-shaped stethoscope surrounded by medical supplies on a light green background. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/LoveYouMomFY25.png"
                        alt="Gift card image: Love You, Mom is written on a light background, surrounded by a breakfast buffet of flowers, coffee and breakfast foods. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/HappyBirthdayFY25.png"
                        alt="Gift card image: A sliced birthday cake sits on top of a blue table with the words Happy Birthday curved across the design in dark green. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/ThankYouFY25.png"
                        alt="Gift card image: Thank You is written in shuffled letters on a blue and green multi-colored geometric background with black stars. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/YouAreAwesomeFY25.png"
                        alt="Gift card image: You are Awesome is written in punched out purple and red letters on an orange splattered background. "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy25/CelebrationFY25.png"
                        alt="Gift card image: An iced Starbucks cup exploding with multi-colored confetti sits in front of a dark green background.  "
                    />

                    <img
                        className="w-[120px] md:w-[180px] lg:w-[250px] xl:w-[300px] min1702:w-[450px] mx-2 rounded-lg hover:-translate-y-2 transition-transform duration-300 ease-in-out drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] cursor-pointer"
                        src="https://globalassets.starbucks.com/digitalassets/cards/fy22/BigThankYouFY22.jpg"
                        alt="Gift card image: A Big Thank You with the words A Big written in small pale blue letters and arched over the top of the larger words Thank You."
                    />
                </div>

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

        </main>
    )
}
