import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'light'
}

const theme = extendTheme({config});
export default theme;