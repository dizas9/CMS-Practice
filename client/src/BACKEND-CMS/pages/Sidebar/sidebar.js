import { NavLink } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  const sideNavigation = [
    {
      name: "content Control",
      href: "/content-control",
      src: process.env.PUBLIC_URL + "/Images & Icons/img-icon.png",
    },
    {
      name: "Database Control",
      href: "/database-control",
      src: process.env.PUBLIC_URL + "/Images & Icons/DB.png",
    },
    {
      name: "Settings",
      href: "/settings",
      src: process.env.PUBLIC_URL + "/Images & Icons/settings.png",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/Images & Icons/logo.png"} alt="" />
        </div>

        {sideNavigation.map((item) => {
          return (
            <nav className="nav-list">
              <NavLink to={item.href} style={{ textDecoration: "none" }}>
                <div className="nav-link" key={item.href}>
                  <div className="nav-icon">
                    <img src={item.src} alt="icon" />
                  </div>
                  <div className="nav-li">
                    <a href={item.href}>{item.name}</a>
                  </div>
                </div>
              </NavLink>
            </nav>
          );
        })}
      </div>
    </>
  );
}
export default Sidebar;
