import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { fetchIpDetails } from './redux/IpTracker/iptrackerSlice';
import SearchBar from './components/SearchBar';
import IpDisplayDetails from './components/IpDetails';
import MapContainer from './components/MapContainer';

const API_KEY = import.meta.env.VITE_API_KEY;
const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const timeoutId = useRef(null);

  useEffect(() => {
    fetchIpDetails()
      .then((data) => {
        setAddress(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const getEnteredAddress = useCallback(async () => {
    let query = '';
    if (checkIpAddress.test(ipAddress)) {
      query = `ipAddress=${ipAddress}`;
    } else if (checkDomain.test(ipAddress)) {
      query = `domain=${ipAddress}`;
    } else {
      query = `ipAddress=${address.ip}`;
    }
    try {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${query}`);
      const data = await res.json();
      setAddress(data);
    } catch (error) {
      setAddress({ error: error.message });
    }
  }, [ipAddress, address]);

  const handleSubmit = useCallback(() => {
    getEnteredAddress();
    setIpAddress('');
  }, [getEnteredAddress]);

  const handleQuery = useCallback((value) => {
    setSearchValue(value);
    if (value) {
      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setIpAddress(value);
      }, 500); // debounce time of 500ms
    }
  }, []);

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        handleQuery={handleQuery}
        handleSubmit={handleSubmit}
      />
      <IpDisplayDetails address={address} />
      <MapContainer address={address} />
    </>
  );
}

export default App;
