import { useState } from "react";
import { IoIosArrowDown as Arrow } from "react-icons/io";
import spotifyLogo from '../assets/images/spotify_logo_icon_206676.webp'


export const Footer: React.FC = () => {
    const [itemsArray, setItemsArray] = useState<number[]>([])

    function handleShowItem(index: number) {
        if (itemsArray.includes(index)) {
            setItemsArray(prevState => prevState.filter(item => item !== index))
        } else {
            setItemsArray(prevState => [...prevState, index])
        }
    }


    return (
        <footer className="mt-10">
            <section className="flex flex-col gap-10 font-semibold px-6">

                <div>
                    <button
                        className="flex w-full justify-between"
                        onClick={() => handleShowItem(0)}
                        type="button"
                        aria-controls="accordion1"
                    >
                        <h3>About Us</h3>
                        <Arrow className={`transition-transform duration-300 ease-in-out ${itemsArray.includes(0) ? "rotate-180" : "rotate-0"}`} size={24} />
                    </button>

                    <ul
                        id="accordion1"
                        className={`flex flex-col transform overflow-hidden transition-all duration-500 ease-in-out text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(0) ? "max-h-[500px] translate-y-0" : "max-h-0 -translate-y-40"}`}
                    >
                        <li className="w-fit mt-9 hover:cursor-pointer hover:text-stone-900">Our Company</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Our Coffee</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">About Starbucks</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Starbucks Archive</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Investor Relations</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Customer Service</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Contact Us</li>
                    </ul>
                </div>

                <div>
                    <button
                        className="flex w-full justify-between"
                        onClick={() => handleShowItem(1)}
                        type="button"
                        aria-controls="accordion2"
                    >
                        <h3>Careers</h3>
                        <Arrow className={`transition-transform duration-300 ease-in-out ${itemsArray.includes(1) ? "rotate-180" : "rotate-0"}`} size={24} />
                    </button>

                    <ul
                        id="accordion2"
                        className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(1) ? "max-h-[500px] translate-y-0" : "max-h-0 -translate-y-40"}`}
                    >
                        <li className="mt-9 w-fit hover:cursor-pointer hover:text-stone-900">Culture and Values</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Belonging at Starbucks</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">College Achievement Plan</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Alumni Community</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">U.S. Careers</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">International Careers</li>
                    </ul>
                </div>

                <div>
                    <button
                        className="flex w-full justify-between"
                        onClick={() => handleShowItem(2)}
                        type="button"
                        aria-controls="accordion3"
                    >
                        <h3>Social Impact</h3>
                        <Arrow className={`transition-transform duration-500 ease-in-out ${itemsArray.includes(2) ? "rotate-180" : "rotate-0"}`} size={24} />
                    </button>

                    <ul
                        id="accordion3"
                        className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(2) ? "max-h-[500px] translate-y-0" : "max-h-0 -translate-y-40"}`}
                    >
                        <li className="mt-9 w-fit hover:cursor-pointer hover:text-stone-900">Communities</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Starbucks Foundation</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Sustainability</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Environmental and Social Impact Reporting</li>
                    </ul>
                </div>

                <div>
                    <button
                        className="flex w-full justify-between"
                        onClick={() => handleShowItem(3)}
                        type="button">
                        <h3>For Business Partners</h3>
                        <Arrow className={itemsArray.includes(3) ? "rotate-180" : "rotate-0"} size={24} />
                    </button>

                    <ul
                        id="accordion3"
                        className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(3) ? "max-h-[500px] translate-y-0" : "max-h-0 -translate-y-40"}`}
                    >
                        <li className="mt-9 w-fit hover:cursor-pointer hover:text-stone-900">Landlord Support Center</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Suppliers</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Corporate Gift Card Sales</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Office and Foodservice Coffe</li>
                    </ul>

                </div>

                <div>
                    <button
                        className="flex w-full justify-between"
                        onClick={() => handleShowItem(4)}
                        type="button">
                        <h3>Order and Pick Up</h3>
                        <Arrow className={itemsArray.includes(4) ? "rotate-180" : "rotate-0"}size={24} />
                    </button>

                    <ul
                        id="accordion3"
                        className={`flex flex-col transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(4) ? "max-h-[500px] translate-y-0" : "max-h-0 -translate-y-40"}`}
                    >
                        <li className="mt-9 w-fit hover:cursor-pointer hover:text-stone-900">Order on the App</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Order on the Web</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Delivery</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Order and Pick Up Options</li>
                        <li className="w-fit hover:cursor-pointer hover:text-stone-900">Explore and Find Coffee for Home</li>
                    </ul>
                </div>
            </section>

            <hr className="border mx-auto w-[95%] mt-12 mb-8" />

            <section>
                <ul className="flex gap-4">
                    <li><img src={spotifyLogo} width={32} alt="Spotfy Logo"/></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </footer>
    )
}
