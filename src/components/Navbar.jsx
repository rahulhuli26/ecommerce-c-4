import { Outlet, Link } from "react-router-dom";



export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20, display: "flex", margin: "auto", alignItems: "center", justifyContent: "space-evenly" }}>
      <Link style={{color: "white", textDecoration: "none"}} className="links" to={"/"}>Home</Link>
      <Link style={{color: "white", textDecoration: "none"}} className="links" to={"/about"}>About</Link>
      <Link style={{color: "white", textDecoration: "none"}} className="links" to={"/products"}>Products</Link>
      <Link style={{color: "white", textDecoration: "none"}} className="links" to={"/products/men"}>Men</Link>
      <Link style={{color: "white", textDecoration: "none"}} className="links" to={"/products/women"}>Women</Link>
      <Link style={{color: "white", textDecoration: "none"}} className="links" to={"/products/kids"}>Kids</Link>
      <Link style={{color: "white", textDecoration: "none"}} className="links" to={"/products/homedecor"}>Home decor</Link>
    </nav>
  );
};
