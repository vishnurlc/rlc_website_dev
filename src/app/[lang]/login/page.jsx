'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import OtpInput from 'react-otp-input';
import { data } from 'autoprefixer';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [screen, setScreen] = useState(1);
  const [error, setErorr] = useState('');
  const router = useRouter();

  const handleSubmit = async (link, data) => {
    try {
      const response = await fetch(
        `https://clarity.richylife.ae/api/user-otps/${link}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      ).then((res) => res.json());

      if (response.error) {
        alert(response.error.message);
        return;
      }
      if (response.success === true) {
        return response;
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleLogin = async (e) => {
    // Call your Strapi authentication route here
    if (!username) {
      return alert('Please enter username');
    }
    const data = {
      email: username,
    };
    const res = await handleSubmit('send', data);

    if (!res) {
      return null;
    }
    console.log(res.success);
    if (res.success === true) {
      setScreen(2);
    } else {
      setErorr(true);
    }
  };

  const OtpVerify = async () => {
    const res = await handleSubmit('verifi', { email: username, otp: otp });

    if (res.success === true) {
      localStorage.setItem('token', res.token);
      alert(res.message);
      router.push('/accounts/deletion');
    }
  };

  return (
    <div className="mt-5">
      <div className="relative h-screen w-full">
        <Image
          src={'/assets/login/airballon.png'}
          fill
          alt="Richy life Club UAE"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          priority
          sizes="100vw"
        />
        <div className="absolute w-full h-full">
          <div className="z-10 h-full flex justify-center items-center">
            <div className="max-w-[540px] px-4 backdrop-blur-md mx-4">
              <Image
                src={'/assets/logos/rlclogowhite.png'}
                width={194}
                height={194}
                alt="Richy life Club UAE"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
                sizes="100vw"
                className="mx-auto"
              />

              <div className={screen === 1 ? 'text-white' : 'hidden'}>
                <div className="text-center">
                  <h3 className="text-4xl">Welcome back!</h3>
                  <p className="text-xl">
                    Enter your Credentials to access your account
                  </p>
                </div>
                <div className="mt-10">
                  <div className="sm:col-span-4 text-white">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium leading-6"
                    >
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your registered email"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="appearance-none w-full bg-transparent rounded-xl border border-white px-3 py-1.5 shadow-sm placeholder:text-gray-200  focus-visible:border-white fo sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* chck */}
                  <div className="flex items-center my-5">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded"
                    />
                    <label
                      for="default-checkbox"
                      className="ms-2 text-sm font-medium "
                    >
                      Remember for 30 days
                    </label>
                  </div>

                  <button
                    className="w-full bg-lime-900 rounded-xl h-8"
                    onClick={(e) => handleLogin()}
                  >
                    {' '}
                    Login
                  </button>

                  <p className="text-center mt-10 mb-5 text-lg">
                    Apply for Membership
                  </p>
                </div>
              </div>
              {/* OTP */}
              <div className={screen === 2 ? 'text-white' : 'hidden'}>
                <div className="text-center">
                  <h3 className="text-4xl">Enter OTP!</h3>
                  <p className="text-xl">
                    Enter your Credentials to access your account
                  </p>
                </div>
                <div className="mt-10">
                  {/* chck */}
                  <div className="flex justify-center  my-5">
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => (
                        <input
                          {...props}
                          className="h-20 text-black text-2xl text-center"
                          style={{ width: '40px' }}
                        />
                      )}
                    />
                  </div>

                  <button
                    className="w-full bg-lime-900 rounded-xl h-8"
                    onClick={OtpVerify}
                  >
                    {' '}
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>Login Page</h1>
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
      <input
        name="rember"
        id="ss"
        type="checkbox"
        className="accent-transparent"
      /> */}
    </div>
  );
}
