import React, { useEffect, useState, useReducer } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const goToSignup = () => {
    navigate("/Signup");
  };
  return (
    <div className="">
      <div className="">
        <Form className="">
          <h3 className="mt-5 text-center">Login</h3>
          <section className=" border border-secondary border-opacity-25 w-25 h-25 text-start mt-5 m-auto p-5">
            <label className="fw-2">Username/Email</label>
            <Form.Control
              placeholder="First name"
              className="bg-slate-200 focus-within:outline-blue-200 mt-2"
               type="email"
            />

            <label className="mt-4">Password</label>
            <Form.Control placeholder="Last name"  type="password"/>
            <Button
              variant="dark"
              className="rounded-pill px-5 py-3 fw-bold mt-4 mb-2 mt-2"
              style={{ marginBottom: "100px", marginLeft: "50px" }}
            >
              Login
            </Button>
            <p className="text-start ps-3 ">
              Don't have account?
              <a
                href="#"
                className="color-red "
                style={{ color: "red", fontSize: "15px" }}
                onClick={goToSignup}
              >
                Sign Up
              </a>
            </p>
          </section>
        </Form>
      </div>
    </div>
  );
}

export default User;
