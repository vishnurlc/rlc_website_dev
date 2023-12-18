import NodeCache from 'node-cache';

const currencyCache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour (3600 seconds)

export async function GET() {
  // Check if the response is already in the cache
  const cachedResponse = currencyCache.get('currencyResponse');

  if (cachedResponse) {
    console.log('Cache hit!');
    return Response.json(cachedResponse);
  }

  // If not in cache, fetch the data and store it in the cache
  try {
    const apiEndpoint = `https://api.currencybeacon.com/v1/latest?api_key=${process.env.NEXT_PUBLIC_CURRENCY_BEACON_API}&base=AED`;

    const res = await fetch(apiEndpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    // Store the response in the cache
    currencyCache.set('currencyResponse', data);

    return Response.json(data);
  } catch (error) {
    console.error('Error fetching currency data:', error);
    return Response.error(500, 'Internal Server Error');
  }
}
