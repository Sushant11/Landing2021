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
              mt={8}
                borderRadius="full"
                boxSize="200px"
                src={Profile}
                alt="Sushant Chitrakar"
              />
            </Box>
            <Box>
              <Stack spacing={4}>
                <Heading>
                  HI!
            </Heading>
                <Heading>
                  I AM SUSHANT.
            </Heading>
                <Text fontSize="xl"><Typed
                  strings={['Software Developer', 'UI/UX Designer']}
                  typeSpeed={100}
                  backSpeed={60}
                  loop
                /></Text>
              </Stack>
            </Box>
            <Box>
              <a href='mailto:sushantchitrakar@gmail.com'>
                <Button leftIcon={<HiMail />} variant="solid" size="lg" borderRadius={50} boxShadow="md">
                  <span ml={6}>
                    Say Hello.
                    </span>
              </Button>
              </a>
            </Box>
            <Box >
              <HStack spacing="24px" mt={16} wrap>
                {
                  Socials.map(social => (<Tooltip hasArrow label={social.name} aria-label={social.name} bg="pink.500" color="white">
                    <a href={social.link}>
                      <IconButton aria-label={social.name} icon={social.icon} borderRadius={50} />
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
