import { useState } from 'react';
import { ChakraProvider, Box, Text, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Search from './components/Search';

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
      <Box textAlign="center" fontSize="xl">
        {teams.teams?.map(team => (
          <Text key={team.idTeam} fontSize="xl">
            {team.strTeam}
          </Text>
        ))}
      </Box>
    </ChakraProvider>
  );
}

export default App;
