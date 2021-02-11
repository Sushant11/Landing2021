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
  // fonts: {
  //   heading: "Manrope",
  //   body: "Manrope",
  // },
  config
})

export default theme;