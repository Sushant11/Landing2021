import React from 'react';
import {
  Box,
  VStack,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  HStack,
  IconButton,
  Tooltip
} from '@chakra-ui/react';
import Typed from 'react-typed';

import { HiMail } from 'react-icons/hi';

import { ColorModeSwitcher } from './Utils/ColorModeSwitcher';

import Profile from './Assets/profile.jpg'
import Socials from './Assets/socials';

function App() {
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={16}>
            <ColorModeSwitcher />
            <Box>
              <Image
                mt={[2, 8, 8]}
                borderRadius="full"
                boxSize="200px"
                src={Profile}
                alt="Sushant Chitrakar"
              />
            </Box>
            <Box>
              <Stack spacing={4} letterSpacing='4px'>
                <Heading>
                  HI!
            </Heading>
                <Heading>
                  I AM SUSHANT.
            </Heading>
                <Text fontSize="xl"><Typed
                  strings={['Software Developer', 'UI/UX Designer']}
                  typeSpeed={160}
                  backSpeed={60}
                  loop
                /></Text>
              </Stack>
            </Box>
            <Box>
              <a href='mailto:sushantchitrakar@gmail.com'>
                <Button iconSpacing='16px' leftIcon={<HiMail style={{ 'height': 24, 'width': 24 }} />} variant="solid" size="lg" borderRadius={50} boxShadow="md" bg='brand.100' color='white' _hover={{ bg: "#fff", color: 'brand.100' }}>
                  <span ml={6}>
                    Say Hello.
                    </span>
                </Button>
              </a>
            </Box>
            <Box >
              <HStack spacing={[2,6,10]} mt={[4, 16, 16]} mb={[8, 8, 8]}>
                {
                  Socials.map(social => (<Tooltip label={social.name} aria-label={social.name} bg="brand.100" color="white">
                    <a href={social.link} target='_blank' rel="noreferrer">
                      <IconButton aria-label={social.name} icon={social.icon} borderRadius={50} variant="ghost" />
                    </a>
                  </Tooltip>)
                  )
                }
              </HStack>
            </Box>
          </VStack>
        </Grid>
      </Box>
    </>
  );
}

export default App;
