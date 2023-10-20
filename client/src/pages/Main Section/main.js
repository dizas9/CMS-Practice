import "./main.css";
function Main() {
  const welcomelink = [
    {
      name: "See User List",
      src: process.env.PUBLIC_URL + "/Images & Icons/goto-icon-round.png",
    },
    {
      name: "See All Email",
      src: process.env.PUBLIC_URL + "/Images & Icons/goto-icon-round.png",
    },
  ];
  return (
    <>
      <div className="child-content">
        <div className="header">
          <div className="goto-link">
            <div className="goto-link-text">
              <a href="#">Goto Website</a>
            </div>
            <div className="goto-icon">
              <img
                src={
                  process.env.PUBLIC_URL + "/Images & Icons/goto-icon.png"
                }
                alt="icon"
              />
            </div>
          </div>
          <div className="account-section">
            <div className="login-section">
              <a href="#">Login</a>
            </div>
            <div className="register-section">
              <a href="#">Register</a>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="welcome-section">
            <p>Welcome to Dashboard</p>
            {welcomelink.map((item) => {
              return (
                <>
                  <div className="list-link">
                    <img src={item.src} alt="icon" />
                    <a href="#">{item.name}</a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
