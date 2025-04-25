import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/images/starbuck.png'


export const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const location = useLocation()
    const menuPage = location.pathname === "/menu"
    const giftCardsPage = location.pathname === "/gift-cards"

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }, [toggleMenu])

    useEffect(() => {
        setToggleMenu(false)
    },[location.pathname])


    return (
        <>
            <header className="relative z-30 w-full shadow">
                <div className={`${menuPage ? "" : "mx-auto max-w-[95rem]"} ${giftCardsPage ? "mx-0 max-w-full" : ""}`}>
                    <nav aria-label='Main navigation'>

                        <div className='relative min803:hidden z-50 h-[72px] px-4 md:px-6 flex items-center justify-between xl:mx-0'>
                            <Link to="/">
                                <img
                                    src={logo}
                                    className="w-[40px] md:w-[50px] min803:hidden"
                                    aria-hidden="true"
                                    alt="Starbucks logo"
                                />
                            </Link>

                            {/* HAMBURGUER ITEM */}
                            <div className='px-[7px] py-[2px] hover:bg-black/10 hover:rounded-full hover:shadow-sm transition-all duration-500 ease-out'>
                                <button
                                    className={`relative w-6 h-6 min803:hidden ${toggleMenu ? "toggle-btn" : ""}`}
                                    type="button"
                                    aria-label={toggleMenu ? "Close menu" : "Open menu"}
                                    aria-expanded={toggleMenu ? "true" : "false"}
                                    onClick={handleToggleMenu}
                                >
                                    <div className="absolute top-4 -mt-0.5  bg-black w-6 h-[2px] rounded opacity-60 transition-all duration-500    before:absolute before:content-[''] before:bg-black before:w-6 before:h-[2px] before:rounded  before:-translate-x-3 before:-translate-y-[6px] before:transition-all before:duration-500
                                after:absolute after:content-[''] after:bg-black after:w-6 after:h-[2px] after:rounded after:-translate-x-3 after:translate-y-[6px] after:transition-all after:duration-500"></div>
                                </button>
                            </div>
                        </div>

                        {/* MENU */}
                        <div className={`min803:hidden fixed top-[72px] z-20 h-full transition-all duration-1000 ease-in-out bg-white w-4/5 border-t-2 border-black/10  ${toggleMenu ? 'right-0' : '-right-[700px]'}`}>

                            <ul className='flex flex-col my-8 mx-8 pb-8 gap-6 border-b-2 border-black/10 font-medium text-[1.188rem]'>
                                <li><Link to="menu">Menu</Link></li>
                                <li><Link to="rewards">Rewards</Link></li>
                                <li><Link to="gift-cards">Gift Cards</Link></li>
                            </ul>


                            <div className='md:flex md:items-center gap-12'>

                                <div className='flex items-center px-6 gap-4'>
                                    <button className='border border-black border-solid font-semibold rounded-3xl text-sm px-3.5 py-1 hover:bg-black/10 transition-colors duration-150 ease-in-out' type='button'>
                                        Sign in
                                    </button>

                                    <button className='border border-black border-solid bg-black text-white hover:bg-black/70 font-semibold rounded-3xl text-sm px-3.5 py-1.5 transition-colors duration-150 ease-in-out' type='button'>
                                        Join now
                                    </button>
                                </div>
                            </div>

                            <button type='button' className='flex align-items px-6 gap-1.5 text-sm font-semibold hover:text-[#08754A] mt-5'>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{ width: 24, height: 24, overflow: 'visible', fill: 'currentColor' }}
                                    viewBox="0 0 24 24">
                                    <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                                </svg>
                                Find a store
                            </button>
                        </div>

                        {/* HEADER ON LARGE SCREEN */}
                        <div className={`relative hidden min803:flex min803:items-center justify-between h-[83px] lg:h-[99px] px-6 ${menuPage ? "lg:ml-[4.2rem] lg:px-10" : "lg:px-8"} ${giftCardsPage ? "md:pl-[6.188rem] lg:pr-10 lg:pl-[8.188rem]" : ""} `}>

                            <div className='md:flex md:items-center'>
                                <Link to="/" className={`${giftCardsPage ? "" : "min1702:absolute min1702:left-[-55px]"} ${menuPage ? "lg:absolute left-[-30px] min1702:left-[-30px]" : ""} ${giftCardsPage ? "lg:absolute left-[50px]" : ""}`}>
                                    <img
                                        src={logo}
                                        className="w-[40px] md:w-[50px]"
                                        aria-hidden="true"
                                        alt="Starbucks logo"
                                    />
                                </Link>

                                <ul className='flex min1702:ml-0 font-bold text-sm tracking-widest cursor-pointer'>
                                    <li className={`ml-6 uppercase hover:text-[#08754A] ${menuPage ? "" : "min1702:ml-0"} ${giftCardsPage ? "lg:ml-0" : ""}`}>
                                        <NavLink
                                            to="menu"
                                            className={({ isActive }) => isActive ? "relative w-full no-underline before:absolute before:content-[''] before:top-[45px] lg:before:top-[52px] before:left-0 before:h-[6px] before:w-[100%] before:bg-[#00754a]" : ""}
                                        >
                                            menu
                                        </NavLink>
                                    </li>

                                    <li className='ml-6 uppercase hover:text-[#08754A]'>
                                        <NavLink
                                            to="rewards"
                                            className={({ isActive }) => isActive ? "relative w-full no-underline before:absolute before:content-[''] before:top-[45px] lg:before:top-[52px] before:left-0 before:h-[6px] before:w-[100%] before:bg-[#00754a]" : ""}
                                        >
                                            rewards
                                        </NavLink>
                                    </li>

                                    <li className='ml-6 uppercase hover:text-[#08754A]'>
                                        <NavLink
                                            to="gift-cards"
                                            className={({ isActive }) => isActive ? "relative w-full no-underline before:absolute before:content-[''] before:top-[45px] lg:before:top-[52px] before:left-0 before:h-[6px] before:w-[100%] before:bg-[#00754a]" : ""}
                                        >
                                            gift cards
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <div className='md:flex md:items-center gap-12'>
                                <button type='button' className='flex align-items gap-1.5 text-sm font-semibold hover:text-[#08754A]'>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        preserveAspectRatio="xMidYMid meet"
                                        style={{ width: 24, height: 24, overflow: 'visible', fill: 'currentColor' }}
                                        viewBox="0 0 24 24">
                                        <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                                    </svg>
                                    Find a store
                                </button>

                                <div className='flex items-center gap-4'>
                                    <button className='border border-black border-solid font-semibold rounded-3xl text-sm px-3.5 py-1.5 hover:bg-black/10 transition-colors duration-150 ease-in-out' type='button'>
                                        Sign in
                                    </button>

                                    <button className='border border-black border-solid bg-black text-white hover:bg-black/70 font-semibold rounded-3xl text-sm px-3.5 py-1.5 transition-colors duration-150 ease-in-out' type='button'>
                                        Join now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {toggleMenu && <div className='min803:hidden fixed inset-0 z-10 top-[75px] bg-black opacity-50'></div>}
        </>
    )
}
