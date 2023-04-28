import PropTypes from 'prop-types';
import {
  Stack, StackDivider, Text, Box,
} from '@chakra-ui/react';
/* Using hardcoded values */
function IpDisplayDetails({ address }) {
  return (

    <Stack divider={<StackDivider />} spacing="1.2em" bg="white" top={['20%', '60%', '70%']} left="50%" position="absolute" transform={['translate(-50%, 50%)', 'translate(-50%, 40%)', 'translate(-50%, 30%)']} shadow="md" borderRadius="8" direction={['column', 'row']} alignItems="center" justifyContent={[null, 'space-around']} p={['1em', '1.2em', '2em']} w="90%">
      {address
      && (
      <>
        <Box>
          <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
            IP ADDRESS
          </Text>
          <Text color="black" fontWeight="bold" letterSpacing="1px">
            {address.ip}
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
            LOCATION
          </Text>
          <Text color="black" fontWeight="bold" letterSpacing="1px">
            {address.location.city}
            ,
            {' '}
            {address.location.region}
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
            TIMEZONE
          </Text>
          <Text color="black" fontWeight="bold" letterSpacing="1px">
            {address.location.timezone}
          </Text>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
            ISP
          </Text>
          <Text color="black" fontWeight="bold" letterSpacing="1px">
            {address.isp}
          </Text>
        </Box>
      </>
      )}
    </Stack>
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
  }).isRequired,
};

export default IpDisplayDetails;
