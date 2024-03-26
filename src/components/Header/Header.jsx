import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li className="flex">
            <NavLink to="/" className={({isActive }) =>
                isActive ? 'text-[#23BE0A] font-bold' : 'font-bold'
            }>Home</NavLink>
        </li>
        <li className="flex">
            <NavLink to="/listed" className={({isActive }) =>
                isActive ? 'text-[#23BE0A] font-bold' : 'font-bold'
            }>Listed Books</NavLink>
        </li>
        <li className="flex">
            <NavLink to="/pages" className={({isActive }) =>
                isActive ? 'text-[#23BE0A] font-bold' : 'font-bold'
            }>Pages to Read</NavLink>
        </li>
        <li className="flex">
            <NavLink to="/errorPage" className={({isActive }) =>
                isActive ? 'text-[#23BE0A] font-bold' : 'font-bold'
            }>Link</NavLink>
        </li>
    </>;

    return (
        <div className="navbar bg-base-100 container mx-auto p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn bg-[#23BE0A]">Sign In</a>
                <a className="btn bg-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;
