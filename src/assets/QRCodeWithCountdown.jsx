import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import QRCode from "qrcode.react";
import { Col } from "react-bootstrap";

const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 15);
};

function QRCodeWithCountdown() {
  const [qrValue, setQRValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds countdown

  useEffect(() => {
    // Function to generate a new QR code value
    const generateQRValue = () => {
      const newValue = `QR-${Date.now()}`;
      setQRValue(newValue);
      setTimeLeft(120); // Reset the countdown
    };

    // Generate the initial QR code
    generateQRValue();

    // Set interval to update QR code every 2 minutes (120000 ms)
    const qrInterval = setInterval(generateQRValue, 120000);

    // Set interval for countdown timer
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(qrInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  // Function to generate a random string

  return (
    // <div style={{ textAlign: 'center' }}>
    //   <QRCode value={qrValue} size={100} />
    //   <p>{`QR Code will update in: ${formatTime(timeLeft)}`}</p>
    // </div>
    <div className="">
      <h5 className='text-center'>QR Code</h5>
      <Row>
        <Col>
          <div className="" style={{ textAlign: "center" }}>
            <QRCode value={qrValue} size={120} />
          </div>
        </Col>
        <Col>
          <p>Scan the QR using any UPI app on your phone.</p>
          <p>{`QR Code will update in:`}</p><span className="text-danger">{`${formatTime(timeLeft)} minutes`}</span>
        </Col>
      </Row>
    </div>
  );
}

export default QRCodeWithCountdown;
