'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    // Call your Strapi authentication route here
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: username, password }),
      }
    ).then((res) => res.json());

    if (response.user) {
      // Successful login
      console.log('user token', response.jwt);
      router.push('/');
    } else {
      // Handle login failure
      console.error('Login failed');
    }
  };

  return (
    <div className="mt-[100px]">
      <h1>Login Page</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
