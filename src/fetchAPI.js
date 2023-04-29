const API_KEY = import.meta.env.VITE_API_KEY;

const fetchIpDetails = async () => {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`);
    return await response.json();
  } catch (error) {
    error.message = 'Invalid IP address or domain';
    throw error;
  }
};
export default fetchIpDetails;
