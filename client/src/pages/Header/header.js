import "./header.css";
function Header() {
  return (
    <>
      <div class="header">
        <div class="goto-link">
          <div class="goto-link-text">
            <a href="#">Goto Website</a>
          </div>
          <div class="goto-icon">
            <img src="../Image & Icon/Logo & Icon/goto-icon.png" alt="" />
          </div>
        </div>
        <div class="account-section">
          <div class="login-section">
            <a href="#">Login</a>
          </div>
          <div class="register-section">
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
