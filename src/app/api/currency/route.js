export async function GET() {
  const apiEndpoint = `https://api.currencybeacon.com/v1/latest?api_key=${process.env.NEXT_PUBLIC_CURRENCY_BEACON_API}&base=AED`;

  const res = await fetch(apiEndpoint, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return Response.json(data);
}
