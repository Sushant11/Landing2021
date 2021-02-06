// theme.js
import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({
  colors: {
    brand: {
      100: "#E47383",
    },
  },
  config
})

export default theme;