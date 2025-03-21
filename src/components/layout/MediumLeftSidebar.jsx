import LeftSidebarItem from "../ui/LeftSidebarItem";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import ProfilePicture from "../ui/ProfilePicture";

function MediumLeftSidebar() {
  return (
    <div className="left-sidebar medium">
      <ProfilePicture />
      <LeftSidebarItem icon={FaHome} active={true} />
      <LeftSidebarItem icon={FaSearch} />
      <LeftSidebarItem icon={FaHeart} />
      <LeftSidebarItem icon={IoMdNotificationsOutline} />
    </div>
  );
}

export default MediumLeftSidebar;
