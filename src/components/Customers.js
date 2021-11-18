import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Customers = () => {
  const { users } = useContext(UserContext);

  const customerList =
    users.length < 1 ? (
      <div>List is empty</div>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Manage Customer</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td> <Link to={`/customers/${user.id}`}>Manage</Link> </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

  return (
    <Layout>
      <h3>CUSTOMERS</h3>
      {customerList}
    </Layout>
  );
};

export default Customers;
