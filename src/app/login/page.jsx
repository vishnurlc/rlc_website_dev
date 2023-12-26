"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Call your Strapi authentication route here
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier: username, password }),
      }
    ).then((res) => res.json());

    if (response.user) {
      // Successful login
      console.log("user token", response.jwt);
      router.push("/");
    } else {
      // Handle login failure
      console.error("Login failed");
    }
  };

  return (
    <div className="mt-5">
      <div className="relative h-screen w-full">
        <Image
          src={"/assets/login/airballon.png"}
          fill
          alt="Richy life Club UAE"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
          sizes="100vw"
        />
        <div className="absolute w-full h-full">
          <div className="z-10 h-full flex justify-center items-center">
            <div className="max-w-[540px] px-4 backdrop-blur-md mx-4">
              <Image
                src={"/assets/logos/rlclogowhite.png"}
                width={194}
                height={194}
                alt="Richy life Club UAE"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority
                sizes="100vw"
                className="mx-auto"
              />

              <div className="text-white ">
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
                        className="appearance-none w-full bg-transparent rounded-xl border border-white px-3 py-1.5 shadow-sm placeholder:text-white focus-visible:border-white fo sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* chck */}
                  <div class="flex items-center my-5">
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

                  <button className="w-full bg-lime-900 rounded-xl h-8">
                    {" "}
                    Login
                  </button>

                  <p className="text-center mt-10 mb-5 text-lg">
                    Apply for Membership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <input
        name="rember"
        id="ss"
        type="checkbox"
        className="accent-transparent"
      />
    </div>
  );
}
