import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import IpDisplayDetails from './components/IpDetails';
import MapContainer from './components/MapContainer';
import { fetchIpDetails } from './redux/IpTracker/iptrackerSlice';

function App() {
  const [address, setAddress] = useState('');
  const [ipDetails, setIpDetails] = useState({});
  const checkIpAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  useEffect(() => {
    try {
      fetchIpDetails().then((data) => {
        setAddress(data);
      });
    } catch (error) {
      error.message = 'Invalid IP address or domain';
    }
  }, []);

  const getEnteredAddress = async () => {
    let query = '';
    if (checkIpAddress.test(ipDetails)) {
      query = `ipAddress=${ipDetails}`;
    } else if (checkDomain.test(ipDetails)) {
      query = `domain=${ipDetails}`;
    } else {
      query = `ipAddress=${address.ip}`;
    }

    const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&${query}`);
    const data = await res.json();
    setIpDetails(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getEnteredAddress();
    setIpDetails('');
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <IpDisplayDetails />
      <MapContainer />
    </>
  );
}

export default App;
