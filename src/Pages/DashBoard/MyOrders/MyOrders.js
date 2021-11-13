import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrders.css";
import Swal from "sweetalert2";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [cancel, setCancel] = useState("");
  const { email } = user;
  console.log(email);
  useEffect(() => {
    fetch(`https://protected-cliffs-11617.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [cancel]);

  console.log(orders);
  const handleDelete = (id) => {
    const confirm = window.confirm(
      "Are You Sure? You are going to cancel your order"
    );

    if (confirm) {
      axios
        .delete(
          `https://protected-cliffs-11617.herokuapp.com/order/delete/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Order has been Cancelled Successfully",
              showConfirmButton: false,
              timer: 2000,
            });
            setCancel(res.data);
          }
        })
        .then((data) => setCancel(data));
    }
  };
  return (
    <div className="my-5 p-5 table-bg">
      <h1 className="fw-normal text-white">My Orders</h1>
      {orders.length ? (
        <div className="container">
          <Table striped bordered hover responsive>
            <thead>
              <tr className="bg-success text-white">
                <th>Order No</th>
                <th>Adress</th>
                <th>Status</th>
                <th>Product</th>
                <th>Manage Order</th>
              </tr>
            </thead>
            {orders?.map((order) => (
              <tbody key={order._id}>
                <tr className="py-5 bg-white text-white">
                  <td>1</td>
                  <td>
                    {order.email}
                    <br />
                    {order.city},{order.postCode},{order.country}
                    <br />
                    {order.date}
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
