import { NavLink, Outlet } from "react-router-dom"


export const MenuLayout: React.FC = () => {
    return (
        <>
            <nav className="flex items-center px-4 md:pl-[6.188rem] lg:pl-[8.188rem] md:pr-6 lg:pr-10 bg-[#f9f9f9] h-[51.5px] border-b border-t border-black/20 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
                <ul className="flex gap-4 sm:gap-8 text-[0.813rem] font-medium">
                    <li>
                        <NavLink to="."
                            end
                            className={({ isActive }) => `${isActive ? "link-underline" : ""}`}
                        >
                            Menu
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="featured"
                            end
                            className={({ isActive }) => `${isActive ? "link-underline" : ""}`}
                        >
                            Featured
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="previous"
                            end
                            className={({ isActive }) => `${isActive ? "link-underline" : ""}`}
                        >
                            Previous
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="favorites"
                            end
                            className={({ isActive }) => `${isActive ? "link-underline" : ""}`}
                        >
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </>
    )
}
