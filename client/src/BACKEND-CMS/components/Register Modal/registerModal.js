import React, { useState } from "react";
import "./registerModal.css";
import axios from "axios";
function Modal({ isOpen, onClose }) {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    re_password: "",
    phone: "",
    email: "",
    img: "",
  });
  // 'handleChange' function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //handle-Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/submit", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        console.log("Ok");
      } else {
        console.error("Not Ok");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="overlay"></div>
      <div id="popup" class="popup-content">
        <form class="register-form-modal" onSubmit={handleSubmit}>
          <div class="form-info-section">
            <div class="general-info-section">
              <h3>General Information</h3>
              <div class="gen-info-field">
                <div>
                  <label>Your Name</label>
                  <input type="text" name="name" onChange={handleChange} />
                </div>
                <div>
                  <label>Username</label>
                  <input type="text" name="username" onChange={handleChange} />
                </div>
                <div>
                  <label>Password</label>
                  <input type="text" name="password" onChange={handleChange} />
                </div>
                <div>
                  <label>Re-Type Password</label>
                  <input
                    type="text"
                    name="re_password"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="text" name="phone" onChange={handleChange} />
                </div>
                <div>
                  <label>Email</label>
                  <input type="text" name="email" onChange={handleChange} />
                </div>
                <div>
                  <label>Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="img"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button onClick={onClose} class="close-button">
              Close
            </button>
            <button class="submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;
