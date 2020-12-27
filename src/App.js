import { useState } from 'react';
import { ChakraProvider, Box, Text, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Search from './components/Search';
import Teams from './components/Teams';

function App() {
  const [teams, setTeams] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex
          p={5}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Text fontSize="3xl" fontWeight="bold">
            Sport Teams
          </Text>
          <Search setTeams={setTeams} />
          <ColorModeSwitcher />
        </Flex>
      </Box>
      <Teams teams={teams} />
    </ChakraProvider>
  );
}

export default App;
