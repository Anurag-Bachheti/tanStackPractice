import { Outlet, NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
    return (
        <>
            <div>
                <Header />
                <nav className="navbar" >
                    <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                </nav>
                <nav>
                    <NavLink to="/old" className={({ isActive }) => (isActive ? "active" : "")}>FetchOld</NavLink>
                </nav>
                <nav>
                    <NavLink to="/new" className={({ isActive }) => (isActive ? "active" : "")}>FetchNew</NavLink>
                </nav>
            </div>

            <main className="page-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout;