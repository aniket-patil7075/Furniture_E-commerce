import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Signup() {
  return (
    <div>
      <div className="">
        <Form className="">
          <h3 className="mt-5 text-center">Sign Up</h3>
          <section className=" border border-secondary border-opacity-25 w-25 h-25 text-start mt-5 m-auto p-5">
            <label className="fw-2">First name</label>
            <Form.Control
              placeholder="First name"
              className="bg-slate-200 focus-within:outline-blue-200 mt-2"
            />

            <label className="mt-4">Last name</label>
            <Form.Control placeholder="Last name" className="mt-2"/>

            <label className="mt-4">Email</label>
            <Form.Control placeholder="Email" className="mt-2"  type="email"/>
            <label className="mt-4">Password</label>
            <Form.Control placeholder="Password"  type="password" className="mt-2"/>
            <label className="mt-4">Confirm-password</label>
            <Form.Control placeholder="Confirm-password" type="password" className="mt-2"/>

            <Button
              variant="dark"
              className="rounded-pill px-5 py-3 fw-bold mt-4 mb-2"
              style={{ marginBottom: "100px", marginLeft: "40px" }}
            >
              Sign Up
            </Button>
            
          </section>
        </Form>
      </div>
    </div>
  );
}

export default Signup;