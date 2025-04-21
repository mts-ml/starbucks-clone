import { Link } from "react-router-dom"


export const Rewards: React.FC = () => {
    return (
        <>
            <div className=" bg-[#1e3932] text-white">
                <div className="sticky mx-auto max-w-[95rem] flex justify-between items-center h-12 px-6 text-[0.813rem] md:text-sm">
                    <p className="font-semibold uppercase md:mx-16 min1520:mx-0">Starbucks® Rewards</p>

                    <button className="md:hidden border rounded-full px-4 py-1 font-semibold">Join in the app</button>
                </div>
            </div>

            <section className="flex flex-col items-center py-7 gap-4 mx-auto max-w-[95rem] bg-[#fbf5e8]">
                <h1 className="font-semibold max-w-[15ch] text-[#1E3932] text-center text-[1.75rem] md:text-[2.25rem] lg:text-[3.125rem] ">
                    It’s a great day for free coffee
                </h1>

                <p className="font-medium text-[#1E3932]">Sign up and start enjoying the perks of Starbucks® Rewards.</p>

                <button className="bg-[#03784D] text-white border rounded-full px-4 py-1 font-semibold">Join in the app</button>

                <Link to="#" className="underline hover:no-underline">Or join online</Link>
            </section>
        </>
    )
}
