export default async function fetchData(apiEndpoint) {
  try {
    const res = await fetch(apiEndpoint, {
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
      },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    setStatus(0);
    return {};
  }
}
