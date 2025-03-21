import LeftSidebarItem from "../ui/LeftSidebarItem";
import Logo from "../ui/Logo";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
  return (
      <nav className="left-sidebar">
        <Logo />
        <LeftSidebarItem icon={FaHome} label="Home" active={true} />
        <LeftSidebarItem icon={FaSearch} label="Search" />
        <LeftSidebarItem icon={FaHeart} label="Liked" />
        <LeftSidebarItem icon={IoMdNotificationsOutline} label="Notification" />
      </nav>
  );
}

export default Navbar;
