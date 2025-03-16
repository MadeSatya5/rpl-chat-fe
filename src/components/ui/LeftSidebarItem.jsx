function LeftSidebarItem({ icon: Icon, label, active }) {
  return (
    <div className={`left-sidebar-item ${active ? "active" : ""}`}>
      {Icon && <Icon />}
      <h4>{label}</h4>
    </div>
  );
}

export default LeftSidebarItem;
