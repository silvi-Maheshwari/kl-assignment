import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
// import './DataTable.css'; // Import the new styles

const DataTable = () => {
  const { users } = useContext(UserContext);

  return (
    <div className="table-container">
      <h2 className="table-title">Registered Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
