export const Previous: React.FC = () => {
    return (
        <main className="mx-4 h-[58.5rem]">
            <h1 className="text-2xl font-bold px-4 my-4">Previous</h1>

            <img
                className="block mt-10"
                src="https://www.starbucks.com/weblx/images/moon-phases.gif"
                alt="Animated illustration shows phases of the moon"
            />

            <h2 className="mt-4 font-semibold text-xl sm:text-2xl md:text-[1.75rem] leading-[2.425rem]">
                When history repeats itself
            </h2>

            <p className="my-4 sm:text-[1.188rem] sm:leading-[1.781rem] text-[#6B6B6B] font-medium">
                Previous orders will appear here to quickly order again.
            </p>

            <div className='flex items-center gap-4 pt-2'>
                <button className='border border-black border-solid font-semibold rounded-3xl text-sm px-4 py-[7px] hover:bg-black/10 transition-colors duration-150 ease-in-out' type='button'>
                    Sign in
                </button>

                <button className='py-[7px] px-4 border border-black border-solid bg-black text-white hover:bg-black/70 font-semibold rounded-3xl text-sm transition-colors duration-150 ease-in-out' type='button'>
                    Join now
                </button>
            </div>
        </main>
    )
}
