import React from 'react';
import { useColorMode, useColorModeValue, IconButton, Tooltip } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Tooltip label={`Switch to ${text} mode`} aria-label={`Switch to ${text} mode`} bg="brand.100" color="white">
      <IconButton
        borderRadius={50}
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </Tooltip>
  );
};
