import { useState } from 'react';
import { ChakraProvider, Box, Text, Flex, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Search from './components/Search';

function App() {
  const [keyword, setKeyword] = useState('');

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
          <Search keyword={keyword} setKeyword={setKeyword} />
          <ColorModeSwitcher />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
