import { Outlet } from "react-router-dom"
import NavBarComponent from "../components/NavBarComponent"

const Layout = () => {
    return (
        <>
            <header>
                <NavBarComponent />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout