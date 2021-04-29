import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { UserContextProvider } from '../contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
