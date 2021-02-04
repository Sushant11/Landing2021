import React from 'react';
import {
  Box,
  VStack,
  Grid,
  Heading
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './Utils/ColorModeSwitcher';

function App() {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading>
           Sushant Chitrakar 2021
            </Heading>
          </VStack>
        </Grid>
      </Box>
    </>
  );
}

export default App;
