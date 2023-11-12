import { NavLink } from "react-router-dom";
import "./AllUser.css";
import { useState, useEffect } from "react";
import axios from "axios";
function AllUser() {
  const [fetchUser, setFetchUser] = useState([]);
  useEffect(() => {
    async function fetchUserList() {
      try {
        const response = await axios.get("/user/all-user");
        setFetchUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserList();
  }, []);
  return (
    <>
      <div className="table-container">
        <div className="title-bar">
          <NavLink to={"/"}>
            <img src="/Images/goto-icon-round.png" alt="icon" />
          </NavLink>
          <p>All User</p>
        </div>
        <div className="table-section">
          <table className="table-style">
            <thead>
              <tr>
                <th className="th1">ID</th>
                <th className="th2">Name</th>
                <th className="th3">Image</th>
                <th className="th4">Phone</th>
                <th className="th5">Email</th>
              </tr>
            </thead>
            <tbody>
              {fetchUser.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.image}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default AllUser;
