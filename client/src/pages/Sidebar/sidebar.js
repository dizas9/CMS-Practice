import { NavLink } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  const sideNavigation = [
    {
      name: "test",
      href: "/hello",
      src: "icon",
    },
    {
      name: "test2",
      href: "/hello2",
      src: "icon",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src="../Image & Icon/Logo & Icon/logo.png" alt="" />
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
