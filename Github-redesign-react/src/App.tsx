import { Routes } from './routes'
import { theme } from './styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { UserContextProvider } from './contexts/UserContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </ChakraProvider>

  );
}

export default App;
