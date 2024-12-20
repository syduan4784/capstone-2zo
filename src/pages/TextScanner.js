// components/TextScanner.js
import React, { useState } from 'react';
import axios from 'axios';
import { GOOGLE_CLOUD_VISION_API_KEY } from '../config/config';
import './TextScanner.css';

const TextScanner = ({ image }) => {
  const [text, setText] = useState('');

  const scanText = async () => {
    try {
      const response = await axios.post(
        `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_CLOUD_VISION_API_KEY}`,
        {
          requests: [
            {
              image: {
                content: image.split(',')[1],
              },
              features: [
                {
                  type: 'TEXT_DETECTION',
                  maxResults: 1,
                },
              ],
            },
          ],
        }
      );
      console.log('API response:', response.data); 
      setText(response.data.responses[0].fullTextAnnotation?.text || 'No text detected');
    } catch (error) {
      console.error('Error scanning text:', error);
    }
  };

  return (
    <div className='text-scanner'>
      <button onClick={scanText} className='scan-button'>Scan Text</button>
      {text && <p className='text-output'>Detected Text: {text}</p>}
    </div>
  );
};

export default TextScanner;
