import { Link } from "react-router-dom"


export const Rewards: React.FC = () => {
    return (
        <>
            <div className="sticky top-0 z-50 bg-[#1e3932] text-white">
                <div className="mx-auto max-w-[95rem] flex justify-between items-center h-12 px-6 text-[0.813rem] md:text-sm">
                    <p className="font-semibold uppercase md:mx-16 min1520:mx-0">Starbucks® Rewards</p>

                    <button className="md:hidden border rounded-full px-4 py-1 font-semibold">Join in the app</button>
                </div>
            </div>

            <main>
                <section className="bg-[#fbf5e8]">
                    <div className="mx-auto max-w-[93rem] flex max-md:flex-col items-center">
                        <div className="flex flex-col items-center lg:items-start md:w-1/2 py-7 text-center lg:lg:text-left gap-4 lg:px-10 xl:px-16">
                            <h1 className="font-semibold max-w-[15ch] text-[#1E3932] text-[1.75rem] md:text-[2.25rem] lg:text-[3.125rem] ">
                                It’s a great day for free coffee
                            </h1>

                            <p className="font-medium text-[#1E3932] px-4 lg:px-0">Sign up and start enjoying the perks of Starbucks® Rewards.</p>

                            <button className="lg:hidden bg-[#03784D] text-white text-[0.875rem] md:text-base border rounded-full px-4 py-1 font-semibold">Join in the app</button>

                            <button className="max-lg:hidden bg-[#03784D] text-white text-[0.875rem] md:text-base border rounded-full px-4 py-1 font-semibold">Join now</button>

                            <Link to="#" className={`hover:no-underline font-medium text-[0.875rem] md:text-base`}>
                                <p className="lg:hidden">
                                    <span className="underline hover:no-underline">Or join online</span>
                                </p>

                                <p className="max-lg:hidden">
                                    It's even better <span className="underline cursor-pointer hover:no-underline">with the app.</span>
                                </p>
                            </Link>
                        </div>

                        <img
                            src="https://www.starbucks.com/weblx/images/rewards/hero/rewards-hero.png"
                            className="block max-h-[461px] md:w-1/2"
                            alt="Image of a glass with cold beverage and cream on top."
                            role="presentation"
                            width="720"
                        ></img>
                    </div>
                </section>

                <section className="mt-20 mb-16">
                    <h2 className="text-center font-semibold text-2xl md:text-[1.75rem] md:leading-[33.2px]">Getting started is easy</h2>

                    <p className="text-[0.875rem] md:text-base leading-5 font-medium text-center mt-5 mb-12">Earn Stars and get rewarded in a few easy steps.</p>

                    <div className="md:flex gap-6 px-[64px] md:text-center mx-auto max-w-screen-min1520">
                        {/* 1º */}
                        <div className="px-4">
                            <div className="flex md:flex-col items-center gap-4">
                                <span className="text-xl text-[#036342] font-semibold px-5 py-[11px] border-2 border-[#00844A] rounded-full">1</span>

                                <p className="md:hidden max-md:self-start font-semibold text-base md:text-[1.188rem] leading-6 md:my-5">
                                    Order and pay how you’d like
                                </p>

                                <p className="max-md:hidden max-md:self-start font-semibold text-base md:text-[1.188rem] leading-6 md:my-5">
                                    Create an account
                                </p>
                            </div>

                            <p className="md:hidden text-[0.875rem] font-medium leading-5 md:text-base max-md:mx-[4.375rem] md:text-left">
                                Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.  <span className="cursor-pointer underline hover:no-underline text-[#036342]">Learn how</span>
                            </p>

                            <p className="max-md:hidden text-[0.875rem] font-medium leading-5 md:text-base max-md:mx-[4.375rem] md:text-left">
                                To get started,  <span className="cursor-pointer underline hover:no-underline text-[#036342]">join now</span>. You can also <span className="cursor-pointer underline hover:no-underline text-[#036342]">join in the app</span> to get access to the full range of Starbucks® Rewards benefits.
                            </p>
                        </div>

                        {/* 2º */}
                        <div className="px-4 max-md:my-10">
                            <div className="flex md:flex-col items-center gap-4">
                                <span className="text-xl text-[#036342] font-semibold px-5 py-[11px] border-2 border-[#00844A] rounded-full">2</span>

                                <p className="max-md:self-start font-semibold text-base md:text-[1.188rem] leading-6 md:my-5">
                                    Order and pay how you’d like
                                </p>
                            </div>

                            <p className="text-[0.875rem] font-medium leading-5 md:text-base max-md:mx-[4.375rem]">
                                Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.  <span className="cursor-pointer underline hover:no-underline text-[#036342]">Learn how</span>
                            </p>
                        </div>

                        {/* 3º */}
                        <div className="px-4">
                            <div className="flex md:flex-col items-center gap-4">
                                <span className="text-xl text-[#036342] font-semibold px-5 py-[11px] border-2 border-[#00844A] rounded-full">3</span>

                                <p className="max-md:self-start font-semibold text-base md:text-[1.188rem] leading-6 md:my-5">
                                    Earn Stars, get Rewards
                                </p>
                            </div>

                            <p className="text-[0.875rem] font-medium leading-5 md:text-base max-md:mx-[4.375rem]">
                                As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    
                </section>


            </main>
        </>
    )
}
