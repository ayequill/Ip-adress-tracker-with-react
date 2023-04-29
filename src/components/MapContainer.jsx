import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import MarkerPosition from './MarkerPosition';

const MapContainers = ({ address }) => (
  <Box>
    {address
    && (
      <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom style={{ height: '700px', width: '100vw' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerPosition address={address} />
      </MapContainer>
    )}
  </Box>
);

MapContainers.propTypes = {
  address: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MapContainers;
