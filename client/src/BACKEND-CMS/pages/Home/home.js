import { NavLink } from "react-router-dom";
import "./home.css";
function Home() {
  const linkList = [
    {
      name: "See All User",
      href: "/all-user",
    },
    {
      name: "See All Collection",
      href: "/all-collection",
    },
  ];
  return (
    <>
      <div class="main">
        <div class="welcome-section">
          <p>Welcome to Dashboard</p>
          {linkList.map((item) => {
            return (
              <NavLink to={item.href}>
                <div class="list-link">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/Images & Icons/goto-icon-round.png"
                    }
                    alt="icon"
                  />
                  <a href="#">{item.name}</a>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
