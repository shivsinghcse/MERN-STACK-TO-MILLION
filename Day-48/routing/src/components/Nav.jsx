import { Link } from "react-router";
const Nav = () => {
  return (
    <>
      <div className=" py-5 border-2 flex gap-4 justify-center mb-5 text-xl font-bold text-green-700">
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default Nav;
