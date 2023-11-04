import React from "react";
import "./registerModal.css";
function Modal({ isOpen, onClose }) {
  const generalInformationField = [
    {
      labelName: "First Name",
    },
    {
      labelName: "Last Name",
    },
    {
      labelName: "User Name",
    },
    {
      labelName: "Password",
    },
    {
      labelName: "Re-Type Pasword",
    },
    {
      labelName: "Email",
    },
    {
      labelName: "Phone Number",
    },
  ];

  const socialIcon = [
    { src: process.env.PUBLIC_URL + "/Images & Icons/facebook-icon.png" },
    { src: process.env.PUBLIC_URL + "/Images & Icons/linkedin-icon.png" },
  ];

  const academicInformationField = [
    { labelName: "ID" },
    { labelName: "Batch" },
    { labelName: "Passing Year" },
    { labelName: "Professional Position" },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay"></div>
      <div id="popup" class="popup-content">
        <form class="register-form-modal">
          <div class="form-profile-section">
            <div class="profile-image-section">
              <img
                src={process.env.PUBLIC_URL + "/Images & Icons/demo.png"}
                alt="icon"
              />
              <button>Upload</button>
            </div>
            <div class="profile-social-section">
              <div class="div1">Social Link</div>
              {socialIcon.map((item) => {
                return (
                  <>
                    <div class="div2">
                      <img src={item.src} alt="icon" />
                      <input type="text" />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div class="form-info-section">
            <div class="general-info-section">
              <h3>General Information</h3>
              <div class="gen-info-field">
                {generalInformationField.map((item) => {
                  return (
                    <>
                      <div>
                        <label for="">{item.labelName}</label>
                        <input type="text" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div class="academic-info-section">
              <h3>Academic Information</h3>
              <div class="aca-info-field">
                <div>
                  <label for="">Department</label>
                  <select name="" id="">
                    <option disabled selected>
                      Select Your Department
                    </option>
                    <option value="ICE">ICE</option>
                    <option value="CE">CE</option>
                    <option value="EEE">EEE</option>
                  </select>
                </div>
                {academicInformationField.map((item) => {
                  return (
                    <>
                      <div>
                        <label for="">{item.labelName}</label>
                        <input type="text" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <button onClick={onClose} class="close-button">
              Close
            </button>
            <button class="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;
