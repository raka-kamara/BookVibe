import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[554px] rounded-xl">
        <div className="md:flex px-16 md:px-0 md:hero-content"> 
         <div>
            <h1 className="text-xl md:text-5xl text-center md:text-start font-bold md:w-[524px]">Books to freshen up your bookshelf</h1>
            <NavLink to="/listed" className={({isActive }) =>
                isActive ? 'text-[#23BE0A] font-bold' : 'font-bold'
            }><button className="btn bg-[#23BE0A] text-white my-10">View The List</button></NavLink> 
          </div>

          <img src="https://i.ibb.co/nc7sFvt/Gatsby.jpg" className="md:max-w-sm rounded-lg shadow-2xl" />
        
        </div>
      </div>
    );
};

export default Banner;