import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { SidebarDrawerProvider } from '../contexts/SiderbarDrawerContext'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
      <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp