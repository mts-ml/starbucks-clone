import { useState } from "react"
import { Link } from "react-router-dom"


export const Rewards: React.FC = () => {
    const [selected, setSelected] = useState<number>(0)

    function handleFavorite(index: number) {
        if (selected !== index) {
            setSelected(index)
        }
    }


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

                    <div className="md:flex gap-6 md:px-[64px] md:text-center mx-auto max-w-screen-min1520">
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

                <section className="bg-[#F1F8F5]">
                    <div className="mx-auto max-w-5xl">
                        <h2 className="pt-12 pb-6 font-semibold text-center text-2xl md:text-[1.75rem] leading-[2.425rem]  ">Get your favorites for free</h2>

                        <ul className="flex items-center justify-center gap-14 mb-5">
                            <li>
                                <button
                                    className={`font-semibold text-[1.188rem] md:text-2xl ${selected === 0 ? "link-underline-rewards after:scale-100" : "after:scale-0"}`}
                                    onClick={() => handleFavorite(0)}
                                    aria-controls="favorite1"
                                >
                                    25
                                    <small className="text-yellow-600 text-sm md:text-base">&#9733;</small>
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`font-semibold text-[1.188rem] md:text-2xl ${selected === 1 ? "link-underline-rewards after:scale-100" : "after:scale-0"}`}
                                    onClick={() => handleFavorite(1)}
                                    aria-controls="favorite2"
                                >
                                    100
                                    <small className="text-yellow-600 text-sm md:text-base">&#9733;</small>
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`font-semibold text-[1.188rem] md:text-2xl ${selected === 2 ? "link-underline-rewards after:scale-100" : "after:scale-0"}`}
                                    onClick={() => handleFavorite(2)}
                                    aria-controls="favorite3"
                                >
                                    200
                                    <small className="text-yellow-600 text-sm md:text-base">&#9733;</small>
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`font-semibold text-[1.188rem] md:text-2xl ${selected === 3 ? "link-underline-rewards after:scale-100" : "after:scale-0"}`}
                                    onClick={() => handleFavorite(3)}
                                    aria-controls="favorite4"
                                >
                                    300
                                    <small className="text-yellow-600 text-sm md:text-base">&#9733;</small>
                                </button>
                            </li>

                            <li>
                                <button
                                    className={`font-semibold text-[1.188rem] md:text-2xl ${selected === 4 ? "link-underline-rewards after:scale-100" : "after:scale-0"}`}
                                    onClick={() => handleFavorite(4)}
                                    aria-controls="favorite5"
                                >
                                    400
                                    <small className="text-yellow-600 text-sm md:text-base">&#9733;</small>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {selected === 0 && (
                        <div
                            id="favorite1"
                            className=" bg-[#D4E9E2] shadow-[0_-1px_5px_rgba(0,0,0,0.2)]"
                            aria-live="polite"
                        >
                            <div className="max-w-3xl mx-auto md:flex items-center pb-10 pt-8">

                                <img className="md:w-1/2" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/25.png" alt="Two drinks, on the left, looks life a small cappuccino and on the right like a big one, like a latte." />

                                <div className="text-center md:text-left">
                                    <p className="text-[1.188rem] md:text-2xl font-semibold my-6 px-6">
                                        Customize your drink
                                    </p>

                                    <p className="text-small md:text-base text-center font-medium px-7">
                                        Make your drink just right with an extra espresso shot or a dash of your favorite syrup.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 1 && (
                        <div
                            id="favorite2"
                            className=" bg-[#D4E9E2] shadow-[0_-1px_5px_rgba(0,0,0,0.2)]"
                            aria-live="polite"
                        >
                            <div className="max-w-3xl mx-auto md:flex items-center pb-10 pt-8">

                                <img className="md:w-1/2" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="One cup of iced coffee on the left, one glass of looks like tea on the middle and a croissant on the right." />

                                <div className="text-center md:text-left">
                                    <p className="text-[1.188rem] md:text-2xl font-semibold my-6 px-3 px-6">
                                        Brewed hot or iced coffee or tea, bakery item, packaged snack and more
                                    </p>

                                    <p className="text-small md:text-base font-medium px-7">
                                        Treat yourself to an iced coffee, buttery croissant, bag of chips and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 2 && (
                        <div
                            id="favorite3"
                            className=" bg-[#D4E9E2] shadow-[0_-1px_5px_rgba(0,0,0,0.2)]"
                            aria-live="polite"
                        >
                            <div className="max-w-3xl mx-auto md:flex items-center pb-10 pt-8">

                                <img className="md:w-1/2" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="Glass of coffee with foam on top, on the left side, one glass of latte on the middle and a sandwich on the right." />

                                <div className="text-center md:text-left">
                                    <p className="text-[1.188rem] md:text-2xl font-semibold my-6 px-6">
                                        Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
                                    </p>

                                    <p className="text-small md:text-base font-medium px-6">
                                        Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 3 && (
                        <div
                            id="favorite4"
                            className="bg-[#D4E9E2] shadow-[0_-1px_5px_rgba(0,0,0,0.2)]"
                            aria-live="polite"
                        >
                            <div className="max-w-3xl mx-auto md:flex items-center pb-10 pt-8">

                                <img className="md:w-1/2" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png" alt="Sliced apple, red grapes, 3 eggs and cookies with cheese on a tray on the left and a packaging with coffee on the right side." />

                                <div className="text-center md:text-left">
                                    <p className="text-[1.188rem] md:text-2xl font-semibold text-center md:text-left my-6 px-6">
                                        Sandwich, protein box or at-home coffee
                                    </p>

                                    <p className="text-small md:text-base font-medium px-6">
                                        Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 4 && (
                        <div
                            id="favorite5"
                            className=" bg-[#D4E9E2] shadow-[0_-1px_5px_rgba(0,0,0,0.2)]"
                            aria-live="polite"
                        >
                            <div className="max-w-3xl mx-auto md:flex items-center pb-10 pt-8">

                                <img className="md:w-1/2" src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="White cup on the left and a green Stabucks cup with a straw on the right." />

                                <div className="text-center md:text-left">
                                    <p className="text-[1.188rem] md:text-2xl font-semibold my-6 px-6">
                                        Select Starbucks® merchandise
                                    </p>

                                    <p className="text-small md:text-base font-medium px-6">
                                        Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl md:text-[1.75rem] leading-[2.075rem] text-center font-semibold">Endless Extras</h2>

                    <p className="text-sm md:text-base text-center my-5 font-medium px-4 md:max-w-[53ch] md:mx-auto">
                        Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
                    </p>

                    <div className="md:grid md:grid-cols-3 max-w-[95rem] mx-auto">
                        {/* 1ª */}
                        <div className="flex md:flex-col gap-4 items-start md:items-center mx-4 my-12">
                            <img
                                src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
                                alt="Drink and a hamburguer."
                                width={112}
                            />

                            <div className="flex flex-col md:text-center gap-5">
                                <h3 className="font-semibold md:text-[1.188rem] leading-6">Fun freebies</h3>

                                <p className="font-medium text-sm md:text-base md:max-w-[20ch] max-md:mr-6">
                                    Not only can you earn free food, drinks and more, look forward to a birthday treat on us.
                                </p>

                                <span className="cursor-pointer underline max-md:self-start text-[#396c41] font-semibold hover:no-underline">
                                    Learn more
                                </span>
                            </div>
                        </div>

                        {/* 2ª */}
                        <div className="flex md:flex-col gap-4 items-start md:items-center mx-4 my-12">
                            <img
                                src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
                                alt="A hand using an eletronic that looks like an iPad."
                                width={112}
                            />

                            <div className="flex flex-col md:text-center gap-6">
                                <h3 className="font-semibold md:text-[1.188rem] leading-6">Order & pay ahead</h3>

                                <p className="font-medium text-sm md:text-base md:max-w-[20ch] max-md:mr-6">
                                    Master the art of ordering ahead with saved favorites and payment methods
                                </p>

                                <span className="cursor-pointer underline max-md:self-start text-[#396c41] font-semibold hover:no-underline">
                                    Learn more
                                </span>
                            </div>
                        </div>

                        {/* 3ª */}
                        <div className="flex md:flex-col gap-4 items-start md:items-center mx-4 my-12">
                            <img
                                src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
                                alt="Drink in a yellow cup with a lot of foam on top and a star looking like a candle."
                                width={112}
                            />

                            <div className="flex flex-col md:text-center gap-6">
                                <h3 className="font-semibold md:text-[1.188rem] leading-6">Get to free faster</h3>

                                <p className="font-medium text-sm md:text-base md:max-w-[20ch] max-md:mr-6">
                                    Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                                </p>

                                <span className="cursor-pointer underline max-md:self-start text-[#396c41] font-semibold hover:no-underline">
                                    Learn more
                                </span>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="bg-[#f2f0eb]">
                    <div className="mx-auto max-w-[95rem] py-12 px-4 md:px-6 lg:px-10">
                        <h2 className="text-2xl md:text-[1.75rem] leading-[2.075rem] font-semibold text-center pt-6 pb-4">Cash or card, you earn Stars</h2>

                        <p className="text-sm md:text-base font-medium text-center mb-16">
                            No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
                        </p>

                        {/* 1ª */}
                        <div className="md:grid lg:grid-cols-[1fr_4fr] border-b pb-4 border-black/10">
                            <div>
                                <p className="text-[1.188rem] leading-6 md:text-2xl font-semibold">
                                    1 &#9733; per dollar
                                </p>

                                <p className="text-sm md:text-base font-medium mb-8">
                                    Pay as you go
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-2">
                                <div className="flex gap-4 max-md:mb-8">

                                    <img
                                        className="md:self-start"
                                        src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
                                        alt="Card swiping machine with a card insert in it and QRcode appearing on screen."
                                        width={112}
                                    />

                                    <div className="flex flex-col gap-6">
                                        <p className="md:text-[1.188rem] leading-6 font-semibold">
                                            Scan and pay separately
                                        </p>

                                        <p className="text-sm md:text-base font-medium">
                                            Use cash or credit/debit card at the register.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-8">
                                    <img
                                        className="md:self-start"
                                        src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
                                        alt="Card swiping machine with a card appearing on screen."
                                        width={112}
                                    />

                                    <div className="flex flex-col gap-6">
                                        <p className="md:text-[1.188re6] leading-6 font-semibold">
                                            Save payment in the app
                                        </p>

                                        <p className="text-sm md:text-base font-medium">
                                            Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2ª */}
                        <div className="md: grid lg:grid-cols-[1fr_4fr] pt-[2.5rem]">
                            <div>
                                <p className="text-[1.188rem] leading-6 md:text-2xl font-semibold">
                                    2 &#9733; per dollar
                                </p>

                                <p className="text-sm md:text-base font-medium mb-8">
                                    Add funds in the app
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-2">
                                <div className="flex gap-4 mb-8">
                                    <img
                                        className="md:self-start"
                                        src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
                                        alt="Card simbolizing a money bill."
                                        width={112}
                                    />

                                    <div className="flex flex-col gap-6">
                                        <p className="md:text-[1.188rem] leading-6 font-semibold">

                                            Preload
                                        </p>

                                        <p className="text-sm md:text-base font-medium">
                                            To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-8">
                                    <img
                                        className="md:self-start"
                                        src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
                                        alt="Card in green and white color."
                                        width={112}
                                    />

                                    <div className="flex flex-col gap-6">
                                        <p className="md:text-[1.188re6] leading-6 font-semibold">
                                            Register your gift card
                                        </p>

                                        <p className="text-sm md:text-base font-medium">
                                            Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                
            </main>
        </>
    )
}
