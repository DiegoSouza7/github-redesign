import { Button, Flex, Icon } from "@chakra-ui/react";
import { Body } from "../components/BodyRepositories";
import { Header } from "../components/HeaderRepositories";
import { Profile } from "../components/Profile";
import { Sidebar } from "../components/Sidebar";
import {GoPlusSmall} from 'react-icons/go'

export default function Repositories() {
  return (
    <Flex
      gridTemplateColumns="220px 250px 1fr"
    >
      <Sidebar />
      <Profile />
      <Flex
        flexDirection="column"
        w="100%"
        overflowY="scroll"
        h="100vh"
        position="relative"
      >
        <Header />
        <Body />
        <Button
          position="fixed"
          zIndex="5"
          height="60px"
          width="60px"
          borderRadius="50"
          bg="blue.600"
          bottom="20px"
          right="30px"
          _hover={{ bgColor: "blue.500"}}
        >
          <Icon as={GoPlusSmall} fontSize="30" />
        </Button>
      </Flex>
    </Flex>  )
}