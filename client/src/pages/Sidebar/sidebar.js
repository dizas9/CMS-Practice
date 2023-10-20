import "./sidebar.css";
function Sidebar() {
  const navigation = [
    {
      name: "Layout Control Pannel",
      href: "/layout-control",
      src: process.env.PUBLIC_URL + "/Images & Icons/img-icon.png",
    },
    {
      name: "Database Management",
      href: "/database-control",
      src: process.env.PUBLIC_URL + "/Images & Icons/DB.png",
    },
    {
      name: "Settings",
      href: "/settings",
      src: process.env.PUBLIC_URL + "/Images & Icons/settings.png",
    },
  ];

  const sub_list = [
    { name: "All User", href: "/all-user" },
    { name: "Collections", href: "/collections" },
    { name: "All Email", href: "/all-email" },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/Images & Icons/logo.png"}
            alt="Logo"
          />
        </div>

        {navigation.map((item) => {
          return (
            <div className="nav-list">
              <div className="nav-link">
                <div className="nav-icon">
                  <img src={item.src} alt="icon" />
                </div>
                <div className="nav-li">
                  <a href={item.href}>{item.name}</a>
                </div>
              </div>
              {sub_list.map((item) => {
                return (
                  <>
                    <div className="sub-list">
                      <a href={item.href}>{item.name}</a>
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Sidebar;
