import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <header className="text-gray-600 body-font bg-slate-700">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/all-project" className="mr-5 hover:text-gray-900">Projects</Link>
          <Link to="/review-form" className="mr-5 hover:text-gray-900">Review</Link>
          <Link to="/certificate" className="mr-5 hover:text-gray-900">Achievements</Link>
        </nav>
        
      </div>
    </header>
  );
};

export default MobileNav;
