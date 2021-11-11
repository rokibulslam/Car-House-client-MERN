import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
    const [cancel, setCancel] = useState("");
    const {email} = user
    console.log(email)
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
    
    console.log(orders)
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are You Sure? You are going to cancel your order"
    );

    if (confirm) {
        axios
          .delete(`http://localhost:5000/order/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              alert("Your Order Has Canceled");
              window.location.reload();
            }
          })
          .then((data) => setCancel(data));
    }
  };
  return (
    <div className="my-5">
      <h1 className="fw-normal p-2">My Orders</h1>
      {orders.length ? (
        <div className="container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Adress</th>
                <th>Status</th>
                <th>Product</th>
              </tr>
            </thead>
            {orders?.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>1</td>
                  <td>
                    {order.adress}
                    <br />
                    {order.email}
                    <br />
                    {order.accountMail}
                    <br />
                    Phone:{order.phone}
                  </td>
                  {order.status === "Approved" ? (
                    <td className="text-primary">{order.status}</td>
                  ) : (
                    <td className="text-danger">{order.status}</td>
                  )}
                  <td>
                    ${order.productPrice}
                    <br />
                    {order.productName}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(order._id)}
                    >
                      Cancel Order
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      ) : (
        <h1>You have 0 Orders</h1>
      )}
    </div>
  );
};

export default MyOrders;
