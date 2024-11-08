
"use client"
import React, { useState } from 'react'
function page() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordCheck = () => {
    const correctPassword = "yourPassword"; // Replace with your password
    if (password === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthorized) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <h2>Enter Admin Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handlePasswordCheck} style={{ marginTop: '10px' }}>Submit</button>
      </div>
    );
  }
  return (
    <div>
    <h1>Welcome to the Admin Panel</h1>
    {/* Admin page content goes here */}
  </div>
  )
}

export default page