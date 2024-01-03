import { useState } from "react";

export default async function fetchData(apiEndpoint) {
  const [status, setStatus] = useState();
  try {
    const res = await fetch(apiEndpoint, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    const data = await res.json();

    // Check if the response contains data
    if (data.data.length === 0) {
      setStatus(1); // Set your status accordingly
    } else {
      setStatus(2); // Set your status accordingly
    }

    return { data, status };
  } catch (error) {
    setStatus(0);
    return { data: null, status };
  }
}
