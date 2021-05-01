import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      bg="blue.400"
      flexDirection="column"
    >
      <Link href="repositories">
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
      <Link href="login">
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