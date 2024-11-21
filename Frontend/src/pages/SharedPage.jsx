import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

function Home() {
return (
    <>
        <Navbar />
        <div style={{ display: "flex" }}>
            <div className="flex flex-row gap-5"><Sidebar/></div>
            <div><Outlet /></div>
        </div>
    </>
)
}
export default Home