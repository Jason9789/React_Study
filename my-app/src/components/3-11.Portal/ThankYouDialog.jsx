import React from 'react';
import Dialog2 from './Dialog2';

export default function ThankYouDialog() {
  return (
    <Dialog2 
      title={<h1 style={{color: 'purple' }}>Thanks</h1>}
      description="It is honor to meet you"
      button={<button style={{
        backgroundColor: "lightblue",
        color: "white"
      }}
      >
        Close
        </button>}/>
  );
}
