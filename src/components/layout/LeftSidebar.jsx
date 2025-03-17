import LeftSidebarItem from "../ui/LeftSidebarItem";
import Logo from "../ui/Logo"
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
    return (
        <div className="left-sidebar">
            <Logo />
            <LeftSidebarItem icon={FaHome} label="Home" active={true}/>
            <LeftSidebarItem icon={FaSearch} label="Search"/>
            <LeftSidebarItem icon={FaHeart} label="Liked"/>
            <LeftSidebarItem icon={IoMdNotificationsOutline} label="Notification"/>
        </div>
    )
}

export default Navbar
