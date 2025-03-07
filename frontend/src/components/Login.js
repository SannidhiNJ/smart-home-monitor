import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      {/* Header Text */}
      <h2>Login to Your Account</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        {/* Password Field */}
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        {/* Login Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
