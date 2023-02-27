import { NavLink, Outlet } from "react-router-dom";

const HelpLayouts = () => {
  return (
    <>
      <h1 className="m-10"> Website Help</h1>
      <p className="m-20">
        The Lorm alphabet is a method of tactile signing named after Hieronymus
        Lorm, who developed it in the late 19th century. Letters are spelled by
        tapping or stroking different parts of the listener's hand. The Lorm
        alphabet is mostly used in German-speaking countries, the Netherlands,
        Czech Republic, Poland and Georgia. The Lorm alphabet is a method of
        tactile signing named after Hieronymus Lorm, who developed it in the
        late 19th century. Letters are spelled by tapping or stroking different
        parts of the listener's hand. The Lorm alphabet is mostly used in
        German-speaking countries, the Netherlands, Czech Republic, Poland and
        Georgia.
      </p>
      <nav className="m-10">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          <NavLink to="faq">View the FAQ</NavLink>
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
         <NavLink to="contact">Contact Us</NavLink>
        </button>
        
        
      </nav>

      <Outlet />
    </>
  );
};

export default HelpLayouts;
