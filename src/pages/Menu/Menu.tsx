export const Menu: React.FC = () => {  
    return (
        <main>           
            <div className="flex">
                <aside className="max-lg:hidden pl-[7.35rem] lg:pl-[8.188rem] pt-10">
                    <h3 className="text-[1.188rem] font-semibold mb-4">Drinks</h3>
                    <ul className="flex flex-col gap-5 text-stone-600 font-medium mb-7">
                        <li className="cursor-pointer w-fit">Hot Coffee</li>
                        <li className="cursor-pointer w-fit">Cold Coffee</li>
                        <li className="cursor-pointer w-fit">Hot Tea</li>
                        <li className="cursor-pointer w-fit">Cold Tea</li>
                        <li className="cursor-pointer w-fit">Refreshers</li>
                        <li className="cursor-pointer w-fit">Frappuccino® Blended Beverage</li>
                        <li className="cursor-pointer w-fit">Iced Energy</li>
                        <li className="cursor-pointer w-fit">Hot Chocolate, Lemonade & More</li>
                        <li className="cursor-pointer w-fit">Bottled Beverages</li>
                    </ul>

                    <h3 className="text-[1.188rem] font-semibold mb-4">Food</h3>
                    <ul className="flex flex-col gap-5 text-stone-600 font-medium mb-7">
                        <li className="cursor-pointer w-fit">Breakfast</li>
                        <li className="cursor-pointer w-fit">Bakery</li>
                        <li className="cursor-pointer w-fit">Treats</li>
                        <li className="cursor-pointer w-fit">Lunch</li>
                        <li className="cursor-pointer w-fit">Snacks</li>
                    </ul>

                    <h3 className="text-[1.188rem] font-semibold mb-4">At Home Coffee</h3>
                    <ul className="flex flex-col gap-5 text-stone-600 font-medium mb-7">
                        <li className="cursor-pointer w-fit">Whole Bean</li>
                        <li className="cursor-pointer w-fit">VIA® Instant</li>
                        <li className="cursor-pointer w-fit">Shopping Bag</li>
                    </ul>
                </aside>

                <section className="pt-8 px-4 md:pl-0 lg:pt-10 lg:pr-[4.961rem] lg:pl-[7.438rem]">
                    <div className="md:pl-[6.188rem] lg:pl-0">
                        <h1 className="text-2xl md:text-[1.75rem] pb-6 lg:pb-12 font-bold">Menu</h1>

                        <h2 className="text-[1.188rem] md:text-2xl font-bold mb-8 pb-4 border-b">Drinks</h2>

                        <ul className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:gap-8 md:text-[1.188rem] pb-10">
                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/bev/CaffeLatte.jpg?impolicy=1by1_tight_288" alt="Hot Coffee" role="presentation" />
                                Hot Coffee
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/bev/VanillaSweetCreamColdBrew.jpg?impolicy=1by1_tight_288" alt="Cold Coffee" role="presentation" />
                                Cold Coffee
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/bev/HoneyCitrusMintTea.jpg?impolicy=1by1_tight_288" alt="Hot Tea" role="presentation" />
                                Hot Tea
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20181127_IcedMatchaGreenTeaLatte.jpg?impolicy=1by1_tight_288" alt="Cold Tea" role="presentation" />
                                Cold Tea
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211210_StrawberryAcaiLemonadeRefreshers.jpg?impolicy=1by1_tight_288" alt="Refreshers" role="presentation" />
                                Refreshers
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/bev/CaramelRibbonCrunchCremeFrappuccino.jpg?impolicy=1by1_tight_288" alt="Frappuccino® Blended Beverage" role="presentation" />
                                Frappuccino® Blended Beverage
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/bev/MelonBurstEnergyDrink.jpg?impolicy=1by1_tight_288" alt="Iced Energy" role="presentation" />
                                Iced Energy
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[100px]" src="https://globalassets.starbucks.com/digitalassets/products/bev/HotChocolate.jpg?impolicy=1by1_tight_288" alt="Hot Chocolate, Lemonade &amp; More" role="presentation" />
                                Hot Chocolate, Lemonade & More
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.688rem] lg:w-[100px]" src="https://globalassets.starbucks.com/digitalassets/products/bev/EvolutionFreshOrganicDefenseUp.jpg?impolicy=1by1_tight_288" alt="Bottled Beverages" role="presentation" />
                                Bottled Beverages
                            </li>
                        </ul>

                        <h2 className="text-[1.188rem] md:text-2xl font-bold mb-8 pb-4 border-b">Food</h2>

                        <ul className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:gap-8 md:text-[1.188rem] mb-10">
                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/food/EggPestoMozzarellaSandwich.jpg?impolicy=1by1_tight_288" alt="Breakfast" role="presentation" />
                                Breakfast
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/food/SBX20210915_Croissant-onGreen.jpg?impolicy=1by1_tight_288" alt="Bakery" role="presentation" />
                                Bakery
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/food/SBX20181129_BirthdayCakePop.jpg?impolicy=1by1_tight_288" alt="Treats" role="presentation" />
                                Treats
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/food/SBX20220207_GrilledCheeseOnSourdough_US.jpg?impolicy=1by1_tight_288" alt="Lunch" role="presentation" />
                                Lunch
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/food/Madeleines.jpg?impolicy=1by1_tight_288" alt="Snacks" role="presentation" />
                                Snacks
                            </li>
                        </ul>

                        <h2 className="text-[1.188rem] md:text-2xl font-bold mb-8 pb-4 border-b">At Home Coffee</h2>

                        <ul className="flex flex-col md:grid md:grid-cols-2 gap-4 lg:gap-8 md:text-[1.188rem] mb-10">
                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/at-home/PikePlaceRoast2022.jpg?impolicy=1by1_tight_288" alt="Whole Bean" role="presentation" />
                                Whole Bean
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/at-home/SBX20190715_ViaInstantPikePlaceRoast.jpg?impolicy=1by1_tight_288" alt="VIA® Instant" role="presentation" />
                                VIA® Instant
                            </li>

                            <li className="flex items-center gap-4 font-medium">
                                <img className="block rounded-full w-[4.375rem] lg:w-[6.875rem]" src="https://globalassets.starbucks.com/digitalassets/products/merch/SBX20210405_SirenShopperBag.jpg?impolicy=1by1_tight_288" alt="Shopping Bag" role="presentation" />
                                Shopping Bag
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    )
}
