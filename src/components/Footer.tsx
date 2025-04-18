import { useState } from "react";
import { useLocation } from "react-router-dom";

import { IoIosArrowDown as Arrow } from "react-icons/io";
import spotifyIcon from '../assets/images/spotify-icon.svg'
import fbIcon from '../assets/images/fb-icon.svg'
import pinteresIcon from '../assets/images/pinteres-icon.webp'
import instagramIcon from '../assets/images/instagram-icon.webp'
import youtubeIcon from '../assets/images/youtube-icon.svg'
import xIcon from '../assets/images/x-icon.svg'


export const Footer: React.FC = () => {
   const [itemsArray, setItemsArray] = useState<number[]>([])

   const year = new Date().getFullYear()

   const location = useLocation()
   const menuPage = location.pathname === "/menu"


   function handleShowItem(index: number) {
      if (itemsArray.includes(index)) {
         setItemsArray(prevState => prevState.filter(item => item !== index))
      } else {
         setItemsArray(prevState => [...prevState, index])
      }
   }


   return (
      <>
         <hr className="my-6 border w-full" />

         <footer className="mt-10 max-w-[91rem] mx-auto">

            <section className={`flex mx-5 max-lg:flex-col gap-10 lg:gap-6 font-semibold pb-10 border-b-[2px] border-black/10 ${menuPage ? "md:mx-[7rem]" : ""}`}>
               <div>
                  <button
                     className="flex w-full justify-between"
                     onClick={() => handleShowItem(0)}
                     type="button"
                     aria-controls="accordion1"
                  >
                     <h3 className="lg:text-[1.188rem] text-left font-medium">About Us</h3>
                     <Arrow className={`lg:hidden transition-transform duration-300 ease-in-out ${itemsArray.includes(0) ? "rotate-180" : "rotate-0"}`} size={24} />
                  </button>

                  <ul
                     id="accordion1"
                     className={`flex flex-col lg:text-base transform overflow-hidden transition-all duration-500 ease-in-out text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(0) ? "max-lg:max-h-[500px] max-lg:translate-y-0" : "max-lg:max-h-0 max-lg:-translate-y-40"}`}
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
                     <h3 className="lg:text-[1.188rem] text-left font-medium">Careers</h3>
                     <Arrow className={`lg:hidden transition-transform duration-300 ease-in-out ${itemsArray.includes(1) ? "rotate-180" : "rotate-0"}`} size={24} />
                  </button>

                  <ul
                     id="accordion2"
                     className={`flex flex-col lg:text-base transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(1) ? "max-lg:max-h-[500px] max-lg:translate-y-0" : "max-lg:max-h-0 max-lg:-translate-y-40"}`}
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
                     <h3 className="lg:text-[1.188rem] text-left font-medium">Social Impact</h3>
                     <Arrow className={`lg:hidden transition-transform duration-500 ease-in-out ${itemsArray.includes(2) ? "rotate-180" : "rotate-0"}`} size={24} />
                  </button>

                  <ul
                     id="accordion3"
                     className={`flex flex-col lg:text-base transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(2) ? "max-lg:max-h-[500px] max-lg:translate-y-0" : "max-lg:max-h-0 max-lg:-translate-y-40"}`}
                  >
                     <li className="mt-9 w-fit hover:cursor-pointer hover:text-stone-900">Communities</li>
                     <li className="w-fit hover:cursor-pointer hover:text-stone-900">Starbucks Foundation</li>
                     <li className="w-fit hover:cursor-pointer hover:text-stone-900">Sustainability</li>
                     <li className="w-fit hover:cursor-pointer hover:text-stone-900 lg:max-w-[15ch]">Environmental and Social Impact Reporting</li>
                  </ul>
               </div>

               <div>
                  <button
                     className="flex w-full justify-between"
                     onClick={() => handleShowItem(3)}
                     type="button">
                     <h3 className="lg:text-[1.188rem] text-left font-medium">For Business Partners</h3>
                     <Arrow className={`lg:hidden ${itemsArray.includes(3) ? "rotate-180" : "rotate-0"}`} size={24} />
                  </button>

                  <ul
                     id="accordion3"
                     className={`flex flex-col lg:text-base transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(3) ? "max-lg:max-h-[500px] max-lg:translate-y-0" : "max-lg:max-h-0 max-lg:-translate-y-40"}`}
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
                     <h3 className="lg:text-[1.188rem] text-left font-medium">Order and Pick Up</h3>
                     <Arrow className={`lg:hidden ${itemsArray.includes(4) ? "rotate-180" : "rotate-0"}`} size={24} />
                  </button>

                  <ul
                     id="accordion3"
                     className={`flex flex-col lg:text-base transition-all duration-500 ease-in-out overflow-hidden text-sm text-stone-500 font-medium gap-6 ${itemsArray.includes(4) ? "max-lg:max-h-[500px] max-lg:translate-y-0" : "max-lg:max-h-0 max-lg:-translate-y-40"}`}
                  >
                     <li className="mt-9 w-fit hover:cursor-pointer hover:text-stone-900">Order on the App</li>
                     <li className="w-fit hover:cursor-pointer hover:text-stone-900">Order on the Web</li>
                     <li className="w-fit hover:cursor-pointer hover:text-stone-900">Delivery</li>
                     <li className="w-fit hover:cursor-pointer hover:text-stone-900">Order and Pick Up Options</li>
                     <li className="w-fit hover:cursor-pointer hover:text-stone-900">Explore and Find Coffee for Home</li>
                  </ul>
               </div>
            </section>

            <section className={`mt-8 ${menuPage ? "md:mx-[6.2rem]" : "md:mx-2"}`}>
               <ul className="mx-2 mb-6 flex">
                  <li className="hover:bg-black/10 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-scale-110">
                     <a href="https://open.spotify.com/user/starbucks#login" target="_blank" rel="noopener noreferrer">
                        <img src={spotifyIcon} width={32} alt="Spotify icon" />
                     </a>
                  </li>

                  <li className="hover:bg-black/10 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-scale-110">
                     <a href="https://www.facebook.com/Starbucks/" target="_blank" rel="noopener noreferrer">
                        <img src={fbIcon} width={32} alt="Facebook icon" />
                     </a>
                  </li>

                  <li className="hover:bg-black/10 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-scale-110">
                     <a href="https://pinterest.com/starbucks/" target="_blank" rel="noopener noreferrer">
                        <img src={pinteresIcon} width={32} alt="Pinteres icon" />
                     </a>
                  </li>

                  <li className="hover:bg-black/10 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-scale-110">
                     <a href="https://www.instagram.com/starbucks/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} width={32} alt="Instagram icon" />
                     </a>
                  </li>

                  <li className="hover:bg-black/10 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-scale-110">
                     <a href="https://www.youtube.com/starbucks" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} width={32} alt="Youtube icon" />
                     </a>
                  </li>

                  <li className="hover:bg-black/10 p-2 rounded-full transition-all duration-300 ease-in-out hover:bg-scale-110">
                     <a href="https://x.com/starbucks/" target="_blank" rel="noopener noreferrer">
                        <img src={xIcon} width={32} alt="X icon" />
                     </a>
                  </li>

               </ul>

               <ul className="flex flex-col gap-4 mx-4 mb-7 text-sm lg:text-base font-medium">
                  <li className="hover:cursor-pointer hover:underline w-fit">Privacy Notice</li>
                  <li className="hover:cursor-pointer hover:underline w-fit">Consumer Health Privacy Notice</li>
                  <li className="hover:cursor-pointer hover:underline w-fit">Terms of Use</li>
                  <li className="hover:cursor-pointer hover:underline w-fit">Do Not Share My Personal Information</li>
                  <li className="hover:cursor-pointer hover:underline w-fit">CA SUpply Chain Act</li>
                  <li className="hover:cursor-pointer hover:underline w-fit">Accessibility</li>
                  <li className="hover:cursor-pointer hover:underline w-fit">Cookie Preferences</li>
               </ul>
            </section>

            <p className="mx-4 md:mx-[7rem] mb-10 text-[0.813rem] lg:text-sm text-[#5c4f4b] font-medium">© {year} Starbucks Coffee Company. All rights reserved.</p>
         </footer>
      </>
   )
}
