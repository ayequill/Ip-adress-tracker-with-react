import {
  Stack, StackDivider, Text, Box,
} from '@chakra-ui/react';
/* Using hardcoded values */
function IpDisplayDetails() {
  return (
    <Stack divider={<StackDivider />} spacing="1.2em" bg="white" top={['20%', '60%', '70%']} left="50%" position="absolute" transform={['translate(-50%, 50%)', 'translate(-50%, 40%)', 'translate(-50%, 30%)']} shadow="md" borderRadius="8" direction={['column', 'row']} alignItems="center" justifyContent={[null, 'space-around']} p={['1em', '1.2em', '2em']} w="90%">
      <Box>
        <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
          IP ADDRESS
        </Text>
        <Text color="black" fontWeight="bold" letterSpacing="1px">
          192.212.174.101
        </Text>
      </Box>
      <Box>
        <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
          LOCATION
        </Text>
        <Text color="black" fontWeight="bold" letterSpacing="1px">
          Brooklyn, NY 10001
        </Text>
      </Box>
      <Box>
        <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
          TIMEZONE
        </Text>
        <Text color="black" fontWeight="bold" letterSpacing="1px">
          UTC-5:00
        </Text>
      </Box>
      <Box>
        <Text textAlign="center" fontSize="0.65rem" color="blackAlpha.700" fontWeight="bold">
          ISP
        </Text>
        <Text color="black" fontWeight="bold" letterSpacing="1px">
          SpaceX Starlink
        </Text>
      </Box>
    </Stack>
  );
}

export default IpDisplayDetails;
