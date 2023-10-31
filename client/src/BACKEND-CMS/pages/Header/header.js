import { useState } from "react";
import "./header.css";
import Modal from "../../components/Register Modal/registerModal";
function Header() {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  function openRegModal() {
    setRegisterModalOpen(true);
  }
  function closeRegModal() {
    setRegisterModalOpen(false);
  }
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
            <button onClick={openRegModal}>Register</button>
          </div>
        </div>
      </div>
      {/* <div className="overlay"></div> */}
      <Modal isOpen={isRegisterModalOpen} onClose={closeRegModal} />
    </>
  );
}
export default Header;
