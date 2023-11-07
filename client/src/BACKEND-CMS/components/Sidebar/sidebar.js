import { NavLink } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  const sideNavigation = [
    {
      name: "content Control",
      href: "/content-control",
      src:"/Images/img-icon.png",
    },
    {
      name: "Database Control",
      href: "/database-control",
      src:"/Images/DB.png",
    },
    {
      name: "Settings",
      href: "/settings",
      src:"/Images/settings.png",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <NavLink to={'/'}>
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "/Images/logo.png"}
              alt=""
            />
          </div>
        </NavLink>

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
