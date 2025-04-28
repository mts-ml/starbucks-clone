export const Featured: React.FC = () => {
    return (
        <main className="max-w-[90rem] mx-auto">
            <h1 className="pt-8 pb-16 text-center text-[#1e3932] font-bold max-sm:text-2xl text-[1.75rem] leading-[2.1rem] lg:text-[3.125rem] lg:leading-[3.75rem] ">
                The Spring edit
            </h1>

            <div className="md:grid grid-cols-2 gap-8">
                <section className="bg-[#D2D2AE] mb-8">
                    <img
                        className="block mb-2"
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97205.jpg"
                        alt="A green iced tea latte drink in a clear glass with a thick layer of creamy purple cold foam on top."
                    />
                    <div className="px-4 md:px-6 lg:px-10 pb-8">
                        <h2 className="mb-6 text-[#1E3932] text-center max-sm:text-[1.188rem] text-[1.375rem] leading-[2.063rem] md:text-2xl font-semibold">
                            Iced Lavender Cream Oatmilk Matcha
                        </h2>

                        <p className="text-[#1E3932] text-center text-base md:text-[1.188rem] md:leading-[2.081rem] font-medium">
                            A smooth combination of matcha green tea and oatmilk, finished with lavender cream cold foam with subtle floral notes. Includes dairy.
                        </p>

                        <button className="max-sm:text-sm text-base block py-[7px] px-4 mt-8 mx-auto border font-semibold rounded-3xl text-[#1E3932] border-[#1E3932] hover:bg-[#1E3932]/15 transition-colors duration-300 ease-in-out">
                            Order now
                        </button>
                    </div>
                </section>

                <section className="bg-[#D2D2AE] mb-8">
                    <img
                        className="block mb-2"
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97206.jpg"
                        alt="A creamy iced coffee drink in a clear glass cup sitting on a table."
                    />

                    <div className="px-4 md:px-6 lg:px-10 pb-8 md:my-8 lg:mt-16">
                        <h2 className="mb-6 text-[#1E3932] text-center max-sm:text-[1.188rem] text-[1.375rem] leading-[2.063rem] md:text-2xl font-semibold">
                            Iced Lavender Oatmilk Latte
                        </h2>

                        <p className="text-[#1E3932] text-center text-base md:text-[1.188rem] md:leading-[2.081rem] font-medium">
                            Starbucks<sup>®</sup> Blonde Espresso and oatmilk with subtle floral accents, served over ice.
                        </p>

                        <button className="max-sm:text-sm text-base block py-[7px] px-4 mt-8 mx-auto border font-semibold rounded-3xl text-[#1E3932] border-[#1E3932] hover:bg-[#1E3932]/15 transition-colors duration-300 ease-in-out">
                            Order now
                        </button>
                    </div>
                </section>
            </div>

            <section className="bg-[#334630] text-white md:flex items-center mb-8">
                <img
                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97451.jpg"
                    className="block md:w-1/2"
                    alt="A creamy iced tea latte drink in a clear glass cup topped with a thick layer of pink cold foam and pink sprinkled topping."
                />

                <div className="py-8 px-4 md:px-6 md:mx-8">
                    <h2 className="font-bold text-center mb-6 max-sm:text-[1.188rem] sm:text-[1.375rem] sm:leading-[2.063rem] md:text-2xl">
                        New Iced Cherry Chai
                    </h2>

                    <p className="text-center md:text-[1.188rem] md:leading-[2.063rem] font-medium">
                        A creamy cold foam with notes of cherry and a crunchy topping meets our signature chai tea latte for a spring take on a favorite.
                    </p>

                    <button className="max-sm:text-sm text-base block py-[7px] px-4 mt-8 mx-auto border font-semibold rounded-3xl text-white border-white hover:bg-[#283826] transition-colors duration-300 ease-in-out">
                        Order now
                    </button>
                </div>
            </section>

            <div className="md:flex gap-8 md:mb-8">
                <section className="bg-[#5F4633] max-md:mb-8 text-white text-center">
                    <img
                        className="block mb-2"
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97269.jpg"
                        alt="A short-sized creamy coffee drink in a clear glass with a frothy top of milk foam."
                    />

                    <div className="px-4 md:px-6 lg:px-10 pb-8">
                        <h2 className="mb-6 max-sm:text-[1.188rem] text-[1.375rem] leading-[2.063rem] md:text-2xl font-semibold">
                            Cortado
                        </h2>

                        <p className="text-base md:text-[1.188rem] md:leading-[2.081rem] font-medium">
                            Three ristretto shots of Starbucks <sup>®</sup> Blonde Espresso combined with steamed whole milk and served in an 8 fl oz short cup.
                        </p>

                        <button className="max-sm:text-sm text-base block py-[7px] px-4 mt-8 md:mb-4 mx-auto border font-semibold rounded-3xl border-white hover:bg-[#503a2b] transition-colors duration-300 ease-in-out">
                            Order now
                        </button>
                    </div>
                </section>

                <section className="bg-[#5F4633] max-md:mb-8 text-white text-center">
                    <img
                        className="block mb-2"
                        src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97270.jpg"
                        alt="A short-sized creamy coffee drink in a clear glass with a frothy top and light brown sprinkles of cinnamon."
                    />

                    <div className="px-4 md:px-6 lg:px-10 pb-8">
                        <h2 className="mb-6 max-sm:text-[1.188rem] text-[1.375rem] leading-[2.063rem] md:text-2xl font-semibold">
                            Brown Sugar Oatmilk Cortado
                        </h2>

                        <p className="text-base md:text-[1.188rem] md:leading-[2.081rem] font-medium">
                            Three ristretto shots of Starbucks® Blonde Espresso, brown sugar syrup, cinnamon and steamed oatmilk in an 8 fl oz short cup.
                        </p>

                        <button className="max-sm:text-sm text-base block py-[7px] px-4 mt-8 mx-auto border font-semibold rounded-3xl text-white border-white hover:bg-[#503a2b] transition-colors duration-300 ease-in-out">
                            Order now
                        </button>
                    </div>
                </section>
            </div>

            <section className="bg-[#334630] text-white md:flex flex-row-reverse items-center mb-8">
                <img
                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97345.jpg"
                    className="block md:w-1/2"
                    alt="Three iced drinks with blackberry pieces in clear glasses: two are dark purple and one is dark pink.&ZeroWidthSpace;"
                />

                <div className="py-8 px-4 md:px-6 md:mx-8">
                    <h2 className="font-bold text-center mb-6 max-sm:text-[1.188rem] sm:text-[1.375rem] sm:leading-[2.063rem] md:text-2xl">
                        Blackberry Sage Refreshers
                    </h2>

                    <p className="text-center md:text-[1.188rem] md:leading-[2.063rem] font-medium">
                        Sweet blackberry flavors and notes of sage are shaken with real blackberry pieces—enjoyed alone or with lemonade or coconutmilk.
                    </p>

                    <button className="max-sm:text-sm text-base block py-[7px] px-4 mt-8 mx-auto border font-semibold rounded-3xl text-white border-white hover:bg-[#283826] transition-colors duration-300 ease-in-out">
                        See our seasonal Refreshers
                    </button>
                </div>
            </section>

            <section className="bg-[#334630] text-white md:flex items-center mb-8">
                <img
                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-97198.jpg"
                    className="block md:w-1/2"
                    alt="Two flatbread wraps, each cut in half, stuffed with unique savory filling variations."
                />

                <div className="py-8 px-4 md:px-6 md:mx-8">
                    <h2 className="font-bold text-center mb-6 max-sm:text-[1.188rem] sm:text-[1.375rem] sm:leading-[2.063rem] md:text-2xl">
                        New Spicy Falafel Pocket and New Jalapeño Chicken Pocket
                    </h2>

                    <p className="text-center md:text-[1.188rem] md:leading-[2.063rem] font-medium">
                        Hand-folded, toasted lavash flatbreads with well-balanced, savory fillings like falafel and spicy herb sauce or chicken, peppers and jalapeño cream cheese.
                    </p>

                    <button className="max-sm:text-sm text-base block py-[7px] px-4 mt-8 mx-auto border font-semibold rounded-3xl text-white border-white hover:bg-[#283826] transition-colors duration-300 ease-in-out">
                        Order now
                    </button>
                </div>
            </section>
        </main>
    )
}
