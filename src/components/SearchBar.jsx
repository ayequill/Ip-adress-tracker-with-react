import {
  Box,
  Heading,
  InputGroup,
  Input,
  InputRightAddon,
  Icon, Flex,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

function SearchBar() {
  return (
    <Flex
      as="header"
      height="15em"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={{ base: 'src/assets/pattern-bg-mobile.png', md: 'src/assets/pattern-bg-desktop.png' }}
      alignItems="start"
      justifyContent="center"
    >
      <Box display="grid" w={{ base: '80%', md: '50%' }}>
        <Heading mt="0.6em" color="white" textAlign="center" fontSize={{ base: '1.7rem' }}>IP Address Tracker</Heading>
        <InputGroup size="md" mt="8">
          <Input w="100%" borderRadius=".7em" backgroundColor="white" placeholder="Search for any IP address or domain" border="rgb(87,116,215) solid 1px" />
          <InputRightAddon border="none" backgroundColor="blackAlpha.900"><Icon color="white" as={FaChevronRight} /></InputRightAddon>
        </InputGroup>
      </Box>
    </Flex>
  );
}

export default SearchBar;
