import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 15);
  };

function QRCodeWithCountdown() {
    const [qrValue, setQrValue] = useState(generateRandomString());
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to generate a random string
  
  return (
    <div style={{ textAlign: 'center' }}>
      <QRCode value={qrValue} size={256} className='mt-5' />
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setQrValue(generateRandomString())}>
          Generate New QR Code
        </button>
      </div>
      
    </div>
  );
}

export default QRCodeWithCountdown;
