'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function Page() {
  const [userData, setUserData] = useState('');
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      const response = await fetch(
        `https://clarity.richylife.ae/api/users/me`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => res.json());

      if (response.error) {
        console.log(response);
        alert(response.error.message);
        return;
      }
      if (response) {
        setUserData(response);
        console.log(response);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  const handleDelete = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      const response = await fetch(`https://clarity.richylife.ae/api/user/me`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json());

      if (response.error) {
        alert(response.error.message);
        return;
      }
      if (response.success === true) {
        // Remove the token from local storage
        localStorage.removeItem('token');
        router.push('/login');
      }
    } catch (error) {
      console.log(` `);
    }
  };

  useEffect(() => {
    handleSubmit();
    console.log(userData);
  }, []);
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
        {userData && (
          <div className="absolute w-full h-full">
            <div className="z-10 h-full flex justify-center items-center">
              <div></div>
              <div className="max-w-[540px] px-4 backdrop-blur-md mx-4">
                <div className="text-white">
                  <div className="text-center">
                    <h3 className="text-4xl">
                      Welcome back! {userData.username}
                    </h3>
                    <button
                      className="w-full bg-red-900 rounded-xl h-8"
                      onClick={() => {
                        handleDelete();
                      }}
                    >
                      Delete your a/c
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
