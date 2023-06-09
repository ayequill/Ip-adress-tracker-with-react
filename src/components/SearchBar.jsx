import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  InputGroup,
  Input,
  InputRightAddon,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';
import Desktop from '../assets/pattern-bg-desktop.png';
import Mobile from '../assets/pattern-bg-mobile.png';

function SearchBar({ handleSubmit, handleQuery, searchValue }) {
  const handleInputChange = (e) => {
    const { value } = e.target;
    handleQuery(value);
  };
  const handleKeyUp = ((e) => {
    if (e.key === 'Enter') {
      handleSubmit();
      e.target.blur();
    }
  });

  return (
    <Flex
      as="header"
      height="15em"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={{
        base: Mobile,
        md: Desktop,
      }}
      alignItems="start"
      justifyContent="center"
    >
      <Box display="grid" w={{ base: '80%', md: '50%' }}>
        <Heading
          mt="0.3em"
          color="white"
          textAlign="center"
          fontSize={{ base: '1.7rem' }}
        >
          IP Address Tracker
        </Heading>
        <InputGroup size="md" mt={1}>
          <Input
            w="100%"
            borderRadius=".7em"
            backgroundColor="white"
            placeholder="Search for any IP address or domain"
            border="rgb(87,116,215) solid 1px"
            value={searchValue}
            onChange={(e) => handleInputChange(e)}
            onKeyUp={(e) => handleKeyUp(e)}
          />
          <InputRightAddon border="none" backgroundColor="blackAlpha.900">
            <Icon
              color="white"
              as={FaChevronRight}
              pointerEvents
              onClick={handleSubmit}
            />
          </InputRightAddon>
        </InputGroup>
      </Box>
    </Flex>
  );
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleQuery: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default SearchBar;
