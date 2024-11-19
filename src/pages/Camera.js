// components/Camera.js
import React from 'react';
import Webcam from 'react-webcam';
import './Camera.css';

const Camera = ({ onCapture }) => {
  const webcamRef = React.useRef(null);
  const [isCapturing, setIsCapturing] = React.useState(false); 

  const captureImage = () => {
    setIsCapturing(true); // Bat dau qua trinh chup
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
    setTimeout(() => setIsCapturing(false), 2000);
  };

  return (
    <div className='camera-container'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className='camera-video'
      />
      <button onClick={captureImage}
       className='capture-button'
       disabled={isCapturing}
       >
        {isCapturing ?  'Capturing...' : 'Capture Image'}
        </button>
    </div>
    
  );
};

export default Camera;
