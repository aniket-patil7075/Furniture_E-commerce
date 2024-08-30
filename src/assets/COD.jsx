import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function COD() {
    const navigate = useNavigate();

  const goToCOD = () => {
    navigate("/billingAdd");
  };
  return (
    <div className="p-3 bg-light border border-secondary border-opacity-25">
      <Button
                variant="dark rounded-pill fw-bold ms-3 p-3 mb-4"
                style={{ width: "150px", marginTop: "20px" }}
                onClick={goToCOD}
              >
                Add New Address
              </Button>
    </div>
  )
}

export default COD
