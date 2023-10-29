import "./header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="goto-link">
          <div className="goto-link-text">
            <a href="#">Goto Website</a>
          </div>
          <div className="goto-icon">
            <img
              src={process.env.PUBLIC_URL + "/Images & Icons/goto-icon.png"}
              alt=""
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
    </>
  );
}
export default Header;
