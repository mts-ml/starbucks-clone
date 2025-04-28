export const Favorites: React.FC = () => {
    return (
        <main className="mx-4 md:ml-[6.188rem] lg:ml-[8.188rem] h-[58.5rem]">
            <h1 className="text-2xl font-extrabold max-md:px-4 my-4 md:my-10">Favorites</h1>

            <img
                className="block mt-10 w-[12.5rem]"
                src="https://www.starbucks.com/weblx/images/fav-tapes.png"
                alt="Illustration of well-used vintage mix tapes."
            />

            <h2 className="mt-4 font-semibold text-xl sm:text-2xl md:text-[1.75rem] leading-[2.425rem] md:max-w-[15ch]">
                Save your favorite mixes
            </h2>

            <p className="my-4 sm:text-[1.188rem] sm:leading-[1.781rem] text-[#6B6B6B] font-medium max-w-[30ch] md:max-w-[26ch]">
                Use the heart to save customizations. Your favorites will appear here to order again.
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
