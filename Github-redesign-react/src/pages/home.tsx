import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bg="blue.400"
      flexDirection="column"
    >
      <Link to="repositories">
        <Button
          type="button"
          mt="6"
          bgColor="green.500"
          _hover={{ bgColor: 'green.400' }}
          size="lg"
          w="200px"
        >
          To repositories
          </Button>
      </Link>
      <Link to="login">
        <Button
          type="button"
          mt="6"
          bgColor="green.500"
          _hover={{ bgColor: 'green.400' }}
          size="lg"
          w="200px"
        >
          To Login
          </Button>
      </Link>
    </Flex>
  )
}