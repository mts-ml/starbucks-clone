import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import hamburguer from '../assets/images/hamburguer.svg'
import logo from '../assets/images/starbuck.png'


export const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const location = useLocation()
    const menuPage = location.pathname === "/menu/"

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




    return (
        <header className="relative z-30 w-full shadow pb-0.5">
            <div className={`${menuPage ? "" : "mx-auto max-w-[91rem]"}`}>
                <nav aria-label='Main navigation'>
                    <div className='flex items-center justify-between my-4 mx-6 xl:mx-0'>
                        <Link to="/">
                            <img
                                src={logo}
                                className="w-[40px] md:w-[50px] min803:hidden"
                                aria-hidden="true"
                                alt="Starbucks logo"
                            />
                        </Link>

                        <button
                            className='z-30 min803:hidden hover:bg-black/5 hover:rounded-full p-1 transition-all duration-200 ease-out hover:scale-105 hover:shadow-sm'
                            type="button"
                            aria-label='Open menu'
                            aria-expanded="false"
                            onClick={handleToggleMenu}
                        >
                            <img className='opacity-60' src={hamburguer} width={26} alt="" />
                        </button>
                    </div>

                    <div className={`min803:hidden fixed top-0 z-20 px-7 pt-32  h-full transition-all duration-1000 ease-in-out bg-white w-4/5 ${toggleMenu ? 'right-0' : '-right-[700px]'}
                        
                        `}>

                        <hr className='absolute mt-[1.1rem] md:mt-[1.6rem] top-14 w-full left-0 border' />

                        <ul className='flex flex-col gap-6 font-medium text-[1.188rem]'>
                            <li><Link to="menu">Menu</Link></li>
                            <li>Rewards</li>
                            <li>Gift Cards</li>
                        </ul>

                        <hr className='border mb-6 mt-8' />

                        <div className='md:flex md:items-center gap-12'>

                            <div className='flex items-center gap-4'>
                                <button className='border border-black border-solid font-semibold rounded-3xl text-sm px-3.5 py-1 hover:bg-black/10 transition-colors duration-150 ease-in-out' type='button'>
                                    Sign in
                                </button>

                                <button className='border border-black border-solid bg-black text-white hover:bg-black/70 font-semibold rounded-3xl text-sm px-3.5 py-1.5 transition-colors duration-150 ease-in-out' type='button'>
                                    Join now
                                </button>
                            </div>

                            <button type='button' className='flex align-items gap-1.5 text-sm font-semibold hover:text-[#08754A] mt-5'>
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
                    </div>

                    {toggleMenu && <div className='min803:hidden fixed z-10 inset-0 bg-black opacity-50'></div>}

                    <div className={`relative hidden min803:flex min803:items-center justify-between md:m-4
                    ${menuPage ? "pl-[5.1rem] min1702:pl-[6.1rem] lg:pr-9" : "xl:mx-0 "}`}>
                        <div className='md:flex md:items-center'>
                            <Link to="/" className={`min1702:absolute min1702:left-[-85px] ${menuPage ? "absolute left-[20px] min1702:left-[20px]" : ""}`}>
                                <img
                                    src={logo}
                                    className="w-[40px] md:w-[50px]"
                                    aria-hidden="true"
                                    alt="Starbucks logo"
                                />
                            </Link>

                            <ul className='flex min1702:ml-0 m-4 gap-4 font-bold text-sm tracking-widest cursor-pointer'>
                                <li className='uppercase hover:text-[#08754A]'>menu</li>
                                <li className='uppercase hover:text-[#08754A]'>rewards</li>
                                <li className='uppercase hover:text-[#08754A]'>gift cards</li>
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
    )
}
