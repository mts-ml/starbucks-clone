import { ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleRight as Angle } from "react-icons/fa6";


interface CarouselProps {
    children: ReactNode
    bgWidth?: string
}


export const Carousel: React.FC<CarouselProps> = ( {children, bgWidth = "w-16"} ) => {
    const carouselRef = useRef<HTMLDivElement | null>(null)

    const [isAtEnd, setIsAtEnd] = useState(false)
    const [isAtStart, setIsAtStart] = useState(true)

    function handleScroll() {
        if (!carouselRef.current) return

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current

        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
        setIsAtStart(scrollLeft <= 10)
    }

    function handleCarouselClick(direction: 'left' | 'right') {
        if (!carouselRef.current) return

        const card = carouselRef.current.querySelector("img")
        if (!card) return

        const cardWidth = card.clientWidth + 16
        const scrollAmount = cardWidth * 3
        carouselRef.current.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth"
        })
    }


    useEffect(() => {
        const carousel = carouselRef.current
        if (!carousel) return

        carousel.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleScroll)
        return () => {
            carousel.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])


    return (
        <div className="relative">

            {/* BACKGROUND WITH OPACITY */}
            <div className={`absolute right-0 top-0 h-full ${bgWidth} bg-white/80 z-10`} />

            <div ref={carouselRef} className="hide-scrollbar z-40 flex pb-4 pr-16 overflow-x-auto scroll-smooth px-4 pt-2 md:pt-6 md:pl-[6.188rem] lg:pl-[8.188rem]">
                {children}
            </div>

            {/* ARROWS */}
            {!isAtEnd && <button
                className="absolute z-20 top-1/2 -translate-y-1/2 right-7 md:right-10 lg:right-14 rounded-full bg-white border p-3 cursor-pointer shadow-lg hover:scale-105 transition-transform"
                aria-label="Click on the arrow to advance the carousel."
                onClick={() => handleCarouselClick('right')}
            >
                <Angle />
            </button>}

            {!isAtStart && <button
                className="absolute z-20 top-1/2 -translate-y-1/2 left-4 lg:left-[130px] xl:left-[138px] rounded-full bg-white border p-3 cursor-pointer"
                aria-label="Click on the arrow to return the carousel."
                onClick={() => handleCarouselClick('left')}
            >
                <Angle className="rotate-180" />
            </button>}
        </div>
    )
}
