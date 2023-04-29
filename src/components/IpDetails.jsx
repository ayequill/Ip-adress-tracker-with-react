import PropTypes from 'prop-types';
import {
  Stack, StackDivider, Text, Box,
} from '@chakra-ui/react';

function IpDisplayDetails({ address }) {
  if (!address) {
    return null;
  }

  const { ip, isp, location } = address;

  if (!ip || !isp || !location) {
    return null;
  }

  const { city, region, timezone } = location;

  return (
    <Box
      position="fixed"
      top={['15%', '18%', '12%', '16%']}
      left="50%"
      transform={[
        'translate(-50%, 0%)',
        'translate(-50%, 0%)',
        'translate(-50%, 30%)',
      ]}
      zIndex={1000}
      bg="white"
      borderRadius="8"
      shadow="md"
      p={['1em', '1.2em', '2em']}
      minWidth="320px"
      maxWidth="90%"
    >
      <Stack
        direction={['column', 'row']}
        alignItems="center"
        justifyContent={[null, 'space-around']}
        divider={<StackDivider />}
        spacing="0.8em"
      >
        <Box textAlign="center">
          <Text
            fontSize="0.65rem"
            color="blackAlpha.700"
            fontWeight="bold"
            textTransform="uppercase"
          >
            IP Address
          </Text>
          <Text fontWeight="bold" letterSpacing="1px">
            {ip}
          </Text>
        </Box>
        <Box textAlign="center">
          <Text
            fontSize="0.65rem"
            color="blackAlpha.700"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Location
          </Text>
          <Text fontWeight="bold" letterSpacing="1px">
            {city}
            ,
            {' '}
            {region}
          </Text>
        </Box>
        <Box textAlign="center">
          <Text
            fontSize="0.65rem"
            color="blackAlpha.700"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Timezone
          </Text>
          <Text fontWeight="bold" letterSpacing="1px">
            {timezone}
          </Text>
        </Box>
        <Box textAlign="center">
          <Text
            fontSize="0.65rem"
            color="blackAlpha.700"
            fontWeight="bold"
            textTransform="uppercase"
          >
            ISP
          </Text>
          <Text fontWeight="bold" letterSpacing="1px">
            {isp}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

IpDisplayDetails.propTypes = {
  address: PropTypes.shape({
    ip: PropTypes.string.isRequired,
    isp: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
IpDisplayDetails.defaultProps = {
  address: null,
};
export default IpDisplayDetails;
