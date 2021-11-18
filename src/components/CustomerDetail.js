import React, { useState, useContext, useEffect } from "react";
import Layout from "./Layout";
import { useNavigate, useParams } from "react-router";
import { UserContext } from "../contexts/UserContext";
import LimitForm from "./LimitForm";

const CustomerDetail = () => {
  const { users } = useContext(UserContext);
  const { customer_id } = useParams();

  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    setUserDetail(users.find((user) => user.id === parseInt(customer_id)));
  }, [users, customer_id]);


  const resetLimit =(lim)=> {
    setUserDetail({
        firstname: userDetail.firstname,
        lastname: userDetail.lastname,
        email: userDetail.email,
        phone: userDetail.phone,
        creditLimit: lim
    });
  }


  const detail = userDetail ? (
    <div className='customer-detail'>
      <p><span>Customer Name:</span> {userDetail.firstname} {userDetail.lastname}</p>
      <p><span>Customer Email:</span> {userDetail.email}</p>
      <p><span>Customer Phone no:</span> {userDetail.phone}</p>
        <br />
      <p><span>Credit Limit:</span> &#8358;{userDetail.creditLimit}</p>
      {
          userDetail.creditLimit > 0 ? (
            <p>This customer still has credit limit</p>
          ) : (
            <p>This customer can no longer buy on credit</p>
          )
      }
    </div>
  ) : (
    <div>Nothing to show here</div>
  );

  return (
    <Layout>
      <button className='go-back' onClick={() => navigate("/customers")}>
        Go back
      </button>
      <h3>MANAGE CUSTOMER</h3>
      {detail}

      <div className='form-section'>
       <LimitForm resetLimit={resetLimit} />
      </div>
    </Layout>
  );
};

export default CustomerDetail;
