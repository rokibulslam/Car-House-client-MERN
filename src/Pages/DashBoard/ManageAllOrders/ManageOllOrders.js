import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Table } from "react-bootstrap";

const ManageOllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [deletes, setDelete] = useState("");
  console.log(orders);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [deletes]);

  const handlePending = (id, text) => {
    axios
      .put(`http://localhost:5000/order/status/${id}`, {
        status: text,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          alert("Approved Order");
          window.location.reload();
        }
      })
      .then((data) => setDelete(data));
  };

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
          }
        })
        .then((data) => setDelete(data));
    }
  };
  return (
    <div className="mt-0 p-5 bg-order">
      <div className="container ">
        <div>
          <h1 className="fw-light">Manage All Orders</h1>
          <Table responsive="sm" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Ordered BY</th>
                <th>Adress</th>
                <th>Status</th>
                <th>Manage Order</th>
              </tr>
            </thead>
            {orders?.map((order) => (
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Customer Name: {order.customerName} <br />
                    Country: {order.adress}
                    <br />
                    Email: {order.acoountMail}
                    <br />
                    Phone No: {order.phone}
                  </td>
                  <td>
                    Service Price: ${order.productPrice}
                    <br />
                    Service Name: {order.productName}
                  </td>
                  {order.status === "Approved" ? (
                    <td className="text-white">{order.status}</td>
                  ) : (
                    <td className="text-danger">{order.status}</td>
                  )}

                  <td>
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Manange Order"
                    >
                      <Dropdown.Item href="#/action-1">
                        <button
                          className="btn btn-success"
                          onClick={() => handlePending(order._id, "Approved")}
                        >
                          Approved Order
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <button
                          className="btn btn-success"
                          onClick={() => handlePending(order._id, "Shipping")}
                        >
                          Shipping
                        </button>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <button
                          className="btn btn-warning "
                          onClick={() => handleDelete(order._id)}
                        >
                          Cancel Order
                        </button>
                      </Dropdown.Item>
                    </DropdownButton>

                    <br />
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOllOrders;
