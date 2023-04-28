import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import IpDisplayDetails from './components/IpDetails';
import MapContainer from './components/MapContainer';
// import { fetchIpDetails } from './redux/IpTracker/iptrackerSlice';

function App() {
  const [address, setAddress] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    try {
      const fetchIpDetails = async () => {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setAddress(data);
      };
      fetchIpDetails();
    } catch (error) {
      error.message = 'Invalid IP address or domain';
    }
  }, []);

  const getEnteredAddress = async () => {
    let query = '';
    if (checkIpAddress.test(ipAddress)) {
      query = `ipAddress=${ipAddress}`;
    } else if (checkDomain.test(ipAddress)) {
      query = `domain=${ipAddress}`;
    } else {
      query = `ipAddress=${address.ip}`;
    }
    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&${query}`);
    const data = await res.json();
    setAddress(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getEnteredAddress();
    setIpAddress('');
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <IpDisplayDetails address={address} />
      <MapContainer address={address} />
    </>
  );
}

export default App;
