import React, { useEffect, useMemo } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import PropTypes from 'prop-types';
import icon from './icon';

export default function MarkerPosition({ address }) {
  const position = useMemo(
    () => [address?.location?.lat, address?.location?.lng],
    [address?.location?.lat, address?.location?.lng],
  );

  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 13, {
        animate: true,
      });
    }
  }, [map, position]);

  return (
    <>
      {position && (
        <Marker icon={icon} position={position}>
          <Popup>
            A pretty CSS3 popup.
            {' '}
            <br />
            {' '}
            Easily customizable.
          </Popup>
        </Marker>
      )}
    </>
  );
}

MarkerPosition.propTypes = {
  address: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  }),
};
MarkerPosition.defaultProps = {
  address: null,
};
